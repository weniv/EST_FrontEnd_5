import UseLanguage from "../UseLanguage"


const LangSelector = () => {
    const { languageData, currentLanguage, changeLanguage } = UseLanguage();


    return (
        <div>
            <h2>{languageData.languageSelector}</h2>

            <button disabled={currentLanguage === 'ko'} onClick={() => changeLanguage('ko')}>한국어</button>
            <button disabled={currentLanguage === 'en'} onClick={() => changeLanguage('en')}>영어</button>
            <button disabled={currentLanguage === 'ja'} onClick={() => changeLanguage('ja')}>일본어</button>
        </div>
    )
}

export default LangSelector;