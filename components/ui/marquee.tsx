import { Roboto_Mono } from "next/font/google";
import Marquee from "react-fast-marquee";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const MarqueeLine = ({ text }: { text: string }) => {
    return (
        <div>
            <Marquee
                autoFill={true}
                className="bg-[#EBFB48] py-2 md:py-4 lg:py-5"
            >
                <p
                    className={`${robotoMono.className} text-xs md:text-base px-3 uppercase`}
                >
                    {text}
                </p>
            </Marquee>
        </div>
    );
};

export default MarqueeLine;
