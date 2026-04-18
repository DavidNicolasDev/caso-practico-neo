import { Footer } from "./components/";
import { MainNavigation } from "./components/";
import { UtilityBar } from "./components/";
import { BenefitSection } from "./components/";
import { FormSection } from "./components/";
import { Banner } from "./components/Banner";

import { Toaster } from "sonner";
import { useVariant } from "./hooks/useVariant";


export default function AppCasoPractico() {
    const variante = useVariant();
    return(
        <>
            <UtilityBar/>
            <MainNavigation/>
            <Banner variant={variante}/>
            <BenefitSection/>
            <FormSection/>
            <Footer/>
            <Toaster richColors />
        </>
    )
}