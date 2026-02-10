export const metadata = {
    title: "Blogs Page",
    description: "Blogs Layout Page",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
