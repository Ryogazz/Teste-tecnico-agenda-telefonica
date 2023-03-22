import React from "react";
import { useForm, Controller } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  date_born: string;
  cpf: string;
  telefone: string;
}

const Form: React.FC = () => {
  const {
    control,
    handleSubmit,
    register,
    resetField,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className='h-full bg-[#E3E6EA] rounded-lg flex flex-col justify-center items-center max-w-max px-2 py-4'>
      <h1 className='text-zinc-900 font-semibold text-left text-xl max-w-max capitalize my-2'>Cadastrar contato</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-gradient-to-b from-[#E3E6EA] via-white rounded-lg h-[550px] w-96 gap-10 flex flex-col justify-between items-start mx-2 my-2 p-2"
      >
        <div className="flex flex-row justify-start items-center space-x-2 w-full">
          <label htmlFor="name">Nome:</label>
          <input
            className="rounded-md h-8 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            id="name"
            {...register("name", {
              required: true,
              minLength: 6,
              maxLength: 150,
            })}
          />
          {errors.name && (
            <span className="text-red-600">Nome é obrigatório</span>
          )}
        </div>
        <div className="flex flex-row justify-start items-center space-x-2 w-full">
          <label htmlFor="email">E-mail:</label>

          <input
            className="rounded-md h-8 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-600">Email é obrigatório</span>
          )}
        </div>
        <div className="flex flex-row justify-start items-center space-x-2 w-full">
          <label htmlFor="date_born">Data de Nascimento:</label>
          <input
            className="rounded-md h-8 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="date"
            id="date_born"
            {...register("date_born", { required: true })}
          />
          {errors.date_born && (
            <span className="text-red-600">
              Data de nascimento é obrigatório
            </span>
          )}
        </div>
        <div className="flex flex-row justify-start items-center space-x-2 w-full">
          <label htmlFor="cpf">CPF:</label>

          <input
            className="rounded-md h-8 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="text"
            id="cpf"
            {...register("cpf", {
              required: true,
              maxLength: 11,
              minLength: 11,
            })}
          />
          {errors.cpf && (
            <span className="text-red-600">CPF é obrigatório</span>
          )}
        </div>
        <div className="flex flex-row justify-start items-center space-x-2 w-full">
          <label htmlFor="telefone">Telefone:</label>

          <input
            className="rounded-md h-8 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="tel"
            id="telefone"
            {...register("telefone", {
              required: true,
              minLength: 9,
              maxLength: 11,
            })}
          />
          {errors.telefone && (
            <span className="text-red-600">Telefone é obrigatório</span>
          )}
        </div>
        <button
          className="rounded-sm p-2 uppercase bg-blue-600 text-white font-bold cursor-pointer transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed
        hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none
        "
          disabled={!isDirty || !isValid}
          type="submit"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
