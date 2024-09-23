"use client"
export const saveUserId = (id: number) => {
    localStorage.setItem('userId', id.toString());  // Guardar ID como string
};

