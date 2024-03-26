import React, { useState, createContext, useContext } from "react";
import "./App.css";
import SavePage from "./save";
import { ChangeBackGroundColor, SavedInformations } from "./DarkModeToggleButton";

export interface DataItem {
  id: number;
  title: string;
  description: string;
}


const data: DataItem[] = [
  {
    id: 1,
    title: "Antrenman",
    description:
      "Spor yaparken, doğaya çıkın ve açık havada egzersiz yapın. Doğa yürüyüşleri, bisiklet sürme veya dağ tırmanışı gibi aktiviteler size zihinsel ve fiziksel olarak fayda sağlar.",
  },
  {
    id: 2,
    title: "Antrenman",
    description:
      "Egzersiz yaparken müziğin keyfini çıkarın. Sevdiğiniz şarkıları dinlemek, antrenmanınızı daha keyifli hale getirebilir ve motivasyonunuzu artırabilir.",
  },
  {
    id: 3,
    title: "Antrenman",
    description:
      "Spor yapmanın yanı sıra, düzenli olarak esneme ve gevşeme egzersizleri yapmayı unutmayın. Esneklik egzersizleri, kaslarınızı esnetir ve sakatlanma riskini azaltır.",
  },
  {
    id: 4,
    title: "Uyku Düzeni",
    description:
      "Bir egzersiz partneri bulun ve birlikte spor yapın. Birlikte egzersiz yapmak, motivasyonunuzu artırır, eğlenceli vakit geçirmenizi sağlar ve hedeflerinize ulaşmanıza yardımcı olabilir.",
  },
  {
    id: 5,
    title: "Uyku Düzeni",
    description:
      "Yeni sporlar deneyin ve çeşitlilik sağlayın. Yüzme, dans, kick boks veya pilates gibi farklı sporları denemek, vücudunuzu ve zihninizin farklı yönlerini geliştirebilir.",
  },
  {
    id: 6,
    title: "Uyku Düzeni",
    description:
      "Yoga yaparak zihinsel ve fiziksel olarak rahatlama sağlayın. Yoga, stresi azaltır, esnekliği artırır ve derin bir uyku kalitesi sağlar.",
  },
  {
    id: 7,
    title: "Beslenme",
    description:
      "Sağlıklı bir diyetle vücudunuzu destekleyin. Taze meyve ve sebzeler, protein kaynakları ve sağlıklı yağlar içeren bir beslenme düzeni, enerjinizi artırır ve sağlıklı bir yaşam tarzı sağlar.",
  },
  {
    id: 8,
    title: "Beslenme",
    description:
      "Su içmeyi ihmal etmeyin. Günde en az 8 bardak su içmek, vücudunuzu nemli tutar, toksinleri temizler ve genel sağlık ve iyi olma hissiyatını artırır.",
  },
  {
    id: 9,
    title: "Beslenme",
    description:
      "Yemekler arasında sağlıklı atıştırmalıklar tüketin. Badem, ceviz, havuç veya kuru meyve gibi besleyici atıştırmalıklar enerjinizi artırır ve tok hissetmenize yardımcı olur.",
  },
  {
    id: 10,
    title: "Antrenman",
    description:
      "Düzenli bir egzersiz programı oluşturun ve hedeflerinize ulaşmak için disiplinli olun. Haftada belirli günlerde ve saatlerde egzersiz yapmak, alışkanlık haline gelir ve motivasyonunuzu artırır.",
  },
  {
    id: 11,
    title: "Antrenman",
    description:
      "Koşu bandında veya dışarıda koşarak kalp sağlığınızı destekleyin. Kardiyo egzersizi, kardiyovasküler sağlığı iyileştirir, metabolizmayı hızlandırır ve kilo kaybını teşvik eder.",
  },
  {
    id: 12,
    title: "Uyku Düzeni",
    description:
      "Gün içinde dinlenme ve gevşeme zamanları ayırın. Stresi azaltmak için yoga, meditasyon veya nefes egzersizleri yapın ve zihninizi sakinleştirin.",
  },
  {
    id: 13,
    title: "Uyku Düzeni",
    description:
      "Uyku ritüalleri oluşturun ve uyku kalitesini artırın. Her gece aynı saatte yatın, rahatlatıcı bir uyku ortamı oluşturun ve uykuya geçmeden önce ekranlardan uzak durun.",
  },
  {
    id: 14,
    title: "Beslenme",
    description:
      "Egzersiz öncesi ve sonrası dengeli beslenin. Egzersiz yapmadan önce hafif bir atıştırma yapın ve egzersiz sonrası protein ve karbonhidrat içeren bir yemek tüketin.",
  },
  {
    id: 15,
    title: "Beslenme",
    description:
      "Vitamin ve mineral açısından zengin besinleri tüketin. Çeşitli meyve ve sebzeler, tahıllar, protein kaynakları ve sağlıklı yağlar içeren bir diyet, vücudunuzun ihtiyaç duyduğu besin maddelerini sağlar.",
  },
  {
    id: 16,
    title: "Antrenman",
    description:
      "Günlük aktivitelerinizi artırın. Merdiven çıkma, yürüyüş yapma veya bisiklete binme gibi küçük egzersizler, günlük fiziksel aktivitenizi artırır ve genel sağlığınızı iyileştirir.",
  },
  {
    id: 17,
    title: "Uyku Düzeni",
    description:
      "Rahatlatıcı bir uyku ortamı oluşturun. Koyu ve serin bir oda, rahat bir yatak ve uyku öncesi rahatlama teknikleri, uykuya dalmanıza ve uyku kalitenizi artırmanıza yardımcı olur.",
  },
  {
    id: 18,
    title: "Beslenme",
    description:
      "Düzenli olarak öğün planlaması yapın ve sağlıklı yiyecekleri hazır bulundurun. Önceden hazırlanmış sağlıklı atıştırmalıklar ve öğle yemeği seçenekleri, sağlıklı beslenme alışkanlıklarını korumanıza yardımcı olur.",
  },
  {
    id: 19,
    title: "Antrenman",
    description:
      "Spor yaparken, nefes tekniklerine odaklanın. Doğru nefes alıp vermek, egzersiz verimliliğinizi artırır, enerji seviyelerinizi artırır ve stresi azaltır.",
  },
  {
    id: 20,
    title: "Uyku Düzeni",
    description:
      "Stres yönetimi tekniklerini uygulayarak uyku kalitesini artırın. Stres, uyku kalitesini olumsuz etkiler, bu nedenle yoga, meditasyon veya masaj gibi stres azaltıcı aktiviteleri deneyin.",
  },
];

const DataPage: React.FC = () => {
  const [currentData, setCurrentData] = useState<DataItem>(data[0]);
  const { BackGroundColor, setBackGroundColor } = useContext(
    ChangeBackGroundColor
  );
  const { savedCurrentData, setSavedCurrentData} = useContext(SavedInformations);
  

  function changeButton() {
    const newColor = BackGroundColor === "#faebd7" ? "#404040" : "#faebd7";
    document.body.style.backgroundColor = newColor;
    setBackGroundColor(newColor);
  }

  function getRandomData() {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentData(data[randomIndex]);
  }

  return (
    <div style={{ backgroundColor: BackGroundColor }}>
      <div key={currentData.id}>
        <div className="container">
          <h2>{currentData.title}</h2>
          <p>{currentData.description}</p>
        </div>
        <SavePage data={currentData} />
      </div>
      <div className="active">
        <button className="randomSuggestionsButton"
          onClick={getRandomData}
        >
          Random Öneri
        </button>
        <button className="backgroundColorButton"
          onClick={changeButton}
          style={{
            height: 50,
            borderRadius: 15,
            boxShadow: "5px 3px 15px rgba(209, 1, 1, 0.5)",
            fontSize: 15,
            fontWeight: "bold",
            marginLeft: 750,
          }}
        >
          Change Background Color
        </button>
      </div>
    </div>
  );
};

export default DataPage;
