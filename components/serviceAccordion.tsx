import { ReactNode, useState } from "react";
import { manrope, robotoMono } from "./utils";

interface ServiceAccordionItem {
    id: string;
    title: string;
    heading: string;
    description: string;
    iconOpen: ReactNode;
    iconClose: ReactNode;
}

const ServiceAccordion: React.FC<{ items: ServiceAccordionItem[] }> = ({
    items,
}) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const onTitleClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <div
                        className={`${
                            robotoMono.className
                        } p-12 cursor-pointer flex justify-between items-center transition-all duration-300 ease-in-out border-b-[1px] border-black capitalize ${
                            activeIndex === index ? "bg-gray-200" : "bg-gray-50"
                        }`}
                        onClick={() => onTitleClick(index)}
                    >
                        <div
                            className={`${manrope.className} flex items-center gap-x-16 text-5xl`}
                        >
                            <span>{item.id}</span>
                            <span>{item.title}</span>
                        </div>
                        {activeIndex === index ? item.iconClose : item.iconOpen}
                    </div>
                    {activeIndex === index && (
                        <div className="p-12 flex items-start gap-x-16 transition-all duration-1000 ease-in-out border-b-[1px] border-black">
                            <div>
                                <h3 className="text-2xl mb-4 capitalize">
                                    {item.heading}
                                </h3>
                                <p className="text-base">{item.description}</p>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ServiceAccordion;
