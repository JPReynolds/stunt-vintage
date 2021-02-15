import { NAV_ITEMS } from "../constants";
import styles from '../../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <ul className={styles.nav}>
            {NAV_ITEMS.map((item, index) => {
                return <li key={index}>{item}</li>
            })}
        </ul>
    )
}

export default NavBar;