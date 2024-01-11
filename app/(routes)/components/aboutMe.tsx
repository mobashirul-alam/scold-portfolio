import { robotoMono } from "@/components/utils";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div>
            <div className="grid grid-cols-2 border-b-[1px] border-black">
                <div className="h-full border-r-[1px] border-black p-16 flex flex-col justify-between items-start">
                    <div>
                        <p
                            className={`${robotoMono.className} uppercase text-[13px]`}
                        >
                            About Me
                        </p>
                        <h1 className="text-[80px] leading-[88px] mb-auto">
                            Passion <br /> for design.
                        </h1>
                    </div>
                    <div>
                        <p className="text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Excepturi distinctio velit nostrum nobis sunt
                            debitis, hic expedita, labore numquam provident
                            laborum? Doloremque et repellat corporis animi
                            officia magni architecto cupiditate.
                        </p>
                        <p className="text-lg mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat numquam possimus pariatur minus
                            aperiam explicabo quisquam, quas eveniet dignissimos
                            architecto!
                        </p>
                    </div>
                </div>
                <div>
                    <Image
                        alt=""
                        src={"/home/home-about-me.png"}
                        width={960}
                        height={900}
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutMe;
