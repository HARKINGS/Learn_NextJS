"use-client";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { mutate } from "swr";

interface IProps {
    id: string;
    setId: (id: string) => void;
}

function DeletePopup(props: IProps) {
    const [showConfirm, setShowConfirm] = useState(false);

    useEffect(() => {
        if (props.id) {
            setShowConfirm(true);
        }
    }, [props.id]);

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${props.id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((res) => {
                if (res) toast.success("Blog deleted successfully!");
                handleClose();
                mutate("http://localhost:8000/blogs");
            });
    };

    const handleClose = () => {
        setShowConfirm(false);
        props.setId("");
    };

    const handleConfirm = () => {
        handleDelete();
    };

    return (
        <Modal show={showConfirm} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Confirm Delete</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete this blog?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeletePopup;
