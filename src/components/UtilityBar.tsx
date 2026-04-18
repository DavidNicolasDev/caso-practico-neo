export const UtilityBar = () => {
  return (
    <section className="hidden xl:block w-full bg-m-cintillo py-1.5">
        <div className="main-container flex justify-between font-semibold text-m-gray text-sm">
            <div className="flex gap-12">
                <a href="#">Personas</a>
                <a href="#">PyMES</a>
                <a href="#">Empresas</a>
            </div>
            <div className="flex gap-6">
                <p>
                    <a href="">Español </a> <span>/</span>
                    <a href=""> Quechua</a>
                </p>
            </div>
        </div>
    </section>
  )
}
