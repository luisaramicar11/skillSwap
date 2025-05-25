"use client";
import { FormEvent, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/src/app/redux/slices/authSlice";
import {IUserLoginResponse } from "../../../models/login.model"
import { toast } from "react-toastify";
import { AppDispatch } from "@/src/app/redux/store";
import InputAuth from "../../ui/inputs/InputAuth";
import ButtonAuth from "../../ui/buttons/ButtonAuth";
import Label from "../../ui/labels/LabelAuth";
import { handlePageChange } from "@/src/lib/utils/handlePageTheme";
import StyledNavLink from "../../ui/links/NavLinks";
import { RootState } from '../../../app/redux/store';

// Styled components
import {FormWrapper,Container,Title,DivButtonLogin,BackLink,Arrow} from "./LoginStyling";

interface ILoginPageProps {
  forgotPassword: ReactNode;
}

export default function LoginPage({forgotPassword}: ILoginPageProps) {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { email, password } = form;

    if (!email || !password) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    const resultAction = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(resultAction)) {
      handleLoginSuccess(resultAction.payload);
    } else {
      toast.error("Error al intentar iniciar sesión.");
    }
  }

  const handleLoginSuccess = (payload: IUserLoginResponse ) => {
    const token = payload?.data.response.token;
    const role = payload?.data.response.role;
    const idUser = payload?.data.response.id;

    if (token) {
      toast.success("¡Inicio de sesión exitoso!", {
        style: {
          marginTop: '10px', 
        },
      });
      
      localStorage.setItem("authToken", token);
      localStorage.setItem("userId", idUser.toString());
      document.cookie = `authToken=${token}; path=/;`;
      console.log(localStorage.getItem("authToken"));

      if (role === 1) {
        router.push("/admin");
      } else if (role === 2) {
        router.push("/user");
      } else {
        toast.error("Rol no reconocido.");
      }
    }
  };

  return (
    <Container>
      <FormWrapper>
        <BackLink onClick={() => handlePageChange("INICIO")}>
          <Arrow>&lt;</Arrow> VOLVER A <StyledNavLink href="/" label="INICIO"></StyledNavLink>
        </BackLink>
        <Title>Iniciar Sesión</Title>
        <form onSubmit={handleSubmit}>
          <Label text="Email" htmlFor="email-login" />
          <InputAuth
            type="email"
            id="email-login"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="email"
          />
          <Label text="Contraseña" htmlFor="password-login" />
          <InputAuth
            type="password"
            id="password-login"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="current-password"
          />
          <DivButtonLogin>
            <ButtonAuth type="submit" disabled={loading} onClick={() => handlePageChange('INICIO')}>
              {loading ? "Cargando..." : "ENTRAR"}
            </ButtonAuth>
          </DivButtonLogin>

          {/* Botón estilizado de "Olvidaste tu contraseña" */}
          {forgotPassword}
        </form>
      </FormWrapper>

      {/* Renderiza el modal */}
    </Container>
  );
}
