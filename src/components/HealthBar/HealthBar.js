import styles from './HealthBar.module.css'
import health from '../../images/service/healthIcon.png'
import { motion, AnimatePresence } from 'framer-motion'

const HealthcBar = ({healthBarState}) => {

    const healthbar = []

    for (let i = 1; i <= healthBarState; i++) {
        healthbar.push('health')
    }

    return (
        <div
        className={styles['healthBar-wrapper']}
        >   
            <AnimatePresence>
            {healthbar.map((item, index) => (
                <span
                className={styles['healthBar-icons-wrapper']}
                key={index.toString()}
                >
                   <motion.img 
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: .45}}
                    src={health} />
                </span>
            ))}
            </AnimatePresence>
        </div>
    )
}

export default HealthcBar