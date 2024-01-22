import SocialMedia from "@/components/socialMedia";
import { manrope, robotoMono } from "@/components/utils";

const Contact = () => {
    return (
        <div className={`${robotoMono.className}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 border-b-[1px] border-black">
                <div className="border-r-[1px] border-black p-6 md:p-12 lg:p-16 flex flex-col justify-between items-start">
                    <p className="uppercase text-[13px]">Contact</p>
                    <h1
                        className={`${manrope.className} max-w-md text-6xl lg:text-8xl lg:leading-[108px]`}
                    >
                        Let&apos;s get in touch.
                    </h1>
                </div>
                <div className="p-6 md:p-12 lg:px-16 lg:py-16">
                    <form>
                        <div className="text-[13px] flex flex-col items-start mb-8">
                            <label htmlFor="name" className="mb-4 uppercase">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="YOUR NAME"
                                className="border-[1px] border-black px-6 py-5 w-full"
                            />
                        </div>
                        <div className="text-[13px] flex flex-col items-start mb-8">
                            <label htmlFor="email" className="mb-4 uppercase">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="YOUR EMAIL"
                                className="border-[1px] border-black px-6 py-5 w-full"
                            />
                        </div>
                        <div className="text-[13px] flex flex-col items-start mb-8">
                            <label htmlFor="message" className="mb-4 uppercase">
                                Message
                            </label>
                            <textarea
                                name="message"
                                placeholder="YOUR MESSAGE"
                                className="border-[1px] border-black px-6 py-5 w-full min-h-52"
                            />
                        </div>
                        <button className="text-white bg-black px-6 py-5 text-center w-full hover:bg-opacity-80 duration-500">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>
            </div>

            <SocialMedia />
        </div>
    );
};

export default Contact;
