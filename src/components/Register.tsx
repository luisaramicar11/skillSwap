'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../app/redux/slices/authSlice'; 
import { toast } from 'react-toastify';
import { AppDispatch, RootState } from '../app/redux/store'; 

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

  const [currentStep, setCurrentStep] = useState(0); // Controla la vista actual del carrusel

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
            <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Escribe tu contraseña"
            value={form.password}
            onChange={handleChange}
            required
          />
            </div> 
        );
      case 1:
        return (
            <div>
             <h1>user data</h1>    
            <input
            type="text"
            name="name"
            placeholder="Escribe tu nombre"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Escribe tus apellidos"
            value={form.lastName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="age"
            placeholder="Escribe tu edad"
            value={form.age}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Escribe la url de tu imagen"
            value={form.image}
            onChange={handleChange}
          />
            </div>
          
        );
      case 2:
        return (
          <div>
            <input
            type="text"
            name="jobTitle"
            placeholder="Nombre de tu trabajo"
            value={form.jobTitle}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Describe tu experiencia "
            value={form.description}
            onChange={handleChange}
            required
          />
          </div>
        );
      case 3:
        return (
            <div>
                <input
            type="text"
            name="linkedIn"
            placeholder="Escribe tu linkedIn"
            value={form.linkedIn}
            onChange={handleChange}
          />
          <input
            type="text"
            name="behance"
            placeholder="Escribe tu behance"
            value={form.behance}
            onChange={handleChange}
          />
          <input
            type="text"
            name="github"
            placeholder="Escribe tu github"
            value={form.github}
            onChange={handleChange}
            />
            </div>
          
          
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h1>Registro</h1>
      <form onSubmit={handleSubmit}>
        {renderStep()}  
        <div>
          {currentStep > 0 && (
            <button type="button" onClick={() => setCurrentStep(currentStep - 1)}>
              Atrás
            </button>
          )}

          {currentStep < 3 ? (
            <button type="button" onClick={() => setCurrentStep(currentStep + 1)}>
              Siguiente
            </button>
          ) : (
            <button type="submit" disabled={loading}>
              {loading ? 'Registrando...' : 'Registrar'}
            </button>
          )}
        </div>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
