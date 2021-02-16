import { NAV_ITEMS } from "../constants";
import styles from '../../styles/NavBar.module.css'
import { useEffect, useState } from "react";
import NavDropdown from "./NavDropdown";
import { getMockData } from "../utils/utils";

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [products, setProducts] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        getMockData()
            .then(res => {
                setProducts(res);
            })
    }, []);

    return (
        <div>
            <ul className={styles.nav}>
                {NAV_ITEMS.map((item, index) => {
                    return (
                        <li
                            key={index}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                        {item}
                        </li>
                    )
                })}
            </ul>
            {(isHovered || showDropdown) && <NavDropdown setShowDropdown={setShowDropdown} setIsHovered={setIsHovered}/>}
        </div>
    )
}

export default NavBar;


// TO DO

// think about where to store the product data, we don't want to fetch data in every component, redux?
// how will the nav drop down know which data to display? useRef to store the list item name?
