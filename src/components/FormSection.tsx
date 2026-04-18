import { FormItem } from "./index"

export const FormSection = () => {
  return (
    <section className="bg-m-blue-2 py-12 md:py-24">
        <div className="main-container space-y-8">
            <h2 className="text-white text-center text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
                Descubre si tienes una
                <span className="font-semibold block">Tarjeta de Crédito</span>
            </h2>
            <div className="space-y-6">
                <FormItem />
                <div className="space-y-4 mx-auto max-w-md text-center">
                    <p className="text-white max-w-md text-xs">Declaro conocer que esta información será utilizada únicamente para los fines de este proceso, y será tratada según lo indicado en la
                    {" "} <a href="#">
                            <span className="font-semibold underline">Política de Privacidad (Protección de Datos Personales, sección 1) .</span>
                        </a>
                    </p>
                    <p className="text-white max-w-md text-xs">Este sitio está protegido por reCAPTCHA y se aplican las 
                    {" "} <a href="#">
                            <span className="font-semibold underline">Políticas de privacidad</span> y {" "}
                            <span className="font-semibold underline">Términos del servicio de Google.</span>
                        </a>   
                    </p>
                </div>
            </div>
            
        </div>
    </section>
  )
}