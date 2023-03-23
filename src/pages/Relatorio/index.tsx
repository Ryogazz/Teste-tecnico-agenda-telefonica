import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Card from "./components/Card";
import {
  getAllSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule,
  Schedule,
} from "../../services";
import { useEffect, useState } from 'react';


const Relatorio = () => {
  const [cards, setCards] = useState<JSX.Element[]>([]);

  const getData = async () => {
    const data = await getAllSchedules();
    return data;
  };

  interface CardProps {
    id: number;
    name: string;
    email: string;
    cpf: string;
    date_born: string;
    numbers: {
      id: number;
      id_schedule: number;
      number: string;
    }[];
  }

const renderCards = async () => {
  const response = await getData();
  const data = response.data; 
  console.log(data);
  const cards = data.map((item: CardProps) => {
    return (
      <Card
        id={item.id}
        key={item.id}
        name={item.name}
        email={item.email}
        date_born={item.date_born}
        cpf={item.cpf}
        numbers={item.numbers.map((item) => item.number)}
      />
    );
  });
  return cards;
};
  

  useEffect(() => {
    renderCards().then((cards) => {
      setCards(cards);
    });
  }, []);

  

  return (
    <div className="min-h-screen w-screen flex flex-col justify-between items-center bg-gray-100">
      <Menu />
      <div className='bg-purple-800 grid grid-cols-3 gap-8 mx-auto px-4 py-4 rounded-md'>
        {cards}
      </div>
      <Footer />
    </div>
  );
};

export default Relatorio;
