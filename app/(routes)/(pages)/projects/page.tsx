import ContactPromo from "@/components/contactPromo";
import { robotoMono } from "@/components/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectsPage = () => {
    const projects = [
        {
            id: 1,
            image: "/projects/project-1.png",
            name: "Vision Studio",
        },
        {
            id: 2,
            image: "/projects/project-2-sq.png",
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
            <div className="p-16 border-b-[1px] border-black">
                <h1 className="text-[96px]">Projects</h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Enim voluptates commodi non, fugiat corporis quas.
                </p>
            </div>
            <div>
                <div className="grid grid-cols-2">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="border-r-[1px] border-b-[1px] border-black group relative"
                        >
                            <Image
                                alt=""
                                src={project.image}
                                width={960}
                                height={900}
                            />
                            <Link
                                href={`/projects/${project.id}`}
                                className="absolute bottom-0 w-full bg-white flex justify-between items-center p-4 uppercase border-t-[1px] border-black opacity-0 group-hover:opacity-100 hover:bg-black hover:text-white duration-500 cursor-pointer"
                            >
                                <p
                                    className={`${robotoMono.className} text-[13px]`}
                                >
                                    {project.name}
                                </p>
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <ContactPromo />
        </div>
    );
};

export default ProjectsPage;
