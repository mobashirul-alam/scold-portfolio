import Marquee from "react-fast-marquee";

const MarqueeBig = ({ text }: { text: string }) => {
    return (
        <div>
            <Marquee
                autoFill={true}
                className="py-4 lg:py-6 xl:py-8 text-3xl lg:text-5xl xl:text-8xl xl:leading-[78px]"
            >
                <p className="px-4 lg:px-6 text-black">{text}</p>
                <p
                    className="px-4 lg:px-6 text-white"
                    style={{
                        WebkitTextStroke: "1px black",
                    }}
                >
                    {text}
                </p>
            </Marquee>
        </div>
    );
};

export default MarqueeBig;
