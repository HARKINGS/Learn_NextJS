export const metadata = {
    title: "Blog Detail Page",
    description: "Blog Detail Layout Page",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
