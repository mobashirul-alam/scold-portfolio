"use client";

import { Roboto_Mono } from "next/font/google";
import { ReactNode, useState } from "react";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

interface AccordionItem {
    id: string;
    title: string;
    heading: string;
    description: string;
    iconOpen: ReactNode;
    iconClose: ReactNode;
}

const Accordion: React.FC<{ items: AccordionItem[] }> = ({ items }) => {
    const [activeIndices, setActiveIndices] = useState<number[]>(
        items.map((_, index) => index)
    );

    const onTitleClick = (index: number) => {
        setActiveIndices(
            activeIndices.includes(index)
                ? activeIndices.filter((i) => i !== index)
                : [...activeIndices, index]
        );
    };

    return (
        <div>
            {items.map((item, index) => (
                <div key={index}>
                    <div
                        className={`${
                            robotoMono.className
                        } p-4 cursor-pointer flex justify-between items-center transition-all duration-300 ease-in-out border-b-[1px] border-black capitalize ${
                            activeIndices.includes(index)
                                ? "bg-gray-100"
                                : "bg-gray-50"
                        }`}
                        onClick={() => onTitleClick(index)}
                    >
                        {item.title}
                        {activeIndices.includes(index)
                            ? item.iconClose
                            : item.iconOpen}
                    </div>
                    {activeIndices.includes(index) && (
                        <div className="p-6 md:p-12 lg:p-6 xl:p-12 flex items-start gap-x-6 md:gap-x-10 xl:gap-x-16 transition-all duration-1000 ease-in-out border-b-[1px] border-black">
                            <p className="text-2xl">{item.id}</p>
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

export default Accordion;
