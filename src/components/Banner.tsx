import icoLink from "../../public/svg/ico-link.svg";
import bannerImage from "../../public/img/banner-image-v2.png";
import bannerImageMobile from "../../public/img/banner-image-mobile.png";
import type { VariantType } from "../types/gtm.types";
import { useGTM } from "../hooks/useGtm";
import { useEffect } from "react";
import { GTM_EVENTS } from "../constants/gtm-events";

interface BannerProps {
    variant: VariantType
}

export const Banner = ({ variant }: BannerProps) => {
  const { trackEvent } = useGTM();

  useEffect(() => {
    trackEvent({
      event: 'ExperimentoBannerView',
      experimentId: GTM_EVENTS.EXPERIMENT_ID,
      action: GTM_EVENTS.ACTIONS.VIEW_BANNER,
      variant,
      label: GTM_EVENTS.LABELS[variant]
    });
  }, [variant, trackEvent]);

  const handleCTAClick = () => {
    trackEvent({
      event: 'ExperimentoBannerClick',
      experimentId: GTM_EVENTS.EXPERIMENT_ID,
      action: GTM_EVENTS.ACTIONS.CLICK_CTA,
      variant,
      label: GTM_EVENTS.LABELS[variant]
    });
  }

  const bgColor = variant === 'A' ? 'bg-blue-200' : 'bg-orange-200';


  return (
    <section className={`${bgColor} w-full`}>
      <div className="main-container flex flex-col md:flex-row items-center justify-between">
        <div className="space-y-4 lg:space-y-6 py-6 xl:py-14 my-auto">
          <div className="text-m-blue space-y-3 text-center md:text-left">
            <p className="font-semibold text-xs">TARJETAS</p>
            <h1 className="text-3xl xl:text-5xl font-semibold">Gana hasta 200,000 MILLAS</h1>
            <p>Solo pide tu Tarjeta LATAM Pass.</p>
          </div>
          <div className="flex justify-center md:justify-start">
            <a
              onClick={handleCTAClick}
              className="space-x-2 items-center gap-2 bg-m-orange text-white px-6 py-2.5 text-sm rounded-full font-semibold"
              href="#"
            >   
              <p className="inline-block">{GTM_EVENTS.LABELS[variant]}</p>
              <img className="inline-block" src={icoLink} alt="ico-link" />
            </a>
          </div>
        </div>

        <img className="w-[50%] hidden md:block obj ect-cover h-full" src={bannerImage} alt="hero-image" />
        <img className="w-[50%] md:hidden object-cover h-full" src={bannerImageMobile} alt="hero-image" />
      </div>
    </section>
  );
};