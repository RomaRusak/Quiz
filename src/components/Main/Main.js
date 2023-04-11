import { Outlet } from "react-router-dom"
import styles from './Main.module.css'

const Main = () => {

    return (
        <main>
            <div
            className={styles.container}
            >
                <Outlet />
            </div>
        </main>
    )
}

export default Main