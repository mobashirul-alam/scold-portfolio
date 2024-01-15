import { Manrope, Roboto_Mono } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

interface BannerProps {
    img?: string;
    icon: string;
    title: string;
    description: string;
    titleSize: string;
    scrollComp?: boolean;
}

const Banner: React.FC<BannerProps> = ({
    img,
    icon,
    title,
    description,
    titleSize,
    scrollComp,
}) => {
    return (
        <div>
            <div className="grid grid-cols-2 border-b-[1px] border-black">
                <div
                    className="border-r-[1px] border-black w-full h-full"
                    style={{
                        background: `url(${"/Noise.png"}), lightgray 0% 0% / 100px 100px repeat`,
                    }}
                >
                    {img && (
                        <Image
                            src={img}
                            alt="bannerImage"
                            width={960}
                            height={900}
                        />
                    )}
                </div>
                <div>
                    <div
                        className={`p-16 ${
                            scrollComp && "border-b-[1px] border-black"
                        }`}
                    >
                        <Image
                            src={icon}
                            alt="icon"
                            width={80}
                            height={80}
                            className={"mb-[351px]"}
                        />
                        <div className={`${manrope.className}`}>
                            <h1 className={`${titleSize} leading-[106px] mb-4`}>
                                {title}
                            </h1>
                            <p className="text-lg leading-8 max-w-lg">
                                {description}
                            </p>
                        </div>
                    </div>

                    {scrollComp && (
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default Banner;
