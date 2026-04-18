import { FaCheck } from "react-icons/fa"
import tarjeta1 from "../../public/img/tarjeta-1.png"
import tarjeta2 from "../../public/img/tarjeta-2.png"
import tarjeta3 from "../../public/img/tarjeta-3.png"

const cardsData = [
    {
        id: 1,
        image: tarjeta1,
        title: "Visa Clásica LATAM Pass",
        benefits: [
            <>Membresía anual S/80 <span className="font-semibold">(GRATIS si consumes S/50 al mes)</span></>,
            <><span className="font-semibold">1 Milla acumulada</span>por cada 2 USD que consumas.</>,
            <><span className="font-semibold">Campañas multiplicadoras</span> de Millas</>,
            <><span className="font-semibold">Delivery gratis</span> a donde quieras</>,
        ]
    },
    {
        id: 2,
        image: tarjeta2,
        title: "Visa Oro LATAM Pass",
        benefits: [
            <>Membresía anual S/170<span className="font-semibold">(GRATIS si consumes S/1 al mes)</span></>,
            <><span className="font-semibold">1 Milla acumulada </span>por cada 1.5 USD que consumas</>,
            <><span className="font-semibold">Campañas multiplicadoras</span> de Millas</>,
            <><span className="font-semibold">Delivery gratis</span> a donde quieras</>,
        ]
    },
    {
        id: 3,
        image: tarjeta3,
        title: "Visa Platinum LATAM Pass",
        benefits: [
            <><span className="font-semibold">3,000 Millas</span>de bienvenida</>,
            <>Membresía anual S/350<span className="font-semibold"> (GRATIS si consumes S/1,200 al mes)</span></>,
            <><span className="font-semibold">1 Milla acumulada</span>por cada 1 USD que consumas</>,
            <><span className="font-semibold">Delivery gratis</span> a donde quieras</>,
        ]
    }
];

export const BenefitSection = () => {
  return (
    <section className="main-container py-16 xl:py-24">
        <h2 className="text-center text-2xl xl:text-4xl text-m-blue">
            <span className="font-semibold">Elige la Tarjeta de Crédito</span> que va contigo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
            {cardsData.map((card) => (
                <article key={card.id} className="group shadow-xl p-6 rounded-xl border border-m-gray-light/20 min-h-[400px] transition-all duration-300 hover:shadow-2xl">
                    <div className="flex flex-col h-full">
                        <div className="space-y-6">
                            <img className="w-full max-w-[138px] shadow-lg mx-auto block transition-transform duration-500 group-hover:scale-120" src={card.image} alt={card.title} />
                            <h3 className="text-m-blue text-2xl font-semibold mb-6 text-center">{card.title}</h3>
                        </div>
                        <ul className="space-y-3 mb-12 text-sm md:text-base">
                            {card.benefits.map((benefit, index) => (
                                <li key={index} className="flex gap-2 items-start">
                                    <FaCheck className="text-m-blue mt-1.5 flex-shrink-0 font-light" size={12} />
                                    <p className="text-m-gray">{benefit}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-auto">
                            <a href="#" className="flex gap-2 w-full md:w-auto justify-center items-center font-semibold text-white bg-m-orange rounded-full px-6 py-2.5 text-sm">
                                Pídela aquí
                            </a>
                            <a href="#" className="flex gap-2 w-full md:w-auto justify-center items-center font-semibold text-m-orange">
                                Ver detalle
                            </a>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    </section>
  )
}