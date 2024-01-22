import MarqueeLine from "@/components/ui/marquee";
import { ExternalLink } from "lucide-react";
import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const SocialMedia = () => {
    const socialInfo = [
        {
            id: 1,
            name: "Twitter",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            link: "/",
            icon: "/icon/ri_twitter-fill.svg",
        },
        {
            id: 2,
            name: "Instagram",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            link: "/",
            icon: "/icon/ri_instagram-line.svg",
        },
        {
            id: 3,
            name: "Behance",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            link: "/",
            icon: "/icon/ri_behance-line.svg",
        },
        {
            id: 1,
            name: "Dribble",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            link: "/",
            icon: "/icon/ri_dribble-fill.svg",
        },
    ];
    return (
        <div>
            <MarqueeLine text="+++ FIND ME ON SOCIAL MEDIA" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {socialInfo.map((info) => (
                    <div key={info.id} className="border-t-[1px] border-black">
                        <div className="p-12 border-l-[1px] border-black">
                            <Image
                                src={info.icon}
                                alt="icon"
                                width={30}
                                height={30}
                            />
                            <h3 className="uppercase mt-60 text-2xl mb-2">
                                {info.name}
                            </h3>
                            <p className="p-0">{info.text}</p>
                        </div>
                        <div>
                            <Link
                                href={info.link}
                                className={`${robotoMono.className} text-[13px] flex justify-between items-center p-4 border-[1px] border-r-0 border-black hover:bg-black hover:text-white duration-300 uppercase`}
                            >
                                Visit {info.name}
                                <ExternalLink className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;
