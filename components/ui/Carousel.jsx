import Image from "next/image";
import React from "react";
import Title from "./Title";
import Slider from "react-slick";


const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplayspeed: 1000,
        appenDots: true,
        customPaging: (i) => (
            <div className=" w-3 h-3 border bg-white rounded-full mt-10 "></div>
        )
    };
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
            <Slider {...settings}>
                <div>
                    <div className="mt-48 text-white  flex flex-col items-start gap-y-10">
                        <Title addClass="text-6xl">Big Mac®</Title>
                        <p className="text-sm sm:w-2/6 w-full">
                            Onu bu kadar vazgeçilmez kılan nedir?
                            Çift katlı dana etinin, peynir ve sosla olan muhteşem
                            uyumuna soğan, taze marul ve turşunun da katılması,
                            ona olan tutkunuzu açıklayabilir mi? İşte bu yüzden Big Mac!
                        </p>
                        <button className="btn-primary">Order Now</button>
                    </div>
                </div>
                <div>
                    <div className="mt-48 text-white  flex flex-col items-start gap-y-10">
                        <Title addClass="text-6xl">Daba Daba
                            Burger</Title>
                        <p className="text-sm sm:w-2/6 w-full">
                            İki tavuk etinin arasında peynir, marul, domates ve mayonez.
                            Dibi dibi ödeyip, daba daba doymak isteyenlere iki kat tavuk
                            etinin arasında peynir, marul, domates ve mayonez.
                        </p>
                        <button className="btn-primary">Order Now</button>
                    </div>
                </div>
                <div>
                    <div className="mt-48 text-white  flex flex-col items-start gap-y-10">
                        <Title addClass="text-6xl">Cheeseburger</Title>
                        <p className="text-sm sm:w-2/6 w-full">
                            İştah açıcı, klasik bir lezzet: Cheeseburger.
                            Karamelize, yumuşak regular ekmeğinin içerisinde dana eti,
                            bir dilim lezzetli peyniri, ketçabı, sulandırılmış kuru soğanı,
                            hardalı, salatalık turşusu ile doğru süslenmiş görüntüsü ile
                            klasik seçimlerimizden birisi.
                        </p>
                        <button className="btn-primary">Order Now</button>
                    </div>
                </div>
            </Slider>

        </div>
    );
};

export default Carousel;