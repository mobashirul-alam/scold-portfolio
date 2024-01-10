import BrandingServices from "./components/brandingServices";
import HomeBanner from "./components/homeBanner";
import Process from "./components/process";
import SocialMedia from "./components/socialMedia";
import WorkBrands from "./components/workBrands";

export default function Home() {
    return (
        <div>
            <HomeBanner />
            <WorkBrands />
            <BrandingServices />
            <Process />
            <SocialMedia />
            <p className="text-center my-20 text-5xl">
                Development is going on...
            </p>
        </div>
    );
}
