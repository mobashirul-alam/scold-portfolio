import { Manrope, Roboto_Mono } from "next/font/google";
import Image from "next/image";

const manrope = Manrope({ subsets: ["latin"] });
const robotoMono = Roboto_Mono({ subsets: ["latin"] });

interface BannerProps {
    img?: string;
    icon: string;
    title: string;
    description: string;
}

const Banner: React.FC<BannerProps> = ({ img, icon, title, description }) => {
    return (
        <div>
            <div className="flex items-center border-b-[1px] border-black">
                <div
                    className="border-r-[1px] border-black w-[960px] h-[900px]"
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
                <div className="flex-1">
                    <div className="p-16">
                        <Image
                            src={icon}
                            alt="icon"
                            width={80}
                            height={80}
                            className="mb-[351px]"
                        />
                        <div className={`${manrope.className}`}>
                            <h1 className="text-8xl leading-[106px] max-w-2xl mb-4">
                                {title}
                            </h1>
                            <p className="text-lg leading-8 max-w-lg">
                                {description}
                            </p>
                        </div>
                    </div>
                    <div className="px-4 pt-2 flex justify-between items-center border-t-[1px] border-black">
                        <p className={`${robotoMono.className}`}>Scroll Down</p>
                        <Image
                            src={"/arrow-down.svg"}
                            alt="icon"
                            width={16}
                            height={16}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
