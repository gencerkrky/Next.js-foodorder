import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

const Carousel = () => {
    return (
        <div className="h-screen w-full container mx-auto -mt-[88px]">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="relative h-full w-full">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt=""
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="relative text-white top-48 flex flex-col items-start gap-y-10">
                <Title addClass="text-6xl">Big Mac®</Title>
                <p className="text-sm sm:w-2/6 w-full">
                    Ever wondered what's on a Big Mac®? The McDonald's Big Mac® is a 100% beef burger with a taste like no other. The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun. It’s topped off with pickles, crisp shredded lettuce, finely chopped onion, and a slice of American cheese. It contains no artificial flavors, preservatives, or added colors from artificial sources. Our pickle contains an artificial preservative, so skip it if you like.
                </p>
                <button className="btn-primary">Order Now</button>
            </div>
        </div>
    );
};

export default Carousel;