import { useState } from "react";
import type { VariantType } from "../types/gtm.types";

export const useVariant = (): VariantType => {
  const [variante] = useState<VariantType>(() => {

    try {
      const varianteDisponible = sessionStorage.getItem(
        "experimentVariant"
      ) as VariantType;
      if (varianteDisponible) return varianteDisponible;
    } catch (error) {
      console.error("Error al obtener la variante del experimento:", error);
    }

    // Calculo de probabilidades
    const nuevaVariante: VariantType = Math.random() < 0.5 ? "A" : "B";

    try {
      sessionStorage.setItem("experimentVariant", nuevaVariante);
      return nuevaVariante;
    } catch (error) {
      console.error("Error al obtener la variante del experimento:", error);
      return nuevaVariante;
    }
  });

  return variante!;
};