import MarqueeLine from "@/components/ui/marquee";
import { robotoMono } from "@/components/utils";
import Link from "next/link";

const ContactPromo = () => {
    return (
        <div>
            <MarqueeLine text="+++ Let's talk" />

            <div className="border-t-[1px] border-black p-6 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between items-start md:items-end">
                <div className="md:max-w-sm lg:max-w-xl xl:max-w-[800px]">
                    <p
                        className={`${robotoMono.className} uppercase text-[13px] mb-2 ml-1`}
                    >
                        Contact
                    </p>
                    <h1 className="text-5xl xl:text-[80px] xl:leading-[88px]">
                        Let&apos;s bring your brand to the next level
                    </h1>
                </div>
                <div className="mb-4 mt-10 md:mt-0">
                    <Link
                        href={"/contact"}
                        className={`${robotoMono.className} text-[13px] text-white bg-black px-4 py-3 md:px-6 md:py-5 hover:bg-opacity-85 duration-300`}
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ContactPromo;
