"use client";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import CreateModal from "./create.modal";
import { useState } from "react";

interface IProps {
    blogs: IBlog[];
}

function AppTable(props: IProps) {
    const { blogs } = props;
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <>
            <div
                className="mb-3"
                style={{ display: "flex", justifyContent: "space-between" }}
            >
                <h3>Table Blogs</h3>
                <Button variant="success" onClick={() => setShowModal(true)}>
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
                            <td>{index + 1}</td>
                            <td>{blog.title}</td>
                            <td>{blog.author}</td>
                            {/* <td>{blog.content}</td> */}
                            <td>
                                <Button variant="info">View</Button>
                                <Button variant="primary" className="mx-3">
                                    Edit
                                </Button>
                                <Button variant="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <CreateModal showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}

export default AppTable;
