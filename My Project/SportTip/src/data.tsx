import React from "react";

interface DataItem {
  id: number;
  title: string;
  description: string;
}

const data: DataItem[] = [
  { id: 1, title: "Antrenman", description: "Her gün 30 dakika koşu yapın." },
  {
    id: 2,
    title: "Antrenman",
    description: "Günde bir kez 20 dakika yoga yapın.",
  },
  {
    id: 3,
    title: "Antrenman",
    description: "Haftada üç kez 45 dakika yüzme yapın.",
  },
  {
    id: 4,
    title: "Uyku Düzeni",
    description: "Her gece en az 7-8 saat uyumaya çalışın.",
  },
  {
    id: 5,
    title: "Uyku Düzeni",
    description:
      "Akşam yemeğinden sonra bir fincan ıhlamur veya papatya çayı için.",
  },
  {
    id: 6,
    title: "Uyku Düzeni",
    description:
      "Yatmadan önce meditasyon veya derin nefes egzersizleri yapın.",
  },
  {
    id: 7,
    title: "Beslenme",
    description:
      "Kahvaltınızı protein ve lif açısından zengin gıdalarla yapın, örneğin yumurta ve yulaf ezmesi.",
  },
  {
    id: 8,
    title: "Beslenme",
    description:
      "Gün içinde meyve, sebze veya yoğurt gibi sağlıklı atıştırmalıklar tüketin.",
  },
  {
    id: 9,
    title: "Beslenme",
    description:
      "Günde en az 8 bardak su içmeye özen gösterin. Sabahları bir bardak su içerek güne başlayın.",
  },
  {
    id: 10,
    title: "Antrenman",
    description: "Haftada 3 kez 30 dakika kardiyo yapın.",
  },
  {
    id: 11,
    title: "Antrenman",
    description:
      "Her gün 15 dakika esneme hareketleri yaparak esnekliğinizi artırın.",
  },
  {
    id: 12,
    title: "Uyku Düzeni",
    description:
      "Her gece aynı saatte yatmaya özen gösterin ve sabahları aynı saatte kalkın.",
  },
  {
    id: 13,
    title: "Uyku Düzeni",
    description:
      "Yatmadan önce telefon kullanımını minimuma indirin veya ekran ışığını azaltın.",
  },
  {
    id: 14,
    title: "Beslenme",
    description:
      "Her öğünde protein, karbonhidrat ve sağlıklı yağ içeren yiyecekler tüketin.",
  },
  {
    id: 15,
    title: "Beslenme",
    description:
      "Günde en az 5 porsiyon meyve ve sebze tüketmeye özen gösterin.",
  },
  {
    id: 16,
    title: "Antrenman",
    description:
      "Haftada 2-3 kez kas güçlendirme egzersizleri yapın, örneğin şınav veya mekik.",
  },
  {
    id: 17,
    title: "Uyku Düzeni",
    description:
      "Lavanta yağı veya melatonin içeren doğal uyku yardımcıları kullanabilirsiniz.",
  },
  {
    id: 18,
    title: "Beslenme",
    description:
      "Kas gelişimi için öğünlerinizde yeterli miktarda protein tüketmeye özen gösterin.",
  },
  {
    id: 19,
    title: "Antrenman",
    description:
      "Haftalık bir egzersiz programı oluşturun ve buna sadık kalın.",
  },
  {
    id: 20,
    title: "Uyku Düzeni",
    description: "Karanlık, sessiz ve serin bir ortamda uyumaya özen gösterin.",
  },
];

const DataPage: React.FC = () => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <div className="container">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataPage;
