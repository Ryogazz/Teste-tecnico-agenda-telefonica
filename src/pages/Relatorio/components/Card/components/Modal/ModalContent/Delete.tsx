import { useContext } from 'react';
import { ModalContext } from '../../../../../../../context/modalContext';
import { deleteSchedule } from '../../../../../../../services';

const Delete = () => {
  const { editData, setIsModalOpened } = useContext(ModalContext);

  const handleDelete = async () => {
    await deleteSchedule(editData.id);
    setIsModalOpened(false);
  };

  return (
    <div>
      <div className="text-center text-2xl font-bold mb-4 m-3">
        Deseja mesmo deletar o contato ?git
      </div>
      <div className="flex justify-center ">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-3"
          onClick={() => {
            setIsModalOpened(false);
          }}
        >
          Cancelar
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-3"
          onClick={() => {
            handleDelete();
          }}
        >
          Confirmar
        </button>
      </div>
    </div>
  );
};

export default Delete;
