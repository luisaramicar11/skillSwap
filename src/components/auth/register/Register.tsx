'use client';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../../app/redux/slices/authSlice';
import { toast } from 'react-toastify';
import { AppDispatch, RootState } from '../../../app/redux/store';
import InputAuth from "../../ui/inputs/InputAuth"
import Label from "../../ui/labels/LabelAuth";
import Select from "../../ui/selects/SelectRegister";
import TextArea from "../../ui/textAreas/TextAreaRegister";
import ButtonSingUp from '../../ui/buttons/ButtonSingUp';
import { handlePageChange } from '@/src/lib/utils/handlePageTheme';
import StyledNavLink from '../../ui/links/NavLinks';

//Syled
import { DivUserData, DivUserInput, DivUserTitle, DivButtonSingUp, Form } from "./RegisterStyling"
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
  const [currentStep, setCurrentStep] = useState(0); // Controla la vista actual del carrusel

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
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentStep < 6) {
      // Solo procesa el envío si estás en el último paso
      return;
    }

    //Foreach con console.log de cada campo del form
    console.log('Email:', form.email);
    console.log('Contraseña:', form.password);
    console.log('Nombre:', form.name);
    console.log('Apellido:', form.lastName);
    console.log('Descripción:', form.description);
    console.log('Puesto:', form.jobTitle);
    console.log('Comunidad:', form.category);
    console.log('Habilidades:', form.abilities);
    console.log('Fecha de nacimiento:', form.birthdate);
    console.log('URL LinkedIn:', form.urlLinkedin);
    console.log('URL Github:', form.urlGithub);
    console.log('URL Behance:', form.urlBehance);
    console.log('URL Imagen:', form.urlImage);
    console.log('Número de teléfono:', form.phoneNumber);

    // Validación básica de campos
    if (!form.email || !form.name || !form.urlImage || !form.password || !form.lastName || !form.description || !form.jobTitle || !form.category || !form.abilities){
      toast.error('Por favor, completa todos los campos.');
      return;
    }

    try {
      await dispatch(registerUser(form)).unwrap();
      toast.success('Registro exitoso!');
      window.location.reload(); 
      
    } catch (errorSubmit) {
      if (errorSubmit) {
        toast.error(`Registro fallido: ${errorSubmit}`);
      } else {
        toast.error('Registro fallido. Inténtalo de nuevo.');
      }
    }
  };

    // Convierte una fecha a formato YYYY-MM-DD
const formatDate = (date: Date | string) => {
  if (typeof date === 'string') {
    return date; // Suponiendo que ya está en formato correcto
  }
  return date.toISOString().split('T')[0]; // Extrae solo la parte de la fecha
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
            <DivUserTitle>
              <Title>Tus datos</Title>
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
            <DivUserTitle>
              <Title>Tus datos</Title>
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
            <DivUserTitle>
              <Title>Tus habilidades</Title>
            </DivUserTitle>
            <DivUserInput>
              <Label htmlFor="category" text="Selecciona una Comunidad *" />
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
              <sub>{skills.length} / 200 caracteres</sub> {/* Mostrar contador de caracteres */}
            </DivUserInput>
          </DivUserData>
        );
      case 4:
        return (
          <DivUserData>
            <DivUserTitle>
              <Title>Sobre tu experiencia</Title>
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
  
  return (
    <Container>
      <FormWrapper>
        <Form onSubmit={handleSubmit}>
          {renderStep()}
          <DivButtonLogin />
          <DivButtonSingUp>
            {currentStep > 0 && (
              <ButtonSingUp type="button" onClick={() => setCurrentStep(currentStep - 1)}>
                ATRÁS
              </ButtonSingUp>
            )}
            {currentStep <= 6 ? (
              <ButtonSingUp type="button" onClick={() => setCurrentStep(currentStep + 1)}>
                SIGUIENTE
              </ButtonSingUp>
            ) : (
              <ButtonSingUp type="submit" disabled={loading}>
                {loading ? 'Registrando...' : 'ENVIAR'}
              </ButtonSingUp>
            )}
          </DivButtonSingUp>
        </Form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </FormWrapper>
    </Container>
  );
}