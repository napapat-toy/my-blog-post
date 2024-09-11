import React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="h-[50px] flex items-center justify-between bg-blue-900 p-4">
      <Link href={"/"} className="text-white text-3xl">
        Blog
      </Link>
      <div className="flex justify-between items-center gap-2">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p className="text-white font-semibold text-lg">Red</p>
        {/* <Button>Logout</Button> */}
      </div>
    </div>
  );
};

export default Navbar;
