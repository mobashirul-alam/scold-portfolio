"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { Roboto_Mono } from "next/font/google";
import { useState } from "react";

const robotoMono = Roboto_Mono({ subsets: ["latin"] });

interface AccordionItem {
    id: string;
    title: string;
    heading: string;
    description: string;
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
        <div className="accordion">
            {items.map((item, index) => (
                <div key={index}>
                    <div
                        className={`${
                            robotoMono.className
                        } accordion-title p-4 cursor-pointer flex justify-between items-center transition-all duration-300 ease-in-out border-b-[1px] border-black capitalize ${
                            activeIndices.includes(index)
                                ? "bg-gray-100"
                                : "bg-gray-50"
                        }`}
                        onClick={() => onTitleClick(index)}
                    >
                        {item.title}
                        {activeIndices.includes(index) ? (
                            <ArrowUp size={16} />
                        ) : (
                            <ArrowDown size={16} />
                        )}
                    </div>
                    {activeIndices.includes(index) && (
                        <div className="accordion-content p-12 flex items-start gap-x-16 transition-all duration-1000 ease-in-out border-b-[1px] border-black">
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
