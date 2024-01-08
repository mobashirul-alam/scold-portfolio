import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import MarqueeLine from "./ui/marquee";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const Navbar = () => {
    return (
        <div className={`${robotoMono.className}`}>
            <MarqueeLine text={"+++ OPEN FOR NEW PROJECTS"} />

            {/* Main nav */}
            <div className="border-y-[1px] border-black flex justify-between items-center">
                <div className="px-8 py-6 border-r-[1px] border-black">
                    <Image
                        src={"/skold-logo.svg"}
                        alt="logo"
                        width={60}
                        height={16}
                    />
                </div>
                <div className="flex items-center">
                    <div className="flex items-center gap-x-9 mr-9">
                        <Link href={"/projects"}>PROJECTS</Link>
                        <Link href={"/services"}>SERVICES</Link>
                        <Link href={"/aboutUs"}>ABOUT ME</Link>
                    </div>
                    <div>
                        <Link
                            href={"/contact"}
                            className="bg-[#242424] px-8 py-[23px] text-white"
                        >
                            GET IN TOUCH
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;