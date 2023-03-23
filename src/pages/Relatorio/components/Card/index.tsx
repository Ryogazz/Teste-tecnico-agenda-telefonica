import React, { useState } from "react";
import ModalEdit from "./components/Modal";

interface CardProps {
  id: number;
  name: string;
  email: string;
  date_born: string;
  cpf: string;
  numbers: string[];
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  email,
  date_born,
  cpf,
  numbers,
}) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [idModal, setIdModal] = useState("");
  

  const handleClose = () => {
    setIsEditModalOpen(false);
  };

  const handleBackgroundClick = () => {
    handleClose();
  };

  const editModal = async (id: number) => {
    console.log('o ',id, 'sera editado');
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

          <button
            className="rounded-sm p-2 uppercase bg-blue-600 text-white font-bold cursor-pointer transition duration-300 ease-in-out
                hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none
                "
            onClick={() => {setIsEditModalOpen(true), setIdModal('edit'), editModal(id)}}
          >
            Editar
          </button>

          <button
            className="rounded-sm p-2 uppercase bg-red-600 text-white font-bold cursor-pointer transition duration-300 ease-in-out
                hover:bg-red-700 focus:ring-4 focus:ring-blue-300 text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none
                "
            onClick={() => {setIsEditModalOpen(true) , setIdModal('delete'), editModal(id)}}
          >
            Excluir
          </button>
        </div>
      )}
      {isEditModalOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
          onClick={handleBackgroundClick}
        >
          <ModalEdit
            identify={idModal}
            onClose={handleClose}
            id={id}
          />
        </div>
      )}
    </div>
  );
};

export default Card;
