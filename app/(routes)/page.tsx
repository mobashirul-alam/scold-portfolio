import ContactPromo from "@/components/contactPromo";
import SocialMedia from "../../components/socialMedia";
import AboutMe from "./components/aboutMe";
import BrandingServices from "./components/brandingServices";
import FeedBack from "./components/feedBack";
import HomeBanner from "./components/homeBanner";
import Process from "./components/process";
import WorkBrands from "./components/workBrands";

export default function Home() {
    return (
        <div>
            <HomeBanner />
            <WorkBrands />
            <BrandingServices />
            <Process />
            <SocialMedia />
            <AboutMe />
            <FeedBack />
            <ContactPromo />
        </div>
    );
}
