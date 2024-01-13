import MarqueeLine from "@/components/ui/marquee";
import { robotoMono } from "@/components/utils";

const ContactPromo = () => {
    return (
        <div>
            <MarqueeLine text="+++ Let's talk" />

            <div className="border-y-[1px] border-black p-16 flex justify-between items-end">
                <div className="max-w-[800px]">
                    <p
                        className={`${robotoMono.className} uppercase text-[13px] mb-2 ml-1`}
                    >
                        Contact
                    </p>
                    <h1 className="text-[80px] leading-[88px]">
                        Let&apos;s bring your brand to the next level
                    </h1>
                </div>
                <div>
                    <button
                        className={`${robotoMono.className} text-[13px] text-white bg-black px-6 py-5`}
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactPromo;
