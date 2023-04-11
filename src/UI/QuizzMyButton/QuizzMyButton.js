import { useState } from 'react'
import styles from './QuizzMyButton.module.css'

const QuizzMyButton = ({showCorrectAnswer, isCorrect, activeAnswer, index ,...props}) => {

    const customButton = showCorrectAnswer
    ? (
        <li
        {...props}
        className={
            [
            isCorrect ? styles['correct'] : '', 
            styles['quizz-answer'],
            activeAnswer == index && styles['falseAnswer']
        ].join(' ')
        }
        >
            {props.children}
        </li>
    )
    : (
        <li
        {...props}
        className={
            [
                styles['quizz-answer'],
                activeAnswer === index && styles['trueAnswer']
            ].join(' ')}
        >
            {props.children}
        </li>
    )

    return customButton
}

export default QuizzMyButton