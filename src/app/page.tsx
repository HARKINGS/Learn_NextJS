"use client";

import Link from "next/link";

import appStyle from "@/styles/app.module.css";
import harkinsStyle from "@/styles/harkins.module.css";
import AppTable from "@/components/app.table";
import useSWR from "swr";

export default function Home() {
    const fetcher = (url: string) => fetch(url).then((res) => res.json());

    const { data, error, isLoading } = useSWR(
        "http://localhost:8000/blogs",
        fetcher,
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
        },
    );

    if (error) return <div>failed to load</div>;
    if (isLoading || !data) return <div>loading...</div>;

    console.log(">>> check res:", data);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("http://localhost:8000/blogs");
    //         const data = await res.json();
    //         console.log(">>> check res:", data);
    //     };
    //     fetchData();
    // }, []);

    return (
        <div>
            <div>{data?.length}</div>
            <ul>
                <li className={appStyle.red}>
                    <Link href="/facebook">
                        <span className={harkinsStyle.red}>Facebook</span>
                    </Link>
                </li>
                <li className={harkinsStyle.blue}>
                    <Link href="/youtube">YouTube</Link>
                </li>
                <li className={harkinsStyle.blue}>
                    <Link href="/tiktok">TikTok</Link>
                </li>
            </ul>

            <AppTable blogs={data?.sort((a: any, b: any) => b.id - a.id)} />
        </div>
    );
}
