import styles from './QuizzStartButton.module.css'
import { motion } from 'framer-motion'

const QuizzStartButton = (props) => {

    return (
        <motion.button
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: .45}}
        exit={{opacity: 0}}
        className={styles['quizz-start-button']}
        {...props}
        >
            {props.children}
        </motion.button>
    )

}

export default QuizzStartButton