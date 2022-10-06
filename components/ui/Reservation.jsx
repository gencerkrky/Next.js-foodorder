import React from "react";
import Input from "../form/input";
import Title from "./Title";

const Reservation = () => {
    return (
        <div className="container mx-auto py-12">
            <Title addClass="text-[40px] mb-10">Rezervasyon</Title>
            <div className="flex justify-between flex-wrap items-center gap-10">
                <div className="flex-1 w-full">
                    
                    <div className="lg:flex flex-col gap-y-3">
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                        <Input />
                    </div>
                    <button className="btn-primary mt-4">Rezervasyon Yap</button>
                </div>
                <div className="lg:flex-1 w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.946040462546!2d30.698049608621886!3d36.891639106176825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391519be213c9%3A0x66441de93553b7b6!2zTcSwR1JPUw!5e0!3m2!1str!2str!4v1665084513869!5m2!1str!2str"
                        width="600"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Reservation;
