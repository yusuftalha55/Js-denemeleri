import React from 'react';
import Image from 'next/image';
import warOne from "../../app/public/img/war1.jpg";
import warTwo from "../../app/public/img/war2.jpg";

const ContainerList = () => {
  const arrayImg = [warOne, warTwo];

  return (
    <div>
      {arrayImg.map((imgSrc, index) => (
        <div key={index} className="image-container">
          <Image src={imgSrc} alt={`war image ${index + 1}`} width={500} height={300} />
        </div>
      ))}
    </div>
  );
};

export default ContainerList;


