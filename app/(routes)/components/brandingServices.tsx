import { Roboto_Mono } from "next/font/google";
import Image from "next/image";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

const BrandingServices = () => {
    const servicesInfo = [
        {
            id: 1,
            icon: "/icon/icon-1.svg",
            title: "Brand Strategy",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            icon: "/icon/icon-2.svg",
            title: "Brand design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 3,
            icon: "/icon/icon-3.svg",
            title: "Graphic Design",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 4,
            icon: "/icon/icon-4.svg",
            title: "Monthly Support",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
    ];

    return (
        <div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2">
                <div className="flex-1 p-6 md:p-12 lg:p-9 xl:p-16 border-b-[1px] border-black space-y-4 lg:space-y-0">
                    <p className={`${robotoMono.className} text-[13px]`}>
                        Services
                    </p>
                    <h1 className="text-5xl lg:text-6xl xl:text-[80px] leading-[48px] lg:leading-[68px] xl:leading-[88px]">
                        Branding <br /> Services
                    </h1>
                    <p className="text-base md:text-lg max-w-lg leading-6 md:leading-8 mt-5 md:mt-0 lg:mt-5 xl:mt-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>
                <div className="flex-1">
                    {servicesInfo.map((service) => (
                        <div
                            key={service.id}
                            className="p-6 md:p-12 lg:p-9 xl:p-16 border-l-[1px] border-b-[1px] border-black flex flex-col lg:flex-row items-start gap-x-8 xl:gap-x-12 gap-y-6 lg:gap-y-0"
                        >
                            <div>
                                <Image
                                    src={service.icon}
                                    alt="icon"
                                    width={60}
                                    height={60}
                                    className="mt-0 lg:mt-3 xl:mt-0"
                                />
                            </div>
                            <div>
                                <h2 className="text-[32px] mb-2">
                                    {service.title}
                                </h2>
                                <p className="text-lg mb-8">
                                    {service.description}
                                </p>
                                <button className="border-b-[1px] border-black">
                                    More Information
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandingServices;
