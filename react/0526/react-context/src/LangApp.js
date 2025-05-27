import React from 'react'
import { LanguageProvider } from './LanguageProvider'
import LangSelector from './Components/LangSelector'
import Content from './Components/Content'

export default function LangApp() {
    return (
        <LanguageProvider>
            <LangSelector />
            <Content />
        </LanguageProvider>
    )
}
