import React from "react";
import Image from "next/image";

const CustomersItem = ({ imgSrc }) => {
    
  return (
    <div className="mt-5 mx-4">
      <div className="p-6 bg-secondary text-white rounded[5px] ">
        <p>
          Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
          metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat
          numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı
          1500'lerden beri endüstri standardı sahte metinler olarak
          kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış,
          aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır.
          1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının
          yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum
          sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.
          Çok Güzel..!
        </p>
      </div>
      <div className="flex flex-col mt-4">
        <span className="text-lg font-semibold  ">Damla</span>
        <span className="text-[15px]">Damlaaaaa</span>
      </div>
      <div
        className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content-[''] before:absolute before:top-0 
      flex justify-center before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5 "
      >
        <Image
          src={imgSrc}
          alt=""
          layout="fill"
          objectFit="contain"
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomersItem;
