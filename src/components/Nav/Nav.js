import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

    const getLinkStatus = ({isActive}) => isActive ? [styles['nav-link'], styles['nav-link-active']].join(' ') : styles['nav-link']

    return (
        <nav>
            <ul
            className={styles['nav-list']}
            >
                  <li>
                    <NavLink
                    className={getLinkStatus}
                    to={'/'}
                    >
                        Главная
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className={getLinkStatus}
                    to={'movies'}
                    >
                        Кино
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className={getLinkStatus}
                    to={'series'}
                    >
                        Сериалы
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className={getLinkStatus}
                    to={'games'}
                    >
                        Игры
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav