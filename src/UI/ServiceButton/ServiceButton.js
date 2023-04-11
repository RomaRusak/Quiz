import styles from './ServiceButton.module.css'

const ServiceButton = (props) => {

    return (
        <button
        className={styles['service-button']}
        {...props}
        >
        {   props.children}
        </button>
    )
}

export default ServiceButton