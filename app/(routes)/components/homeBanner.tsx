import Banner from "@/components/ui/banner";

const HomeBanner = () => {
    return (
        <div>
            <Banner
                img="/home/banner-img.png"
                icon="/icon/icon-1.svg"
                title="Creating unique brands."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                titleSize="text-8xl"
                scrollComp={true}
            />
        </div>
    );
};

export default HomeBanner;
