import QuizzStartButton from "../../UI/QuizzStartButton/QuizzStartButton"
import MyCheckbox from "../../UI/MyCheckbox/MyCheckbox"
import MyInputRange from "../../UI/MyInputRange/MyInputRagne"
import styles from './QuizzInitial.module.css'
import { AnimatePresence } from "framer-motion"

const QuizzInitial = ({category, bestResult, setQuizzStart, checkboxesState, checkboxHandler, questionsLength, inputRangeValue, setInputRangeValue, maxInputRaveValue}) => {
    
    const checkBestResult = () => {
        if (bestResult === null) return <p className={styles['quizz-best-result']}>вы еще не играли в игру</p>
        return <p className={styles['quizz-best-result']}>ваш лучший результат в этой викторине: <span className={styles['best-result-value']}>{bestResult}</span> правильных ответов</p>
    }

    return (
        <div
        className={styles['quizz-initial']}
        >
            <h2 className={styles['quizz-initial-title']}>Текущая выбранная категория: {category}</h2>
            <div className={styles['quizz-rules-wrapper']}>
                <p className={styles['quizz-rules']}>Вам предстоит угадать по одному кадру название фильма, категории вы выбираете сами.</p>
                <p className={styles['quizz-rules']}>Но будьте внимательны! в одном раунде вам дается только 3 попытки.</p>
            </div>
            <span>{checkBestResult()}</span>
            <div className={styles['quizz-inputs-wrapper']}>
                <ul>
                    {checkboxesState.map(item => ( 
                            <MyCheckbox 
                            {...item}
                            key={item.id.toString()}
                            checkboxHandler={checkboxHandler}
                        />
                    ))}
                </ul>
            </div>
            <MyInputRange
            type="range"
            value={inputRangeValue}
            onChange={e => {setInputRangeValue(e.target.value)}}
            questionsLength={questionsLength}
            max={maxInputRaveValue}
            />
            <AnimatePresence
            initial={false}
            >
            {
                questionsLength > 0 
                && (
                    <QuizzStartButton
                    onClick={() => {setQuizzStart(true)}}
                    >
                        Старт !
                    </QuizzStartButton>
                )
            }
            </AnimatePresence>
        </div>
    )
}

export default QuizzInitial