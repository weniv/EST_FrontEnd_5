import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Question from "./Components/Question";
import styles from "./App.module.css";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box
    }
`;

const App = () => {
    return (
        <>
            <GlobalStyle />
            <nav className={styles.box}>
                <ul>
                    <li id="detail" className={styles.text}>
                        상세정보
                    </li>
                    <li id="qa" className={styles.text}>
                        Q&A
                    </li>
                    <li id="review" className={styles.text}>
                        Review
                    </li>
                </ul>
            </nav>
            <Question />
        </>
    );
};

export default App;
