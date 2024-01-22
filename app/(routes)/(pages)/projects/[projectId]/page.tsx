import ContactPromo from "@/components/contactPromo";
import Accordion from "@/components/ui/accordion";
import MarqueeBig from "@/components/ui/marqueeBig";
import { manrope, robotoMono } from "@/components/utils";
import { ArrowDown, ArrowUp } from "lucide-react";
import Image from "next/image";
import { ReactNode } from "react";

interface Item {
    id: string;
    title: string;
    heading: string;
    description: string;
    iconOpen: ReactNode;
    iconClose: ReactNode;
}

const SingleProjectPage = () => {
    const items: Item[] = [
        {
            id: "01",
            title: "Challenge",
            heading: "We need a strategy",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            iconOpen: <ArrowDown size={16} />,
            iconClose: <ArrowUp size={16} />,
        },
        {
            id: "02",
            title: "Goal",
            heading: "New Brand Strategy",
            description:
                "Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            iconOpen: <ArrowDown size={16} />,
            iconClose: <ArrowUp size={16} />,
        },
        {
            id: "03",
            title: "Solution",
            heading: "Brand & Logo",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            iconOpen: <ArrowDown size={16} />,
            iconClose: <ArrowUp size={16} />,
        },
    ];

    const projectsImages = [
        {
            id: 1,
            image: "/projects/project-1.png",
        },
        {
            id: 2,
            image: "/projects/project-2-sq.png",
        },
        {
            id: 3,
            image: "/projects/project-3.png",
        },
        {
            id: 4,
            image: "/projects/project-4.png",
        },
    ];

    return (
        <div>
            <div>
                {/* Banner */}
                <div className="grid grid-cols-2 border-b-[1px] border-black">
                    <div
                        className="border-r-[1px] border-black w-full h-full"
                        style={{
                            background: `url(${"/Noise.png"}), lightgray 0% 0% / 100px 100px repeat`,
                        }}
                    >
                        <Image
                            src="/projects/project-1.png"
                            alt="bannerImage"
                            width={960}
                            height={900}
                        />
                    </div>
                    <div>
                        <div
                            className={`p-16 border-b-[1px] border-black
                            }`}
                        >
                            <div
                                className={`${robotoMono.className} text-[13px] uppercase mb-[265px]`}
                            >
                                <p className="text-[#777777]">Client</p>
                                <p>Vision Studio</p>
                            </div>
                            <div className={`${manrope.className}`}>
                                <h1
                                    className={`text-8xl max-w-lg leading-[106px] mb-4`}
                                >
                                    Vision Square
                                </h1>
                                <p className="text-lg leading-8 max-w-lg">
                                    Ullamcorper dignissim cras tincidunt
                                    lobortis feugiat. In nibh mauris cursus
                                    mattis molestie a iaculis at erat. Facilisis
                                    magna etiam tempor orci. Tempus imperdiet
                                    nulla malesuada pellentesque elit eget
                                    gravida cum sociis. Diam sit amet nisl
                                    suscipit adipiscing bibendum. Volutpat sed
                                    cras ornare arcu dui vivamus. Eu lobortis
                                    elementum nibh tellus.
                                </p>
                            </div>
                        </div>

                        <div className="px-4 pt-[6px] pb-1 flex justify-between items-center">
                            <p className={`${robotoMono.className}`}>
                                Scroll Down
                            </p>
                            <Image
                                src={"/arrow-down.svg"}
                                alt="icon"
                                width={16}
                                height={16}
                            />
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2">
                    <div className="border-r-[1px] border-b-[1px] border-black"></div>
                    <div className={`${robotoMono.className} text-[13px]`}>
                        <div className="flex justify-between items-center p-8 border-b-[1px] border-black">
                            <p className="uppercase">Timeline</p>
                            <p>4 Weeks</p>
                        </div>
                        <div className="flex justify-between items-center p-8 border-b-[1px] border-black">
                            <p className="uppercase">Services</p>
                            <p className="uppercase">Branding Logo</p>
                        </div>
                        <div className="flex justify-between items-center p-8 border-b-[1px] border-black">
                            <p className="uppercase">Website</p>
                            <a
                                href="https://www.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="uppercase underline"
                            >
                                www.scold.com
                            </a>
                        </div>
                        <Accordion items={items} />
                    </div>
                </div>
                <div className="border-b-[1px] border-black">
                    <MarqueeBig text="Gallery" />
                </div>

                <div className="grid grid-cols-2">
                    {projectsImages.map((image) => (
                        <div
                            key={image.id}
                            className="border-r-[1px] border-b-[1px] border-black group relative"
                        >
                            <Image
                                alt=""
                                src={image.image}
                                width={960}
                                height={900}
                            />
                        </div>
                    ))}
                </div>

                <ContactPromo />
            </div>
        </div>
    );
};

export default SingleProjectPage;
