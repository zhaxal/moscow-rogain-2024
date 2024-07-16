/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import * as yup from "yup";
import InputMask from "react-input-mask";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";

import backendInstance from "../../utils/backendInstance";
import { useSnackbar } from "../../contexts/SnackbarContext";
import { useAuth } from "../../contexts/AuthContext";

interface PhoneFormProps {
  phone: string;
}

interface CodeFormProps {
  code: string;
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
  const navigate = useNavigate();
  const [stage, setStage] = useState<"phone" | "code">("phone");
  const { showMessage } = useSnackbar();
  const { signIn, status } = useAuth();
  const [searchParams, _] = useSearchParams();

  useEffect(() => {
    if (status === "authenticated" && searchParams.get("redirect")) {
      navigate(searchParams.get("redirect") || "/");
    }

    if (status === "authenticated" && !searchParams.get("redirect")) {
      navigate("/");
    }
  }, [status]);

  const phoneForm = useForm<PhoneFormProps>({
    resolver: yupResolver(schema),
    defaultValues: {
      phone: "",
    },
  });

  const codeForm = useForm<CodeFormProps>({
    resolver: yupResolver(
      yup.object().shape({
        code: yup
          .string()
          .required("Введите код")
          .matches(/^\d{4}$/, "Код должен состоять из 4 цифр"),
      })
    ),
    defaultValues: {
      code: "",
    },
  });

  const onSubmitPhone = async (data: PhoneFormProps) => {
    backendInstance
      .post("/auth/register", data)
      .then(() => {
        setStage("code");
      })
      .catch((error) => {
        const message =
          error.response.data.length > 100
            ? "Ошибка, пожалуйста попробуйте позже"
            : error.response.data;
        showMessage(message, 3000, "error");
      });
  };

  const onSubmitCode = async (data: CodeFormProps) => {
    backendInstance
      .post<{
        token: string;
      }>("/auth/verify", {
        phone: phoneForm.getValues().phone,
        code: data.code,
      })
      .then(({ data }) => {
        signIn(data.token);
      })
      .catch((error) => {
        const message =
          error.response.data.length > 100
            ? "Ошибка, пожалуйста попробуйте позже"
            : error.response.data;
        showMessage(message, 3000, "error");
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Регистрация</h3>
        {stage === "phone" ? (
          <form onSubmit={phoneForm.handleSubmit(onSubmitPhone)}>
            <div className="mt-4">
              <label className="block" htmlFor="phone">
                Номер телефона
              </label>
              <InputMask
                {...phoneForm.register("phone", { required: true })}
                mask="+7 999 999 9999"
                placeholder="+7 ___ ___ ____"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              {phoneForm.formState.errors.phone && (
                <p className="text-sm text-red-600">
                  {phoneForm.formState.errors.phone.message}
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
        ) : (
          <form onSubmit={codeForm.handleSubmit(onSubmitCode)}>
            <div className="mt-4">
              <label className="block" htmlFor="code">
                Код из звонка
              </label>
              <input
                {...codeForm.register("code", { required: true })}
                type="text"
                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-red-600"
              />
              {codeForm.formState.errors.code && (
                <p className="text-sm text-red-600">
                  {codeForm.formState.errors.code.message}
                </p>
              )}
            </div>
            <div className="flex items-baseline justify-between">
              <button
                type="submit"
                className="px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-red-900"
              >
                ПОДТВЕРДИТЬ
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;
