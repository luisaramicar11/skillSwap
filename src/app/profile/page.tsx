'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export default function ProfilePage() {
  const router = useRouter();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('authToken');

      if (!token) {
        toast.error('No estás autenticado. Por favor, inicia sesión.');
        router.push('/auth');
        return;
      }

      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/auth/profile', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();

          // Redirigir según el rol del usuario
          if (data.role === 'admin') {
            router.push('/admin'); // Ruta para admins
          } else if (data.role === 'customer') {
            router.push('/customer'); // Ruta para clientes
          } else {
            toast.error('Rol no reconocido.');
            router.push('/login'); // Redirigir al login si el rol no es reconocido
          }
        } else {
          toast.error('No se pudo cargar el perfil. Inténtalo de nuevo.');
          router.push('/login'); // Redirigir al login si falla la carga del perfil
        }
      } catch (error) {
        toast.error('Error al cargar el perfil.');
        console.error('Error:', error);
        router.push('/login'); // Redirigir al login en caso de error
      }
    };

    fetchProfile();
  }, [router]);

  // No se renderiza nada ya que solo se realiza redirección
  return null;
}