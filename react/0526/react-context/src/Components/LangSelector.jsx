import UseLanguage from "../UseLanguage"


const LangSelector = () => {
    const { languageData, currentLanguage, changeLanguage } = UseLanguage();


    return (
        <div>
            <h2>{languageData.languageSelector}</h2>

            <button onClick={() => changeLanguage('ko')}>한국어</button>
            <button onClick={() => changeLanguage('en')}>영어</button>
            <button onClick={() => changeLanguage('ja')}>일본어</button>
        </div>
    )
}

export default LangSelector;