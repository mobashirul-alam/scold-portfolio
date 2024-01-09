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
            <div className="flex justify-between items-center px-16 border-b-[1px] border-black">
                <div className="">
                    <p
                        className={`${robotoMono.className} pr-16 py-12 text-[13px]
                        `}
                    >
                        Brands I&apos;ve worked with
                    </p>
                </div>
                <div className="bg-black w-[1px] h-32"></div>
                {brandLogos.map((logo) => (
                    <Image
                        key={logo.id}
                        src={logo.img}
                        alt="logo"
                        width={70}
                        height={70}
                    />
                ))}
            </div>
        </div>
    );
};

export default WorkBrands;
