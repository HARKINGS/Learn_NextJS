"use client";

import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

interface IProps {
    blogs: IBlog[];
}

function AppTable(props: IProps) {
    const { blogs } = props;
    console.log(">>> check blogs in table:", blogs);

    return (
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
    );
}

export default AppTable;
