import React from 'react'
import UseLanguage from '../UseLanguage'

export default function Content() {

    const { languageData } = UseLanguage();

    return (
        <div>
            <h2>{languageData.title}</h2>
            <p>{languageData.greeting}</p>
            <p>{languageData.description}</p>
        </div>
    )
}
