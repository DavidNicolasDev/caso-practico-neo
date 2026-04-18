import { Footer } from "./components/";
import { MainNavigation } from "./components/";
import { UtilityBar } from "./components/";
import { BenefitSection } from "./components/";
import { FormSection } from "./components/";


export default function AppCasoPractico() {
    return(
        <>
            <UtilityBar/>
            <MainNavigation/>
            <BenefitSection/>
            <FormSection/>
            <Footer/>
        </>
    )
}