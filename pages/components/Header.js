import HeaderSBF from "./HeaderSBF";

import styles from "../../styles/Header.module.css";

const Header = () => {
    return (
        <div className={styles["header-container"]}>
            <p className={styles["header-offer"]}>20% off</p>
            <div className={styles["header"]}>
                <img 
                    src="/stunt.jpg"
                    alt="stunt"
                    className={styles["img-stunt"]}
                />
                <HeaderSBF/>
            </div>
        </div>
    )
}

export default Header;