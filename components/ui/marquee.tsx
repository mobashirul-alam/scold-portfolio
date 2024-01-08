import Marquee from "react-fast-marquee";

const MarqueeLine = ({ text }: { text: string }) => {
    return (
        <div>
            <Marquee autoFill={true} className="bg-[#EBFB48] py-5">
                <p className="px-3">{text}</p>
            </Marquee>
        </div>
    );
};

export default MarqueeLine;
