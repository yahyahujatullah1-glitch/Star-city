import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StaffCore | Dashboard",
  description: "Advanced Staff Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-staff-bg`}>
        <div className="flex min-h-screen">
          {/* We hide sidebar on mobile by default in CSS, but handle it here */}
          <Sidebar />
          <main className="flex-1 lg:ml-72 min-h-screen bg-staff-bg relative">
            <div className="relative z-10">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
