import React from "react";
import { BellIcon, SearchIcon, UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const NavBar: React.FC = () => {
    return (
        <nav className="bg-purple-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-xl font-bold">My Book Review</div>

                <div className="flex items-center space-x-2">
                    <Input
                        type="text"
                        placeholder="Search..."
                        className="bg-purple-300 text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                    <Button variant="ghost" className="text-white hover:text-purple-300">
                        <SearchIcon className="w-5 h-5" />
                    </Button>
                </div>
                <div className="flex space-x-4 items-center">
                    <Button variant="ghost" className="text-white hover:text-purple-300">
                        <BellIcon className="w-6 h-6" />
                    </Button>

                    <Button variant="ghost" className="text-white hover:text-purple-300">
                        <UserIcon className="w-6 h-6" />
                    </Button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
