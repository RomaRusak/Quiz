import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"

import { useContext } from "react"
import { QuizzStartContext } from "../../pages/MoviesPage/MoviesPage"

import styles from './Quizz.module.css'

import QuizzImage from "../QuizImage/QuizImage"
import QuizzMyButton from "../../UI/QuizzMyButton/QuizzMyButton"
import ShowModal from "../ShowModal/ShowModal"
import updateResultMovies from '../../actions/updateResultMovies'
import HealthcBar from "../HealthBar/HealthBar"
import ServiceButton from '../../UI/ServiceButton/ServiceButton'


import { motion } from "framer-motion"

const Quiz = ({questions, bestResult}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0)

    const [healthBarState, setHealthBarState] = useState(3)

    const [showCorrectAnswer, setShowCorrectAnswer] = useState(false)

    const [activeAnswer, setActiveAnswer] = useState('')

    const [score, setScore] = useState(0)

    const [showScore, setShowScore] = useState(false)

    const dipatch = useDispatch()

    const {quizzStart} = useContext(QuizzStartContext)
    
    const handleAnswerOptionClick = (isCorrect, answer) => {

    const selectedWrongAnswer =  () => {
        
        return new Promise((resolve) => {
            setTimeout( () => {
                if (nextQustion < questions.length) {
                    setCurrentQuestion(nextQustion)
                } else {
                    setShowScore(true)
                }
                resolve()
            }, 700)
        })
        
    }

    const selectedCorrectAnswer = () => {

        return new Promise((resolve) => {
            setTimeout( () => {
                if (nextQustion < questions.length) {
                    setCurrentQuestion(nextQustion)
                } else {
                    setShowScore(true)
                }
                resolve()
            }, 600)
        })
    }
    
    setActiveAnswer(answer)

    const nextQustion = currentQuestion + 1

    if (isCorrect) {
        setScore(prevState => prevState + 1)    
        selectedCorrectAnswer()
        .then(() => {
            setActiveAnswer('')
        })
    } else {
        setShowCorrectAnswer(true)
        setHealthBarState(prevState => prevState - 1)
        selectedWrongAnswer()
        .then(() => {
            setShowCorrectAnswer(false)
            setActiveAnswer('')
            if (healthBarState <= 1) setShowScore(true)
        })
    }

    }

     useEffect(() => {
        
        if (bestResult === null || score > bestResult) {
            dipatch(updateResultMovies(score));
        }

     }, [score])

    return (
        <>  
            <motion.div
            className={[styles['quizz-active-wrapper']].join(' ')}
             initial={{opacity: 0}}
             animate={{opacity: 1}}
             transition={{duration: .45}}
            >
                <div className={styles['quizz-service-wrapper']}>
                    <HealthcBar 
                    healthBarState={healthBarState}
                    />
                   <div
                   className={styles['quizz-button-back-wrapper']}
                   >
                    <ServiceButton
                    onClick={() => quizzStart(false)}
                    >
                        Назад
                    </ServiceButton>
                   </div>
                    <div
                    className={styles['quizz-counterQustions-wrapper']}
                    >
                        Вопрос <span className={styles['quizz-currentQuestion']}> {currentQuestion + 1}</span> / {questions.length}
                    </div>
                </div>
                <QuizzImage image={questions[currentQuestion].questionImage}/>
                <div
                className={styles['quizz-qustions-wrapper']}
                >
                    <ul>
                        {questions[currentQuestion].answerOptions.map((question, index) => (
                            <QuizzMyButton
                            key={index}
                            onClick={() => {handleAnswerOptionClick(question.isCorrect, index)}}
                            index={index}
                            activeAnswer={activeAnswer}
                            isCorrect = {question.isCorrect}
                            showCorrectAnswer={showCorrectAnswer}
                            >
                                {question.answerTest}
                            </QuizzMyButton>
                        ))}
                    </ul>
                </div>
            </motion.div>
           {showScore 
           && (
            <ShowModal 
            score={score}
            />
           )}
        </>
    )
}

export default Quiz