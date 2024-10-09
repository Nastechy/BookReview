import React from "react";
import "./globals.css";
import TopNavBar from "@/Components/TopNavBar";
import SideBar from "@/Components/SideBar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="flex">
        <SideBar />
        <div className="flex-1">
          <TopNavBar />
          <main className="p-4">{children}</main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
