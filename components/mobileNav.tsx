"use client";

// packages
import { AlignJustify, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const MobileNav = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="relative">
            <div className="mr-2">
                {open ? (
                    <X onClick={() => setOpen(!open)} className="w-8 h-8" />
                ) : (
                    <AlignJustify
                        onClick={() => setOpen(!open)}
                        className="w-8 h-8"
                    />
                )}
            </div>

            <div>
                {open && (
                    <div className="absolute top-12 right-1 bg-white border-[1px] border-black w-48 pt-5 duration-1000">
                        <div className="flex flex-col items-center gap-y-5">
                            <Link href={"/projects"}>PROJECTS</Link>
                            <Link href={"/services"}>SERVICES</Link>
                            <Link href={"/about"}>ABOUT ME</Link>
                            <Link
                                href={"/contact"}
                                className="bg-[#242424] w-full text-center py-[23px] text-white hover:bg-opacity-85 duration-500"
                            >
                                GET IN TOUCH
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MobileNav;
