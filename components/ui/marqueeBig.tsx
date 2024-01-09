import Marquee from "react-fast-marquee";

const MarqueeBig = ({ text }: { text: string }) => {
    return (
        <div>
            <Marquee autoFill={true} className="py-8 text-8xl">
                <p className="px-6 text-black">{text}</p>
                <p
                    className="px-6 text-white"
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
