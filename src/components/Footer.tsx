export const Footer = () => {
  return (
    <footer className="main-container">
        <div className=" grid grid-cols-1 gap-y-12 md:grid-cols-2  lg:grid-cols-4 xl:grid-cols-6 gap-6 py-12 md:py-24  text-m-gray">
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">SOBRE EL BCP</h3>
                <ul className="text-sm space-y-2.5">
                    <li>Nuestra historia y principios</li>
                    <li>Información para inversionistas BCP</li>
                    <li>Responsabilidad Social BCP</li>
                    <li>Centro de Innovación</li>
                    <li>Política de cookies</li>
                    <li>Política de privacidad</li>
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">AYUDA</h3>
                <ul className="text-sm space-y-2.5">
                    <li>Cancela tu producto</li>
                    <li>Cancela tu seguro</li>
                    <li>Solicitud de Ajustes Razonables</li>
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">LEGALES</h3>
                <ul className="text-sm space-y-2.5">
                    <li>Tasas y tarifas</li>
                    <li>Transparencia de información</li>
                    <li>Declaración del Beneficiario final</li>
                    <li>¿Cómo protegemos tus datos?</li>
                    <li>Accesibilidad</li>
                </ul>
            </div>
            <div className="space-y-4">
                <h3 className="text-lg font-semibold">NOVEDADES</h3>
                <ul className="text-sm space-y-2.5">
                    <li>Ganadores de sorteos y promociones 2025 </li>
                </ul>
            </div>
            <div className="space-y-4 sm:col-span-2">
                <h3 className="font-semibold text-m-blue text-2xl">Descarga el App Banca Móvil BCP</h3>
                <ul className="text-sm space-y-2.5">
                    <li className="text-base">Escanea el código con tu celular y descárgala al instante</li>
                </ul>
            </div>
        </div>
        <div className="border-t pb-6  border-m-gray/20"></div>
        <p className="text-xs max-w-md pb-6 text-m-gray-lighter text-center md:text-left mx-auto">© 2025 BCP | Todos los derechos reservados. Sede Central, Centenario 156, La Molina 15026,  Lima, Perú. BANCO DE CREDITO DEL PERU S.A - RUC 20100047218</p>
    </footer>
  )
}