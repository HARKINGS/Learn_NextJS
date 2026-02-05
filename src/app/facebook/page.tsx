"use client";

import { useRouter } from "next/navigation";
import Button from "react-bootstrap/Button";

const FaceBook = () => {
    const router = useRouter();

    const handleBtn = () => {
        router.push("/");
    };

    return (
        <div>
            FaceBook Page
            <div>
                <Button variant="primary" onClick={handleBtn}>
                    Go to Home
                </Button>
            </div>
            <div>
                <button onClick={handleBtn}>Click Me</button>
            </div>
        </div>
    );
};

export default FaceBook;
