"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { FormContainer,
  FormWrapper,
  Title,
  Input,
  SubmitButton }
  from "./RecoverPasswordStyling";

function RecoverPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("https://skillswapriwi.azurewebsites.net/api/Auth/ResetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          password: password,
          confirmPassword: confirmPassword,
          // Aquí agrega cualquier otro dato necesario que el backend requiera
        }),
      });

      if (!response.ok) {
        throw new Error("Error al actualizar la contraseña");
      }

      alert("Contraseña actualizada con éxito");
      router.push("/auth"); // Redirige al login
    } catch (error: any) {
      alert(error.message || "Ocurrió un error");
    }
  };

  return (
    <FormContainer>
      <FormWrapper>
        <Title>Nueva contraseña</Title>
        <form onSubmit={handleSubmit}>
          <label htmlFor="password">Crear contraseña</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="confirm-password">Confirmar contraseña</label>
          <Input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <SubmitButton type="submit">ENVIAR</SubmitButton>
        </form>
      </FormWrapper>
    </FormContainer>
  );
}

export default RecoverPassword;
