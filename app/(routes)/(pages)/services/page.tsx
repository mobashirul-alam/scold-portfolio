import ContactPromo from "@/components/contactPromo";
import Banner from "@/components/ui/banner";

const ServicePage = () => {
    return (
        <div>
            <Banner
                icon="/icon/icon-3.svg"
                title="All-in-one branding"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                titleSize="text-8xl max-w-2xl"
                img="/about-man.png"
            />

            <ContactPromo />
        </div>
    );
};

export default ServicePage;
