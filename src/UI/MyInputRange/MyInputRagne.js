import styles from './MyInputRange.module.css'

const MyInputRange = ({questionsLength, ...props}) => {

    return (
        <div
        className={styles['custom-input-range-wrapper']}
        >
            <input
            className={styles['custom-input-range']}
            {...props}
            />
            <p className={styles['all-questions']}>всего вопросов будет показано в викторине: <span className={styles['questions-counter']}>{questionsLength}</span> </p>
        </div>
    )
}

export default MyInputRange