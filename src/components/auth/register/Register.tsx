'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../app/redux/slices/authSlice';
import { toast } from 'react-toastify';
import { AppDispatch, RootState } from '../../../app/redux/store';
import InputSignUp from "../../ui/inputs/InputSignUp"
import { DivUserData, TitleUserData, DivUserInput, DivUserTitle } from "./RegisterStyling"
import Label from "../../ui/labels/LabelAuth";
import Select from "../../ui/selects/SelectRegister";
import TextArea from "../../ui/textAreas/TextAreaRegister";
import ButtonSingUp from '../../ui/buttons/ButtonSingUp';

//Syled
import { FormWrapper } from '../login/LoginStyling';
import { Container } from '../login/LoginStyling';
import { Title } from '../login/LoginStyling';
import { DivButton } from '../login/LoginStyling';

export default function RegisterPage() {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [form, setForm] = useState({
    name: "",
    lastName: "",
    age: "",
    image: "",
    phoneNumber: "",
    email: "",
    password: "",
    jobTitle: "",
    description: "",
    linkedIn: "",
    behance: "",
    github: "",
    createdAt: ""
  });

  const [selectedOption, setSelectedOption] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(0); // Controla la vista actual del carrusel

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Manejar el select
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  // Manejar el textarea
  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSkills(event.target.value);
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica de campos
    if (!form.email || !form.name || !form.password || !form.lastName || !form.age || !form.description || !form.jobTitle) {
      toast.error('Por favor, completa todos los campos.');
      return;
    }

    try {
      await dispatch(registerUser(form)).unwrap();
      toast.success('Registro exitoso!');
    } catch (err: any) {
      if (err?.message) {
        toast.error(`Registro fallido: ${err.message}`);
      } else {
        toast.error('Registro fallido. Inténtalo de nuevo.');
      }
    }
  };

  // Renderizar el input actual basado en la vista
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <>
            <div>
              <Title>Registro</Title>
              <Label
                text="Email"
                htmlFor=''
              />
              <InputSignUp
                type="email"
                name="email"
                placeholder="Escribe tu nombre..."
                value={form.email}
                onChange={handleChange}
                required
              />
              <Label
                text="Contraseña"
                htmlFor='password'
              />
              <InputSignUp
                type="password"
                name="password"
                placeholder="Escribe tu contraseña..."
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </>

        );
      case 1:
        return (
          <DivUserData>
            <DivUserTitle>
              <Title>Tus datos</Title>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="name" text="Nombre*" />
              <InputSignUp
                type="text"
                name="name"
                placeholder="Escribe tu nombre"
                value={form.name}
                onChange={handleChange}
                required
              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="lastname" text="Apellidos*" />
              <InputSignUp
                type="text"
                name="lastName"
                placeholder="Escribe tus apellidos"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </DivUserInput>
          </DivUserData>
        );
      case 2:
        return (
          <DivUserData>
            <DivUserTitle>
              <Title>Tus datos</Title>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="age" text="Edad" />
              <InputSignUp
                type="text"
                name="age"
                placeholder="Escribe tu edad"
                value={form.age}
                onChange={handleChange}
                required
              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="image" text="Imagen" />
              <InputSignUp
                type="text"
                name="image"
                placeholder="Escribe la url de tu imagen"
                value={form.image}
                onChange={handleChange}
              />
            </DivUserInput>
          </DivUserData>
        );
      case 3:
        return (
          <DivUserData>
            <DivUserTitle>
              <TitleUserData>Tus habilidades</TitleUserData>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="area" text="Selecciona una categoría" />
              <Select
                value={selectedOption}
                onChange={handleSelectChange}
                ariaLabel="Select area"
                name="area"
                required
              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="skills" text="Habilidades" />
              <TextArea
                value={skills}
                onChange={handleTextAreaChange}
                ariaLabel="Escribe tus habilidades"
                name="skills"
                placeholder="Escribe aquí tus habilidades (máx. 200 caracteres)..."
                required
                maxLength={200} // Especificamos el límite de caracteres
              />
              <p>{skills.length} / 200 caracteres</p> {/* Mostrar contador de caracteres */}
            </DivUserInput>
          </DivUserData>
        );
      case 4:
        return (
          <DivUserData>
            <DivUserTitle>
              <TitleUserData>Sobre tu experiencia</TitleUserData>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="jobTitle" text="Trabajo/título" />
              <InputSignUp
                type="text"
                name="jobTitle"
                placeholder="Nombre de tu trabajo"
                value={form.jobTitle}
                onChange={handleChange}
                required
              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="description" text="Descripción" />
              <InputSignUp
                type="text"
                name="description"
                placeholder="Describe tu experiencia "
                value={form.description}
                onChange={handleChange}
                required
              />
            </DivUserInput>

          </DivUserData>
        );
      case 5:
        return (
          <DivUserData>
            <DivUserTitle>
              <TitleUserData>Contacto</TitleUserData>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="linkedIn" text="LinkedIn" />
              <InputSignUp
                type="text"
                name="linkedIn"
                placeholder="Escribe tu linkedIn"
                value={form.linkedIn}
                onChange={handleChange}

              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="behance" text="Behance" />
              <InputSignUp
                type="text"
                name="behance"
                placeholder="Escribe tu behance"
                value={form.behance}
                onChange={handleChange}
              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="github" text="Github" />
              <InputSignUp
                type="text"
                name="github"
                placeholder="Escribe tu GitHub"
                value={form.github}
                onChange={handleChange}
              />
            </DivUserInput>

          </DivUserData>


        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <FormWrapper>

        <form onSubmit={handleSubmit}>
          {renderStep()}
          <DivButton>
            {currentStep > 0 && (
              <ButtonSingUp type="button" onClick={() => setCurrentStep(currentStep - 1)}>
                ATRÁS
              </ButtonSingUp>
            )}

            {currentStep < 5 ? (
              <ButtonSingUp type="button" onClick={() => setCurrentStep(currentStep + 1)}>
                SIGUIENTE
              </ButtonSingUp>
            ) : (
              <ButtonSingUp type="submit" disabled={loading}>
                {loading ? 'Registrando...' : 'ENVIAR'}
              </ButtonSingUp>
            )}
          </DivButton>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </FormWrapper>
    </Container>

  );
}
