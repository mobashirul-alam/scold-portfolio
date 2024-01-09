import Banner from "@/components/ui/banner";
import MarqueeBig from "@/components/ui/marqueeBig";

const Process = () => {
    return (
        <div>
            <div className="border-b-[1px] border-black">
                <MarqueeBig text="PROCESS" />
            </div>
            <Banner
                icon="/icon/icon-4.svg"
                title="Your new brand in 4 steps."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                img="/home/men-1.png"
                titleSize="text-[80px]"
                scrollComp={false}
            />
        </div>
    );
};

export default Process;
