"use client";
import Link from "next/link";
import { Button, Card } from "react-bootstrap";
import useSWR from "swr";
import { useParams } from "next/navigation";

const ViewDetailBlog = () => {
    const params = useParams();

    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        params.id ? `http://localhost:8000/blogs/${params.id}` : null,
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    );

    if (error) return <div>failed to load</div>;
    if (isLoading || !data) return <div>loading...</div>;

    return (
        <>
            <Button variant="primary">
                <Link
                    href="/blogs"
                    style={{ color: "white", textDecoration: "none" }}
                >
                    Go Back
                </Link>
            </Button>

            <Card>
                <Card.Header as="h5">{data.author}</Card.Header>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.content}</Card.Text>
                    <Button variant="primary">
                        <Link
                            href="/blogs"
                            style={{ color: "white", textDecoration: "none" }}
                        >
                            Go Back
                        </Link>
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ViewDetailBlog;
