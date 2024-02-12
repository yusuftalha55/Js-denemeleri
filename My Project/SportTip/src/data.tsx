import React from "react";

interface DataItem {
  id: number;
  title: string;
  description: string;
}

const data: DataItem[] = [
  { id: 1, title: "Öneri 1", description: "Bu birinci öneridir." },
  { id: 2, title: "Öneri 2", description: "Bu ikinci öneridir." },
];

const DataPage: React.FC = () => {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default DataPage;
