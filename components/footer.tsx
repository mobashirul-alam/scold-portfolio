"use client";

import { Roboto_Mono } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const Footer = () => {
    // This will take user at the top of the page.
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className={`${robotoMono.className}`}>
            <div className="px-6 md:px-12 lg:px-16 border-t-[1px] border-black grid grid-cols-2 lg:grid-cols-4">
                <div className="border-r-[1px] border-black py-6 lg:py-12 flex flex-col items-start lg:mr-[30px]">
                    <Image
                        src={"/skold-logo.svg"}
                        alt="logo"
                        width={60}
                        height={16}
                    />
                    <p className="text-sm leading-5 mt-auto">
                        Main Street 16 22222 Lisbon
                    </p>
                </div>
                <div className="py-6 lg:py-12 pl-6 md:pl-16">
                    <div className="flex flex-col items-start">
                        <h3>PAGES</h3>
                        <div className="my-4 lg:my-8 flex flex-col items-start gap-y-3 lg:gap-y-6 text-[13px]">
                            <Link href={"/"}>HOME</Link>
                            <Link href={"/services"}>SERVICES</Link>
                            <Link href={"/about"}>ABOUT ME</Link>
                            <Link href={"/contact"}>CONTACT</Link>
                        </div>
                        <button className="text-[13px] border-[1px] border-black px-4 py-3 bg-[#EBFB48] whitespace-nowrap">
                            More Templates
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block py-12 pl-8">
                    <div className="flex flex-col items-start">
                        <h3>CMS</h3>
                        <div className="mt-8 flex flex-col items-start gap-y-6 text-[13px]">
                            <Link href={"/"}>WORK</Link>
                            <Link href={"/"}>WORK SINGLE</Link>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:block py-12 pl-8">
                    <div className="flex flex-col items-start">
                        <h3>UTILITY PAGES</h3>
                        <div className="mt-8 flex flex-col items-start gap-y-6 text-[13px]">
                            <Link href={"/"}>404 ERROR PAGE</Link>
                            <Link href={"/"}>PASSWORD PROTECTED</Link>
                            <Link href={"/"}>STYLE GUIDE</Link>
                            <Link href={"/"}>LICENSING</Link>
                            <Link href={"/"}>CHANGELOG</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="border-t-[1px] border-black flex justify-center lg:justify-between items-center px-8">
                <p className="py-7 text-center">
                    © 2024 MADE BY SOMEONE. POWERED BY SOME COMP
                </p>
                <div className="hidden lg:flex items-center">
                    <Link
                        href={"/"}
                        className="px-8 py-7 border-l-[1px] border-black"
                    >
                        INSTAGRAM
                    </Link>
                    <Link
                        href={"/"}
                        className="px-8 py-7 border-l-[1px] border-black"
                    >
                        TWITTER
                    </Link>
                    <Link
                        href={"/"}
                        className="px-8 py-7 border-l-[1px] border-black"
                    >
                        BEHANCE
                    </Link>
                    <Link
                        href={"/"}
                        className="px-8 py-7 border-l-[1px] border-black"
                    >
                        DRIBBLE
                    </Link>
                    <button
                        className="border-l-[1px] border-black py-9 pl-8 cursor-pointer"
                        onClick={scrollToTop}
                    >
                        <Image
                            alt="arrowIcon"
                            src={"/arrow-up.svg"}
                            width={10}
                            height={10}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
