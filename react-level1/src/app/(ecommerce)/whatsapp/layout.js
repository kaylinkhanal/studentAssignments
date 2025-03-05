import SideNav from "@/components/side-nav";

export default function WhatsAppLayout({
  children,
}) {
  return (
    <div className="flex h-screen bg-[#0f1621]">
      <SideNav />
      <main className="flex-1">{children}</main>
    </div>
  );
}
