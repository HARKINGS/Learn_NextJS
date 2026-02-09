"use-client";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";
import useSWR from "swr";

interface IProps {
    showModal: boolean;
    setShowModal: (show: boolean) => void;
    selectedBlogId: number | null;
}

function UpdateModal(props: IProps) {
    const { showModal, setShowModal, selectedBlogId } = props;

    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/blogs/" + selectedBlogId,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    );

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [content, setContent] = useState<string>("");

    useEffect(() => {
        if (data) {
            setTitle(data.title);
            setAuthor(data.author);
            setContent(data.content);
        }
    }, [data]);

    if (error) return <div>failed to load</div>;
    if (isLoading || !data) return <div>loading...</div>;

    const handleUpdate = () => {
        if (!title || !author || !content) {
            toast.error("Please fill in all fields!");
            return;
        }

        fetch(`http://localhost:8000/blogs/${selectedBlogId}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title,
                author,
                content,
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res) toast.warning("Blog updated successfully!");
                handleClose();
                mutate("http://localhost:8000/blogs");
            });
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Modal
                show={showModal}
                onHide={() => handleClose()}
                backdrop="static"
                keyboard={false}
                size="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Update a blog</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter blog title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Author</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter blog author"
                                value={author}
                                onChange={(e) => setAuthor(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Content</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose()}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleUpdate()}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default UpdateModal;
