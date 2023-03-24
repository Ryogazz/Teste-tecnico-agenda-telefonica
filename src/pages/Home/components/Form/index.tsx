import React from 'react';
import { useForm } from 'react-hook-form';
import { createSchedule, tel } from '../../../../services';
interface FormValues {
  id: number;
  name: string;
  email: string;
  date_born: string;
  cpf: string;
  numbers: tel[];
}

const Form: React.FC = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<FormValues>();
  const [addInput, setAddInput] = React.useState(1);

  const onSubmit = async (data: FormValues) => {
    await createSchedule({
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      date_born: data.date_born,
      numbers: data.numbers.map((item) => {
        return item.number;
      }),
    });
    reset();
  };

  const handleADDtel = () => {
    setAddInput((count) => count + 1);
  };
  const handleRemoveTel = () => {
    setAddInput((count) => count - 1);
  };

  return (
    <div className="min-h-max bg-[#E3E6EA] rounded-lg flex flex-col justify-center items-center min-w-max px-2 py-4">
      <h1 className="text-zinc-900 font-semibold text-start text-xl max-w-max capitalize my-2">
        Cadastrar contato
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-gradient-to-b from-[#E3E6EA] via-white rounded-lg min-h-max w-full gap-10 flex flex-col justify-between items-start mx-2 my-2 p-2"
      >
        <div className="flex flex-row justify-center items-start gap-12 ">
          <div className="flex flex-col justify-center items-start space-y-2 w-full">
            <label htmlFor="name">Nome:</label>
            <input
              className="rounded-md h-8 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              id="name"
              {...register('name', {
                required: true,
                minLength: 6,
                maxLength: 150,
              })}
            />
            {errors.name && (
              <span className="text-red-600">Nome é obrigatório</span>
            )}
          </div>
          <div className="flex flex-col justify-center items-start space-y-2 w-full">
            <label htmlFor="date_born">Data de Nascimento:</label>
            <input
              className="rounded-md h-8 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="date"
              id="date_born"
              {...register('date_born', { required: true })}
            />
            {errors.date_born && (
              <span className="text-red-600">
                Data de nascimento é obrigatório
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-center items-start gap-12 ">
          <div className="flex flex-col justify-center items-start space-y-2 w-full">
            <label htmlFor="email">E-mail:</label>
            <input
              className="rounded-md h-8 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="email"
              id="email"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="text-red-600">Email é obrigatório</span>
            )}
          </div>

          <div className="flex flex-col justify-center items-start space-y-2 w-full">
            <label htmlFor="cpf">CPF:</label>

            <input
              className="rounded-md h-8 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              id="cpf"
              {...register('cpf', {
                required: true,
                maxLength: 11,
                minLength: 11,
              })}
            />
            {errors.cpf && (
              <span className="text-red-600">CPF é obrigatório</span>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-start gap-12 ">
          <div className="flex flex-col justify-start items-center space-y-2 w-full my-1 h-full ">
            {Array.from({ length: addInput }).map((_, index) => (
              <div
                key={index}
                className="flex flex-row justify-center items-center my-1"
              >
                <label htmlFor="telefone">Telefone:</label>
                <input
                  id={index.toString()}
                  className="rounded-md h-8 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  type="tel"
                  {...register(`numbers.${index}.number`, {
                    required: true,
                    minLength: 9,
                    maxLength: 11,
                  })}
                />
                {errors.numbers?.[index]?.number && (
                  <span className="text-red-600">Telefone é obrigatório</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-row items-center justify-between">
            <button
              className="rounded-sm p-2 uppercase bg-green-600 text-white font-bold cursor-pointer transition duration-300 ease-in-out
           hover:bg-green-700 focus:ring-4 focus:ring-blue-300 text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none
           "
              onClick={handleADDtel}
            >
              Adicionar numero
            </button>

            <button
              className="rounded-sm p-2 uppercase bg-red-600 text-white font-bold cursor-pointer transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed
           hover:bg-red-700 focus:ring-4 focus:ring-blue-300 text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none
           "
              onClick={handleRemoveTel}
              disabled={addInput <= 1}
            >
              Remover numero
            </button>
          </div>
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
