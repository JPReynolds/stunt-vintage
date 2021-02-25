import { useSelector } from "react-redux";
import styles from '../../styles/NavBar.module.css'

const NavDropdown = (props) => {

    const items = useSelector((state) => {
        const navItem = props.navItem.current.toLowerCase();
        return state.productsReducer[navItem];
    });

    return (
        <div 
            className={styles["nav-dropdown"]}
            onMouseEnter={() => props.setShowDropdown(true)}
            onMouseLeave={() => props.setShowDropdown(false)}
        >
            <ul>
                {items.map((brand, index) => {
                    return <li key={index}>{brand}</li>
                })}
            </ul>
        </div>
    )
}

export default NavDropdown;