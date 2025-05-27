import { useContext } from "react"
import { LanguageContext } from "./LanguageProvider";

const UseLanguage = () => {
    const context = useContext(LanguageContext);

    return {
        languageData: context.languages[context.languageState],
        currentLanguage: context.languageState,
        changeLanguage: context.setLanguageState
    }
}

export default UseLanguage;