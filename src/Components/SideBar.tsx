'use client'

import React, { useState } from "react";

interface SidebarItem {
  name: string;
  href: string;
}

const SideBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const sidebarItems: SidebarItem[] = [
    { name: "Dashboard", href: "/home" },
    { name: "Profile", href: "/Profile" },
    { name: "Settings", href: "#" },
    { name: "Logout", href: "#" }
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <aside className="bg-purple-800 text-white w-64 min-h-screen p-6 ">
      <ul className="space-y-4 mt-12">
        {sidebarItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.href}
              onClick={() => handleClick(index)}
              className={`block p-3 rounded-lg transition-colors duration-300
                ${
                  activeIndex === index
                    ? "bg-purple-600 text-white"
                    : "text-purple-300"
                }
                hover:bg-purple-300 hover:text-white
                active:bg-purple-600 active:text-white
              `}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SideBar;
