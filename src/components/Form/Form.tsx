import { type SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  one: "string";
  two: "string";
  three: "string";
  four: "string";
};

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("one", { required: true })} />
      <input {...register("two", { required: true })} />
      <input {...register("three", { required: true })} />
      <input {...register("four", { required: true })} />
      {errors && <span>Enter a valid code</span>}
      <button>Verify Email</button>
    </form>
  );
};

export default Form;
