const ViewDetailBlog = ({ params }: { params: { id: string } }) => {
    console.log("ViewDetailBlog props:", params.id);

    return (
        <>
            <div>View Detail Page {params.id}</div>
        </>
    );
};

export default ViewDetailBlog;
