import SocialMedia from "@/components/socialMedia";
import Banner from "@/components/ui/banner";
import MarqueeBig from "@/components/ui/marqueeBig";
import { robotoMono } from "@/components/utils";
import Image from "next/image";

const AboutPage = () => {
    const experiences = [
        {
            id: 1,
            designation: "Freelance brand designer",
            time: "2020 - now",
            company: "Creative Studio",
        },
        {
            id: 2,
            designation: "Brand Designer",
            time: "2017 - 2020",
            company: "Invision Square",
        },
        {
            id: 3,
            designation: "Graphic Designer",
            time: "2016 - 2017",
            company: "Creative Studio",
        },
        {
            id: 4,
            designation: "Print Designer",
            time: "2014 - 2016",
            company: "Vision Studio",
        },
        {
            id: 5,
            designation: "Freelance brand designer",
            time: "2012 - 2014",
            company: "Lisbon University",
        },
    ];

    const awards = [
        {
            id: 1,
            name: "Design award",
            time: "2023",
            icon: "/icon/icon-1.svg",
        },
        {
            id: 2,
            name: "brand designer of the year",
            time: "2021",
            icon: "/icon/icon-2.svg",
        },
        {
            id: 3,
            name: "Design of the month",
            time: "2019",
            icon: "/icon/icon-3.svg",
        },
        {
            id: 4,
            name: "Brand award",
            time: "2018",
            icon: "/icon/icon-4.svg",
        },
    ];

    return (
        <div>
            <div>
                <Banner
                    title="Freelance brand designer."
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                    scrollComp={true}
                    titleSize="text-5xl md:text-6xl lg:text-8xl max-w-3xl"
                    icon="/icon/icon-2.svg"
                    img="/about-man.png"
                />
            </div>

            {/* Experience section */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-6 md:p-12 lg:p-16 border-r-[1px] border-b-[1px] border-black flex flex-col justify-between items-start">
                    <div>
                        <p
                            className={`${robotoMono.className} text-[13px] mb-4 uppercase`}
                        >
                            Experience
                        </p>
                        <p className="text-xl lg:text-[32px] mb-20 lg:mb-0">
                            As a freelance brand designer with over 12 years of
                            experience, I know how to create stunning brands to
                            make your business stand out.
                        </p>
                    </div>
                    <Image
                        alt=""
                        src={"/icon/icon-1.svg"}
                        width={60}
                        height={60}
                    />
                </div>
                <div>
                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className="p-6 md:p-8 lg:p-12 flex justify-between items-center border-b-[1px] border-black hover:bg-black/5 duration-300"
                        >
                            <div>
                                <h3 className="text-xl md:text-2xl">
                                    {exp.designation}
                                </h3>
                                <p
                                    className={`${robotoMono.className} text-[13px]`}
                                >
                                    {exp.company}
                                </p>
                            </div>
                            <p
                                className={`${robotoMono.className} text-[13px] uppercase`}
                            >
                                {exp.time}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Awards section */}
            <div>
                <MarqueeBig text="Awards" />

                <div className="grid grid-cols-1 lg:grid-cols-2 border-t-[1px] border-black">
                    <div className="p-6 md:p-12 lg:p-16 border-r-[1px] border-b-[1px] border-black flex flex-col justify-between items-start">
                        <p
                            className={`${robotoMono.className} text-[13px] mb-20 lg:mb-4 uppercase`}
                        >
                            Awards
                        </p>
                        <p className="text-4xl lg:text-[48px]">
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                    <div>
                        {awards.map((award) => (
                            <div
                                key={award.id}
                                className="p-6 md:p-8 lg:p-12 flex justify-between items-center border-b-[1px] border-black hover:bg-black/5 duration-300"
                            >
                                <div className="flex items-center gap-x-4 md:gap-x-8">
                                    <Image
                                        src={award.icon}
                                        alt="icon"
                                        width={30}
                                        height={30}
                                    />
                                    <p className="text-xl md:text-2xl">
                                        {award.name}
                                    </p>
                                </div>
                                <p
                                    className={`${robotoMono.className} text-[13px]`}
                                >
                                    {award.time}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <SocialMedia />
        </div>
    );
};

export default AboutPage;
