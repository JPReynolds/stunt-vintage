import { useRef, useState } from "react";
import NavDropdown from "./NavDropdown";
import { NAV_ITEMS } from "../constants";
import styles from '../../styles/NavBar.module.css'

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    const selectedNavItem = useRef("");

    return (
        <div>
            <ul className={styles.nav}>
                {NAV_ITEMS.map((item, index) => {
                    return (
                        <li
                            key={index}
                            onMouseEnter={() => {
                                selectedNavItem.current = item;
                                setIsHovered(true);
                            }}
                            onMouseLeave={() => setIsHovered(false)}>
                        {item}
                        </li>
                    )
                })}
            </ul>
            {(isHovered || showDropdown) && <NavDropdown navItem={selectedNavItem} setShowDropdown={setShowDropdown} setIsHovered={setIsHovered}/>}
        </div>
    )
}

export default NavBar;
