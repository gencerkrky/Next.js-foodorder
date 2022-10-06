import Image from 'next/image'
import React from 'react'
import Title from './Title'

const About = () => {
    return (
        <div className="bg-secondary py-14">
            <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
                <div className="flex justify-center">
                    <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
                        <Image src="/images/about-img.png" alt="" layout="fill" />
                    </div>
                </div>
                <div className="md:w-1/2 ">
                    <Title addClass="text-[40px]">Gencer Burger</Title>
                    <p className="my-5 flex flex-col items-center">
                        2017 Brand Z Raporu’na göre dünyanın en değerli sekizinci markası olan
                        Gencer Burger olarak, dünyanın dört bir yanında yer alan 34 bini aşkın restoran
                        ve 1,6 milyonu geçen çalışanımızla, günde ortalama
                        58 milyon müşterimizi mutlu edebilmek için çalışıyoruz. Türkiye'de de Gencer Burger, bugün yaklaşık 260 restoranı ve
                        6000 civarında çalışanı ile yılda 100 milyon kişiye hizmet vermektedir.
                    </p>
                    <Title><button className="btn-primary">DEVAMINI OKU</button></Title>
                </div>
            </div>
        </div>
    );
};

export default About