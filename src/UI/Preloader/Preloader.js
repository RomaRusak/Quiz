import styles from './Preloader.module.css'

const Preloader = () => {

    return (
        <div className={styles.loader}>
            <span>Загрузка...</span>
        </div>
    )
}

export default Preloader