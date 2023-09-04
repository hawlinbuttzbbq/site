import "./info.css";

export default async function InfoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
