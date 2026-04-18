import { IoMdLock, IoMdMenu } from "react-icons/io";
import logoBcpSmall from "../../public/svg/logo-bcp-small.svg";
import logoBcp from '../../public/svg/logo-bcp.svg'
import icoSearch from "../../public/svg/ico-search.svg";
import icoMoney from "../../public/svg/ico-money.svg";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "./../shared/Navigation";

const linksMenu = [
    {
        title: "Productos",
        links: [
            "Cuentas",
            "Tarjetas",
            "Prestamos",
            "Seguros",
            "Inversiones",
            "Tipos de Cambio",
            "Servicios"
        ],
    },
    {
        title: "Soluciones Digitales",
        links: [
            "Banca Móvil",
            "Banca por Internet",
            "Yape",
            "Tarjeta de Crédito iO",
            "Pago Automático",
            "Otras soluciones"
        ],
    },
    {
        title: "Beneficios",
        links: [
            "Programa de Lealtad Qore",
            "Mundo Cuenta Sueldo QORE",
            "Mundo Tarjetas de Crédito",
            "Cuotas Sin Intereses",
            "Mi Espacio BCP"
        ],
    },
    {
        title: "Ayuda y Educacion",
        links: [
            "Centro de Ayuda",
            "Cursos Virtuales ABC",
            "Facilidades de Pago",
            "Alerta fraude",
            "Agenda una cita",
            "Citas Virtuales",
            "Ubícanos",
            "Procesos pendientes"
        ]
    },
]

export const MainNavigation = () => {
  return (
    <section className="w-full shadow-lg">
      <div className="main-container py-2.5 flex justify-between">
        <div className="flex items-center gap-3">
          <img className="lg:hidden" src={logoBcpSmall} alt="logo-bcp" />
          <img className="hidden lg:block" src={logoBcp} alt="logo-bcp" />
          <div className="hidden xl:block">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="space-x-1">
                {linksMenu.map((link) => (
                  <NavigationMenuItem key={link.title}>
                  <NavigationMenuTrigger className="rounded-full font-medium px-2.5">
                    {link.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-1 w-[280px]">
                      {link.links.map((link) => (
                        <li key={link}>
                          <NavigationMenuLink asChild>
                            <a className="p-4" href="#">{link}</a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a className="order-3 xl:order-1 flex gap-2 items-center font-semibold text-m-gray xl:px-2.5 xl:py-1.5 hover:bg-m-gray-light/30 rounded-full transition-all duration-300"
            href="#"
          >
            <img src={icoSearch} alt="ico-search" />
            <p className="text-[15px] hidden xl:block">Buscar</p>
          </a>

          <a className="order-1 flex items-center gap-2 px-3 py-2 text-sm font-semibold text-m-gray  border border-m-gray-light rounded-full"
            href="#"
          >
            <img className="hidden xl:block" src={icoMoney} alt="ico-money" />
            <p className="lg:text-m-gray-lighter text-center">Abrir cuenta</p>
          </a>

          <a className="order-2 flex items-center gap-1 px-3 py-2 text-sm bg-m-orange font-semibold text-white border border-transparent rounded-full"
            href="#"
          >
            <IoMdLock size={16} />
            <p>
              Banca <span className="hidden xl:inline">por internet</span>
            </p>
          </a>

          <IoMdMenu size={32} className="xl:hidden order-3 text-m-gray" />

        </div>
      </div>
    </section>
  );
};