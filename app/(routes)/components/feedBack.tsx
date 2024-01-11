import MarqueeBig from "@/components/ui/marqueeBig";
import { robotoMono } from "@/components/utils";
import { ArrowDown, Star } from "lucide-react";
import Image from "next/image";

const FeedBack = () => {
    const reviews = [
        {
            id: 1,
            company: "Super Food",
            logo: "/brandLogo/brand-1.svg",
            title: "Porta nibh venenatis cras sed felis eget velit aliquet sagittis. ",
            reviewText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Non tellus orci ac auctor augue mauris augue neque gravida. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas.",
            reviewer: "Brandon King",
            reviewerImg: "/home/reviewer-1.png",
            designation: "CEO",
            rating: 5,
        },
        {
            id: 2,
            company: "Invision Square",
            logo: "/brandLogo/brand-5.svg",
            title: "Lorem dotor amet ipsum",
            reviewText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis.",
            reviewer: "Johnson Charles",
            reviewerImg: "/home/reviewer-2.png",
            designation: "CTO",
            rating: 4,
        },
        {
            id: 3,
            company: "Vision Studio",
            logo: "/brandLogo/brand-6.svg",
            title: "Turpis egestas sed tempus urna",
            reviewText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis.",
            reviewer: "Andre Russel",
            reviewerImg: "/home/reviewer-3.png",
            designation: "Chief Manager",
            rating: 5,
        },
        {
            id: 4,
            company: "In motion",
            logo: "/brandLogo/brand-3.svg",
            title: "Velit sed ullamcorper morbi tincidunt ornare massa eget egestas.",
            reviewText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Non tellus orci ac auctor augue mauris augue neque gravida. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Aliquet bibendum enim facilisis gravida neque convallis a. Quam lacus suspendisse faucibus interdum posuere lorem.",
            reviewer: "Chris Gayle",
            reviewerImg: "/home/reviewer-1.png",
            designation: "General Manager",
            rating: 3,
        },
        {
            id: 5,
            company: "Creative Studio",
            logo: "/brandLogo/brand-7.svg",
            title: "Velit sed morbi ornare egestas.",
            reviewText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis egestas sed tempus urna. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Non tellus orci ac auctor augue mauris augue neque gravida. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas.",
            reviewer: "Darren Sammy",
            reviewerImg: "/home/reviewer-2.png",
            designation: "Lead Officer",
            rating: 5,
        },
    ];

    return (
        <div>
            <div className="border-b-[1px] border-black">
                <MarqueeBig text="Feedback" />
            </div>

            <div className="grid grid-cols-2 border-b-[1px] border-black">
                <div className="h-full border-r-[1px] border-black p-16 flex flex-col justify-between items-start">
                    <div>
                        <p
                            className={`${robotoMono.className} uppercase text-[13px]`}
                        >
                            Testimonials
                        </p>
                        <h1 className="text-[80px] leading-[88px] mb-auto">
                            What my <br /> clients say
                        </h1>
                        <p className="text-lg mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quaerat numquam possimus pariatur minus
                            aperiam explicabo quisquam, quas eveniet dignissimos
                            architecto!
                        </p>
                    </div>
                    <div>
                        <Image
                            alt="icon"
                            src={"/icon/icon-2.svg"}
                            width={80}
                            height={104}
                        />
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-2 gap-x-2 gap-y-2 p-6">
                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="border-r-[1px] border-b-[1px] border-l-[1px] border-black"
                            >
                                <div className="flex justify-between items-center p-4 border-t-[1px] border-b-[1px] border-black">
                                    <p
                                        className={`${robotoMono.className} flex items-center gap-x-2 uppercase`}
                                    >
                                        {review.company}{" "}
                                        <ArrowDown className="w-4 h-4" />{" "}
                                    </p>
                                    <div className="flex items-center gap-x-1">
                                        {[...Array(review.rating)].map(
                                            (_, index) => (
                                                <Star
                                                    key={index}
                                                    className="w-4 h-4"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="p-12 flex flex-col items-start">
                                    <Image
                                        src={review.logo}
                                        alt=""
                                        width={74}
                                        height={64}
                                    />
                                    <h3 className="mt-8 mb-4">
                                        {review.title}
                                    </h3>
                                    <p className="mb-8">{review.reviewText}</p>
                                    <div className="flex justify-start items-center gap-x-4">
                                        <Image
                                            src={review.reviewerImg}
                                            alt="image"
                                            width={60}
                                            height={60}
                                        />
                                        <div>
                                            <p>{review.reviewer}</p>
                                            <p>{review.designation}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedBack;
