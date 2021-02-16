import styles from '../../styles/NavBar.module.css'

const NavDropdown = (props) => {
    return (
        <p 
            className={styles["nav-dropdown"]}
            onMouseEnter={() => props.setShowDropdown(true)}
            onMouseLeave={() => props.setShowDropdown(false)}
        >
        I'm being hovered
        </p>
    )
}

export default NavDropdown;