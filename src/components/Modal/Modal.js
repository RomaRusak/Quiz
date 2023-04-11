import styles from './Modal.module.css'
import { useContext } from 'react'
import { QuizzStartContext } from '../../pages/MoviesPage/MoviesPage'
import ServiceButton from '../../UI/ServiceButton/ServiceButton'

const Modal = ({score}) => {

    const {quizzStart} = useContext(QuizzStartContext)

    const restart = () => {
        quizzStart(false)
        setTimeout(() => {
            quizzStart(true)
        }, 0)
    }

    return (
        <div
        className={[styles.modal, styles['modal-appearance']].join(' ')}
        >
            <h2 className={styles['modal-title']}>ваш результат: <span className={styles.result}>{score}</span></h2>
            <div
            className={styles['modal-buttons-wrapper']}
            >
                <ServiceButton
                onClick={() => quizzStart(false)}
                >
                    Назад
                </ServiceButton>
                <ServiceButton
                onClick={restart}
                >
                    попробовать еще раз
                </ServiceButton>
            </div>
        </div>
    )
}

export default Modal