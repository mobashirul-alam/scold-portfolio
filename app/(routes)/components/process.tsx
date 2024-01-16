import Accordion from "@/components/ui/accordion";
import Banner from "@/components/ui/banner";
import MarqueeBig from "@/components/ui/marqueeBig";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Roboto_Mono } from "next/font/google";
import { ReactNode } from "react";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

interface Item {
    id: string;
    title: string;
    heading: string;
    description: string;
    iconOpen: ReactNode;
    iconClose: ReactNode;
}

const Process = () => {
    const items: Item[] = [
        {
            id: "01",
            title: "Discovery call",
            heading: "Let's see if we click",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            iconOpen: <ArrowDown size={16} />,
            iconClose: <ArrowUp size={16} />,
        },
        {
            id: "02",
            title: "Concept",
            heading: "We need a strategy",
            description:
                "Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            iconOpen: <ArrowDown size={16} />,
            iconClose: <ArrowUp size={16} />,
        },
        {
            id: "03",
            title: "Design",
            heading: "Let the magic happen",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            iconOpen: <ArrowDown size={16} />,
            iconClose: <ArrowUp size={16} />,
        },
        {
            id: "04",
            title: "Delivery",
            heading: "Ready to rock",
            description:
                "Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            iconOpen: <ArrowDown size={16} />,
            iconClose: <ArrowUp size={16} />,
        },
    ];

    return (
        <div>
            <div className="border-b-[1px] border-black">
                <MarqueeBig text="PROCESS" />
            </div>
            <Banner
                icon="/icon/icon-4.svg"
                title="Your new brand in 4 steps."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                img="/home/men-1.png"
                titleSize="text-[80px] max-w-2xl"
                scrollComp={false}
            />
            <div className="grid grid-cols-2">
                <div className=" border-b-[1px] border-r-[1px] border-black"></div>
                <div>
                    <Accordion items={items} />
                    <div>
                        <button
                            className={`${robotoMono.className} w-full text-white bg-black py-5 hover:bg-opacity-80 duration-500`}
                        >
                            GET IN TOUCH
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;
