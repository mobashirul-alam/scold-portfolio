"use client";

import MarqueeBig from "@/components/ui/marqueeBig";
import { robotoMono } from "@/components/utils";
import Image from "next/image";

const SelectedWork = () => {
    const projects = [
        {
            id: 1,
            image: "/projects/project-1.png",
            name: "Vision Studio",
        },
        {
            id: 2,
            image: "/projects/project-2.png",
            name: "Vision Studio",
        },
        {
            id: 3,
            image: "/projects/project-3.png",
            name: "Vision Studio",
        },
        {
            id: 4,
            image: "/projects/project-4.png",
            name: "Vision Studio",
        },
    ];
    return (
        <div>
            <div>
                <MarqueeBig text="SELECTED WORK" />
            </div>

            <div>
                <div className="grid grid-cols-2 border-y-[1px] border-black">
                    <div>
                        <div className="border-b-[1px] border-black relative group">
                            <Image
                                alt=""
                                src={projects[1].image}
                                height={450}
                                width={960}
                            />
                            <button
                                className={`${robotoMono.className} text-[13px] bg-[#EBFB48] border-[1px] border-black py-2 px-3 absolute top-1/2 left-1/2 -ml-6 -mt-4 opacity-0 group-hover:opacity-100 duration-500`}
                            >
                                View
                            </button>
                        </div>
                        <div className="grid grid-cols-2">
                            <div className="relative group">
                                <Image
                                    alt=""
                                    src={projects[2].image}
                                    width={480}
                                    height={450}
                                    className="border-r-[1px] border-black"
                                />
                                <button
                                    className={`${robotoMono.className} text-[13px] bg-[#EBFB48] border-[1px] border-black py-2 px-3 absolute top-1/2 left-1/2 -ml-6 -mt-4 opacity-0 group-hover:opacity-100 duration-500`}
                                >
                                    View
                                </button>
                            </div>
                            <div className="relative group">
                                <Image
                                    alt=""
                                    src={projects[3].image}
                                    width={480}
                                    height={450}
                                />
                                <button
                                    className={`${robotoMono.className} text-[13px] bg-[#EBFB48] border-[1px] border-black py-2 px-3 absolute top-1/2 left-1/2 -ml-6 -mt-4 opacity-0 group-hover:opacity-100 duration-500`}
                                >
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="border-l-[1px] border-black group relative">
                        <Image
                            alt=""
                            src={projects[0].image}
                            height={900}
                            width={960}
                        />
                        <button
                            className={`${robotoMono.className} text-[13px] bg-[#EBFB48] border-[1px] border-black py-2 px-3 absolute top-1/2 left-1/2 -ml-6 -mt-4 opacity-0 group-hover:opacity-100 duration-500`}
                        >
                            View
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectedWork;
