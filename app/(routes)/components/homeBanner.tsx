import Banner from "@/components/ui/banner";

const HomeBanner = () => {
    return (
        <div>
            <Banner
                img="/home/banner-img.png"
                icon="/home/home-banner-icon.svg"
                title="Creating unique brands."
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            />
        </div>
    );
};

export default HomeBanner;
