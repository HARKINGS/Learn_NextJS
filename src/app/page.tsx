import Link from "next/link";

import appStyle from "@/styles/app.module.css";
import harkinsStyle from "@/styles/harkins.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Homepage",
    description: "XYZ GAIM 2024",
};

export default function Home() {
    return (
        <div>
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
                    <Link href="/blogs">TikTok</Link>
                </li>
            </ul>
        </div>
    );
}
