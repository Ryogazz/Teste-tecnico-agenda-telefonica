import { createContext, useState } from 'react';

interface EditData {
  id: number;
  name: string;
  email: string;
  date_born: string;
  cpf: string;
  numbers: string[];
}
interface ModalContext {
  isModalOpened: boolean;
  setIsModalOpened: (value: boolean) => void;
  idModal: string;
  setIdModal: (value: string) => void;
  editData: EditData;
  setEditData: (value: EditData) => void;
}

export const ModalContext = createContext<ModalContext>({
  isModalOpened: false,
  setIsModalOpened: () => {},
  idModal: '',
  setIdModal: () => {},
  editData: {
    id: 0,
    name: '',
    email: '',
    date_born: '',
    cpf: '',
    numbers: [],
  },
  setEditData: () => {},
});

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [idModal, setIdModal] = useState('');
  const [editData, setEditData] = useState<EditData>({
    id: 0,
    name: '',
    email: '',
    date_born: '',
    cpf: '',
    numbers: [],
  });

  return (
    <ModalContext.Provider
      value={{
        isModalOpened,
        setIsModalOpened,
        idModal,
        setIdModal,
        editData,
        setEditData,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const ModalConsumer = ModalContext.Consumer;
