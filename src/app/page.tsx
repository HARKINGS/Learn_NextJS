import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

import appStyle from "@/styles/app.module.css";
import harkinsStyle from "@/styles/harkins.module.css";
import AppTable from "@/components/app.table";

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
                    <Link href="/tiktok">TikTok</Link>
                </li>
            </ul>

            <AppTable />
        </div>
    );
}
