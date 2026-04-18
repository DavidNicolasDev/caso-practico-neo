import { useState } from "react";
import { toast } from "sonner"


export const FormItem = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(formData.name === "" || formData.email === "") {
      toast.warning("Por favor, completa todos los campos", {
        duration: 2000,
      });
      return;
    }
    
    toast.success("Formulario enviado");
    setFormData({
      name: "",
      email: "",
    });
  } 

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-md mx-auto">
      <input 
            className="bg-white py-2 px-4 outline-none rounded-md border-none placeholder:text-sm" 
            title="Nombre" 
            name="name"
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Nombre"
      />

      <input 
            className="bg-white py-2 px-4 outline-none rounded-md border-none placeholder:text-sm" 
            title="Correo" 
            name="email"
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Correo" 
      />
      
      <button type="submit" className="bg-m-orange cursor-pointer hover:bg-m-orange/80 font-semibold text-white py-2 px-6 rounded-md border-none">Enviar</button>
    </form>
  )
}
 