import Image from "next/image";
import { useState } from "react";

import styles from "../../styles/Header.module.css";

const HeaderSBF = () => {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className={styles["header-SBF"]}>
            <input value={input} onChange={(e) => handleChange(e)}/>
            <Image
                src="/favourite.png"
                alt="favourites"
                height={20}
                width={20}
            />
            <Image
                src="/cart.png"
                alt="cart"
                height={20}
                width={20}
            />
        </div>
    )
}

export default HeaderSBF;