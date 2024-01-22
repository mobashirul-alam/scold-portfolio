import { Roboto_Mono } from "next/font/google";
import Image from "next/image";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const WorkBrands = () => {
    const brandLogos = [
        { id: 1, img: "/brandLogo/brand-1.svg" },
        { id: 2, img: "/brandLogo/brand-2.svg" },
        { id: 3, img: "/brandLogo/brand-3.svg" },
        { id: 4, img: "/brandLogo/brand-4.svg" },
        { id: 5, img: "/brandLogo/brand-5.svg" },
        { id: 6, img: "/brandLogo/brand-6.svg" },
        { id: 7, img: "/brandLogo/brand-7.svg" },
    ];

    return (
        <div>
            <div className="flex flex-col lg:flex-row justify-between items-center lg:px-16 lg:border-b-[1px] border-black gap-y-10 pb-10 lg:pb-0">
                <div>
                    <p
                        className={`${robotoMono.className} lg:pr-16 pt-6 md:pt-12 lg:pb-12 text-lg lg:text-[13px]
                        `}
                    >
                        Brands I&apos;ve worked with
                    </p>
                    <div className="lg:hidden bg-black w-full mx-auto h-[1px] mt-4"></div>
                </div>
                <div className="hidden lg:block bg-black lg:w-[1px] h-[1px] lg:h-32"></div>

                {brandLogos.map((logo) => (
                    <Image
                        key={logo.id}
                        src={logo.img}
                        alt="logo"
                        width={70}
                        height={70}
                        className="hidden lg:block"
                    />
                ))}
            </div>
            <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-14 md:gap-20 px-12 md:px-24 border-b-[1px] border-black pb-8 md:pb-14">
                {brandLogos.map((logo) => (
                    <div key={logo.id} className="flex justify-center">
                        <Image
                            src={logo.img}
                            alt="logo"
                            width={70}
                            height={70}
                            className=""
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkBrands;
