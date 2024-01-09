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
            <div className="w-full grid grid-cols-2">
                <div className="flex-1 p-16 border-b-[1px] border-black">
                    <p className={`${robotoMono.className} text-[13px]`}>
                        Services
                    </p>
                    <h1 className="text-[80px] leading-[88px]">
                        Branding <br /> Services
                    </h1>
                    <p className="text-lg max-w-lg leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore.
                    </p>
                </div>
                <div className="flex-1">
                    {servicesInfo.map((service) => (
                        <div
                            key={service.id}
                            className="p-16 border-l-[1px] border-b-[1px] border-black flex items-start gap-x-12"
                        >
                            <div>
                                <Image
                                    src={service.icon}
                                    alt="icon"
                                    width={60}
                                    height={60}
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
