import styles from './MyCheckbox.module.css'

const MyCheckbox = (props) => {

    return (
        <li>
            <input
            className={styles['custom-checkbox']}
            type={props.type}
            id={props.id}
            checked={props.checked}
            onChange={() => {props.checkboxHandler(props.id)}}
            />
            <label htmlFor={props.id} className={styles['custom-checkbox-label']}>
                {props.labelValue}
            </label>
        </li>
    )
}

export default MyCheckbox