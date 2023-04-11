import styles from './QuizzImage.module.css'

const QuizzImage = ({image}) => {

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

export default QuizzImage