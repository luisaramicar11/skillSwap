// pages/login/LoginPage.tsx
"use client";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/src/app/redux/slices/authSlice";
import { toast } from "react-toastify";
import { AppDispatch } from "@/src/app/redux/store";
import InputSingUp from "../../../components/ui/inputs/InputAuth";
import ButtonSingUp from "../../ui/buttons/ButtonSingUp";
import Label from "../../ui/labels/LabelAuth";
import { handlePageChange } from "@/src/utils/handlePageTheme";
import StyledNavLink from "../../ui/links/NavLinks";
import ModalPasswordRecovery from "../../modals/ModalForgotPassword";

// Styled components
import {
  FormWrapper,
  Container,
  Title,
  DivButtonLogin,
  BackLink,
  Arrow,
  ForgotPasswordButton
} from "./LoginStyling";

export default function LoginPage() {
  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();
  const { loading } = useSelector((state: any) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { email, password } = form;

    if (!email || !password) {
      toast.error("Por favor, completa todos los campos.");
      return;
    }

    const resultAction = await dispatch(loginUser({ email, password }));

    if (loginUser.fulfilled.match(resultAction)) {
      const token = resultAction.payload?.data.token;
      const role = resultAction.payload?.data.role;
      const idUser = resultAction.payload?.data.id;

      if (token) {
        toast.success("Login exitoso!");
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
    } else {
      toast.error("Error al intentar iniciar sesión.");
    }
  }

  return (
    <Container>
      <FormWrapper>
        <BackLink onClick={() => handlePageChange("INICIO")}>
          <Arrow>&lt;</Arrow> VOLVER A <StyledNavLink href="/" label="INICIO"></StyledNavLink>
        </BackLink>
        <Title>Iniciar Sesión</Title>
        <form onSubmit={handleSubmit}>
          <Label text="Email" htmlFor="email-login" />
          <InputSingUp
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
          <InputSingUp
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
            <ButtonSingUp type="submit" disabled={loading}>
              {loading ? "Cargando..." : "ENTRAR"}
            </ButtonSingUp>
          </DivButtonLogin>

          {/* Botón estilizado de "Olvidaste tu contraseña" */}
          <ForgotPasswordButton type="button" onClick={openModal}>
            ¿Olvidaste tu contraseña?
          </ForgotPasswordButton>
        </form>
      </FormWrapper>

      {/* Renderiza el modal */}
      <ModalPasswordRecovery isOpen={isModalOpen} onClose={closeModal} />
    </Container>
  );
}