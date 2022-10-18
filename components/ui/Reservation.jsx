import Title from "./Title";
import React from "react";
import Input from "../form/Input";

const Reservation = () => {
  const inputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      placeholder: "Ad ve Soyadınız",
    },
    {
      id: 2,
      name: "phoneNumber",
      type: "number",
      placeholder: "Telefon Numaranız",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email Adresiniz",
    },
    {
      id: 4,
      name: "persons",
      type: "number",
      placeholder: "Kaç Kişi Olucaksınız?",
    },
    {
      id: 5,
      name: "persons",
      type: "datetime-local",
      placeholder: "How Many Persons?",
    },
  ];

  return (
    <div className="container mx-auto py-12">
      <Title addClass="text-[40px] mb-10">Rezervasyon</Title>
      <div className="flex justify-between flex-wrap-reverse gap-10">
        <div className="lg:flex-1 w-full">
          <div className="flex flex-col gap-y-3">
            {inputs.map((input) => (
              <Input key={input.id} {...input} />
            ))}
          </div>
          <button className="btn-primary mt-4">Rezervasyon Yap</button>
        </div>
        <div className="lg:flex-1 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48348.66924008447!2d-74.24927437205034!3d40.766603131286395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20New%20Jersey%2C%20Amerika%20Birle%C5%9Fik%20Devletleri!5e0!3m2!1str!2str!4v1661853137161!5m2!1str!2str"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
export default Reservation;