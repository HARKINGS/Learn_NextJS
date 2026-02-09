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

    const [blog, setBlog] = useState<IBlog | null>(null);
    const [showModal, setShowModal] = useState<boolean>(false);

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
                        setBlog(null);
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
                    {blogs?.map((item, index) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.author}</td>
                            {/* <td>{item.content}</td> */}
                            <td>
                                <Button variant="info">View</Button>
                                <Button
                                    variant="primary"
                                    className="mx-3"
                                    onClick={() => {
                                        setBlog(item);
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
            {blog == null ? (
                <CreateModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            ) : (
                <UpdateModal
                    showModal={showModal}
                    setShowModal={setShowModal}
                    blog={blog}
                    setBlog={setBlog}
                />
            )}
            ;
        </>
    );
}

export default AppTable;
