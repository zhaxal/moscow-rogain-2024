import InputMask from "react-input-mask";
import { useForm } from "react-hook-form";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface LoginFormProps {
  phone: string;
}

const schema = yup.object().shape({
  phone: yup
    .string()
    .required("Введите номер телефона")
    .matches(
      /^\+7 \d{3} \d{3} \d{4}$/,
      "Номер телефона должен быть в формате +7 999 999 9999"
    ),
});

function Login() {
  const loginForm = useForm<LoginFormProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = async (data: LoginFormProps) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Регистрация</h3>
        <form onSubmit={loginForm.handleSubmit(onSubmit)}>
          <div className="mt-4">
            <label className="block" htmlFor="phone">
              Номер телефона
            </label>
            <InputMask
              {...loginForm.register("phone", { required: true })}
              mask="+7 999 999 9999"
              placeholder="+7 ___ ___ ____"
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
            />
            {loginForm.formState.errors.phone && (
              <p className="text-sm text-red-600">
                {loginForm.formState.errors.phone.message}
              </p>
            )}
          </div>
          <div className="flex items-baseline justify-between">
            <button
              type="submit"
              className="px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-900"
            >
              УЧАСТВОВАТЬ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
