import { Roboto_Mono } from "next/font/google";
import Marquee from "react-fast-marquee";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const MarqueeLine = ({ text }: { text: string }) => {
    return (
        <div>
            <Marquee autoFill={true} className="bg-[#EBFB48] py-5">
                <p className={`${robotoMono.className} px-3 uppercase`}>
                    {text}
                </p>
            </Marquee>
        </div>
    );
};

export default MarqueeLine;
