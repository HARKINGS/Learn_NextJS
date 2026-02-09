"use client";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import UpdateModal from "./update.modal";
import CreateModal from "./create.modal";

interface IProps {
    blogs: IBlog[];
}

function AppTable(props: IProps) {
    const { blogs } = props;
    const [showModal, setShowModal] = useState<boolean>(false);
    const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);

    return (
        <>
            <div
                className="mb-3"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <h3>Table Blogs</h3>
                <Button
                    variant="success"
                    onClick={() => {
                        setSelectedBlogId(null);
                        setShowModal(true);
                    }}
                >
                    Add New Blog
                </Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Author</th>
                        {/* <th>Content</th> */}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs?.map((blog, index) => (
                        <tr key={blog.id}>
                            <td>{blog.id}</td>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            {/* <td>{blog.content}</td> */}
                            <td>
                                <Button variant="info">View</Button>
                                <Button
                                    variant="primary"
                                    className="mx-3"
                                    onClick={() => {
                                        setSelectedBlogId(blog.id);
                                        setShowModal(true);
                                    }}
                                >
                                    Edit
                                </Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {selectedBlogId === null ? (
                <CreateModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            ) : (
                <UpdateModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    selectedBlogId={selectedBlogId}
                />
            )}
        </>
    );
}

export default AppTable;
