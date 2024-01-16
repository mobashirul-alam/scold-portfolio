"use client";

import ContactPromo from "@/components/contactPromo";
import ServiceAccordion from "@/components/serviceAccordion";
import Banner from "@/components/ui/banner";
import { Plus, X } from "lucide-react";
import { ReactNode } from "react";

interface Item {
    id: string;
    title: string;
    heading: string;
    description: string;
    iconOpen: ReactNode;
    iconClose: ReactNode;
}

const ServicePage = () => {
    const items: Item[] = [
        {
            id: "01",
            title: "Brand Strategy",
            heading: "Let's see if we click",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            iconOpen: <Plus size={16} />,
            iconClose: <X size={16} />,
        },
        {
            id: "02",
            title: "Brand Design",
            heading: "We need a strategy",
            description:
                "Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            iconOpen: <Plus size={16} />,
            iconClose: <X size={16} />,
        },
        {
            id: "03",
            title: "Graphic Design",
            heading: "Let the magic happen",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            iconOpen: <Plus size={16} />,
            iconClose: <X size={16} />,
        },
        {
            id: "04",
            title: "Monthly Support",
            heading: "Ready to rock",
            description:
                "Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            iconOpen: <Plus size={16} />,
            iconClose: <X size={16} />,
        },
    ];
    return (
        <div>
            <Banner
                icon="/icon/icon-3.svg"
                title="All-in-one branding"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
                titleSize="text-8xl max-w-2xl"
                img="/about-man.png"
            />

            {/* Accordion */}
            <ServiceAccordion items={items} />

            <ContactPromo />
        </div>
    );
};

export default ServicePage;
