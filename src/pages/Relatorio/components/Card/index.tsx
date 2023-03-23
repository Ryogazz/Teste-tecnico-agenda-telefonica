import React, { useState } from "react";
import ModalEdit from "./components/ModalEdit";

interface CardProps {
  name: string;
  email: string;
  date_born: string;
  cpf: string;
  numbers: string[];
}

const Card: React.FC<CardProps> = ({
  name,
  email,
  date_born,
  cpf,
  numbers,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleEdit = () => {
    setIsEditModalOpen(true);
  };

  const handleClose = () => {
    setIsEditModalOpen(false);
  };

  const handleBackgroundClick = () => {
    handleClose();
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-96">
      <h2 className="text-lg font-medium mb-4">{name}</h2>
      <p className="text-gray-700 mb-2">{email}</p>
      <p className="text-gray-700 mb-2">Data de Nascimento: {date_born}</p>
      <p className="text-gray-700 mb-2">CPF: {cpf}</p>
      {numbers.length > 0 && (
        <div className="mb-2">
          <p className="text-gray-700 mb-2">
            Telefone{numbers.length > 1 && "s"}:
          </p>
          <ul>
            {numbers.map((numero, index) => (
              <li key={index} className="text-gray-700">
                {numero}
              </li>
            ))}
          </ul>
          <button onClick={() => setIsEditModalOpen(true)}>Editar</button>
        </div>
      )}
      {isEditModalOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-10" onClick={handleBackgroundClick}>
          <ModalEdit
            children={<h1>conteudo modal</h1>}
            onClose={handleClose}
            onBackgroundClick={handleBackgroundClick}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
