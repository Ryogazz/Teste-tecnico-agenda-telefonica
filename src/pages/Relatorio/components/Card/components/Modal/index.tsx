import React from "react";
import Edit from './ModalContent/Edit';
import Delete from './ModalContent/Delete';
import { ModalContext } from '../../../../../../context/modalContext';



const Modal = () => {
  const {idModal,setIsModalOpened} = React.useContext(ModalContext);
  return (
      <div className="flex items-center justify-center min-h-screen text-center ">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
        </span>

        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all "
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <button
              className="absolute top-0 right-0 mt-4 mr-4"
              onClick={() => setIsModalOpened(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                className="h-6 w-6 text-gray-700 hover:text-gray-900"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {
              idModal === 'edit' ? 
              <Edit /> : <Delete />
            }
          </div>
        </div>
      </div>
  );
};

export default Modal;
