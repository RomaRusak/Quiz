import styles from './QuizImage.module.css'

const QuizImage = ({image}) => {

    return (
        <div
        className={styles['quizz-question-imageWrapper']}
        >
            <img
            src={image}
            />
        </div>
    )
}

export default QuizImage