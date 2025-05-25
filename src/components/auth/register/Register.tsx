'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../app/redux/slices/authSlice';
import { toast } from 'react-toastify';
import { AppDispatch, RootState } from '../../../app/redux/store';
import InputAuth from "../../ui/inputs/InputAuth";
import Label from "../../ui/labels/LabelAuth";
import Select from "../../ui/selects/SelectRegister";
import TextArea from "../../ui/textAreas/TextAreaRegister";
import ButtonAuth from '../../ui/buttons/ButtonAuth';
import { handlePageChange } from '@/src/lib/utils/handlePageTheme';
import StyledNavLink from '../../ui/links/NavLinks';
import ProgressBar from '../../progressBar/ProgressBar';

// Styled
import { DivUserData, DivUserInput, DivUserTitle, DivButtonAuth, Form } from "./RegisterStyling";
import { Title, BackLink, Arrow, FormWrapper, Container, DivButtonLogin } from '../login/LoginStyling';

export default function RegisterPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    lastName: "",
    birthdate: null,
    description: "",
    jobTitle: "",
    urlLinkedin: "",
    urlGithub: "",
    urlBehance: "",
    urlImage: "",
    phoneNumber: "",
    category: "",
    abilities: "",
  });

  const [selectedOption, setSelectedOption] = useState<string>("");
  const [skills, setSkills] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(0);
  const [hasError, setHasError] = useState(false);

  // Manejar el select
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setSelectedOption(value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Manejar el textarea
  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setSkills(value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Manejar cambios en los inputs
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setHasError(false);
  };

  // Convierte una fecha a formato YYYY-MM-DD
  const formatDate = (date: Date | string) => {
    if (typeof date === 'string') {
      return date;
    }
    return date.toISOString().split('T')[0];
  };

  // Renderizar el input actual basado en la vista
  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <BackLink onClick={() => handlePageChange('INICIO')}>
              <Arrow>&lt;</Arrow> VOLVER A <StyledNavLink href="/" label="INICIO"></StyledNavLink>
            </BackLink>
            <Title>Registro</Title>
            <Label text="Email" htmlFor='email' />
            <InputAuth
              type="email"
              id="email"
              name="email"
              placeholder="Escribe tu email..."
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <Label text="Contraseña" htmlFor='password' />
            <InputAuth
              type="password"
              id="password"
              name="password"
              placeholder="Escribe tu contraseña..."
              value={form.password}
              onChange={handleChange}
              required
              autoComplete="new-password"
            />
          </div>
        );
      case 1:
        return (
          <DivUserData>
            <ProgressBar currentStep={currentStep} />
            <DivUserTitle>
              <Title>Datos</Title>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="name" text="Nombre *" />
              <InputAuth
                type="text"
                id="name"
                name="name"
                placeholder="Escribe tu nombre..."
                value={form.name}
                onChange={handleChange}
                required
                autoComplete="given-name"
              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="lastName" text="Apellidos *" />
              <InputAuth
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Escribe tus apellidos..."
                value={form.lastName}
                onChange={handleChange}
                required
                autoComplete="family-name"
              />
            </DivUserInput>
          </DivUserData>
        );
      case 2:
        return (
          <DivUserData>
            <ProgressBar currentStep={currentStep} />
            <DivUserTitle>
              <Title>Datos</Title>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="birthdate" text="Fecha de nacimiento *" />
              <InputAuth
                type="date"
                id="birthdate"
                name="birthdate"
                placeholder="Escribe tu fecha de nacimiento..."
                value={form.birthdate ? formatDate(form.birthdate) : ""}
                onChange={handleChange}
                required
                autoComplete="birthdate"
              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="urlImage" text="Foto de Perfil *" />
              <InputAuth
                type="text"
                id="urlImage"
                name="urlImage"
                placeholder="Escribe la URL de tu Imagen..."
                value={form.urlImage}
                onChange={handleChange}
                required
                autoComplete="url-image"
              />
            </DivUserInput>
          </DivUserData>
        );
      case 3:
        return (
          <DivUserData>
            <ProgressBar currentStep={currentStep} />
            <DivUserTitle>
              <Title>Habilidades</Title>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="category" text="Comunidad *" />
              <Select
                id="category"
                value={selectedOption}
                onChange={handleSelectChange}
                ariaLabel="Select area"
                name="category"
                required
                autoComplete="category"
              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="abilities" text="Skills *" />
              <TextArea
                id="abilities"
                value={skills}
                onChange={handleTextAreaChange}
                ariaLabel="Escribe tus habilidades"
                name="abilities"
                placeholder="Escribe aquí tus habilidades separadas por coma (máx. 200 caracteres) ..."
                required
                maxLength={200}
                autoComplete="abilities"
              />
              <sub>{skills.length} / 200 caracteres</sub>
            </DivUserInput>
          </DivUserData>
        );
      case 4:
        return (
          <DivUserData>
            <ProgressBar currentStep={currentStep} />
            <DivUserTitle>
              <Title>Experiencia</Title>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="jobTitle" text="Trabajo/título *" />
              <InputAuth
                type="text"
                id="jobTitle"
                name="jobTitle"
                placeholder="Título de tu trabajo..."
                value={form.jobTitle}
                onChange={handleChange}
                required
                autoComplete="organization-title"
              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="description" text="Descripción *" />
              <InputAuth
                type="text"
                id="description"
                name="description"
                placeholder="Describe tu experiencia..."
                value={form.description}
                onChange={handleChange}
                required
                autoComplete="description"
              />
            </DivUserInput>
          </DivUserData>
        );
      case 5:
        return (
          <DivUserData>
            <ProgressBar currentStep={currentStep} />
            <DivUserTitle>
              <Title>Contacto</Title>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="phoneNumber" text="Número de Teléfono" />
              <InputAuth
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Escribe tu número de teléfono..."
                value={form.phoneNumber}
                onChange={handleChange}
                autoComplete="phone-number"
              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="urlLinkedin" text="LinkedIn" />
              <InputAuth
                type="text"
                id="urlLinkedin"
                name="urlLinkedin"
                placeholder="URL de tu Perfil de LinkedIn..."
                value={form.urlLinkedin}
                onChange={handleChange}
                autoComplete="url"
              />
            </DivUserInput>
          </DivUserData>
        );
      case 6:
        return (
          <DivUserData>
            <ProgressBar currentStep={currentStep} />
            <DivUserTitle>
              <Title>Contacto</Title>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="urlBehance" text="Behance" />
              <InputAuth
                type="text"
                id="urlBehance"
                name="urlBehance"
                placeholder="URL de tu Perfil de Behance..."
                value={form.urlBehance}
                onChange={handleChange}
                autoComplete="url"
              />
            </DivUserInput>
            <DivUserInput>
              <Label htmlFor="urlGithub" text="GitHub" />
              <InputAuth
                type="text"
                id="urlGithub"
                name="urlGithub"
                placeholder="URL de tu Perfil de GitHub..."
                value={form.urlGithub}
                onChange={handleChange}
                autoComplete="url"
              />
            </DivUserInput>
          </DivUserData>
        );
      default:
        return null;
    }
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<boolean> => {
    e.preventDefault();

    if (currentStep < 7) {
      return false;
    }

    // Validación básica de campos
    if (!form.email || !form.name || !form.urlImage || !form.password || !form.lastName || !form.description || !form.jobTitle || !form.category || !form.abilities) {
      toast.error('Por favor, completa todos los campos.');
      setCurrentStep(0);
      setHasError(true);
      return false;
    }

    try {
      await dispatch(registerUser(form)).unwrap();
      toast.success('¡Registro exitoso!');
      window.location.reload();
      return true;

    } catch (errorSubmit) {
      if (errorSubmit) {
        toast.error('Registro fallido. Inténtalo de nuevo.');
      }
      setCurrentStep(7);
      setHasError(true);
      return false;
    }
  };

  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          {renderStep()}
          <DivButtonLogin />
          <DivButtonAuth>
            {currentStep > 0 && currentStep < 7 && (
              <ButtonAuth className="backBtn" type="button" onClick={() => setCurrentStep(currentStep - 1)}>
                ATRÁS
              </ButtonAuth>
            )}
            {currentStep < 6 ? (
              <ButtonAuth type="button" onClick={() => setCurrentStep(currentStep + 1)}>
                SIGUIENTE
              </ButtonAuth>
            ) : (
              loading ? (
                <ButtonAuth type="submit" disabled={loading}>
                  Registrando...
                </ButtonAuth>
              ) : hasError ? (
                <ButtonAuth type="button" onClick={() => setCurrentStep(0)}>
                  REGRESAR
                </ButtonAuth>
              ) : (
                <ButtonAuth type="submit" onClick={() => setCurrentStep(currentStep + 1)}>
                  ENVIAR
                </ButtonAuth>
              )
            )}
          </DivButtonAuth>
        </Form>
        {hasError && currentStep == 7 && <p style={{ color: '#222222' }}>{error}</p>}
      </FormWrapper>
    </Container>
  );
}
