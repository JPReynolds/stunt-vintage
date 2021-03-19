import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { useState } from "react";

import styles from "../../styles/Header.module.css";

const HeaderSBF = () => {
    const [input, setInput] = useState("");
    const [showSearch, setShowSearch] = useState(false);

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    return (
        <div className={styles["header-SBF"]}>
            <div>
                <input value={input} placeholder="Search" onChange={(e) => handleChange(e)}/>
                <SearchIcon onClick={() => setShowSearch(true)}/>
            </div>
            <FavoriteBorderOutlinedIcon/>
            <ShoppingCartOutlinedIcon/>
        </div>
    )
}

export default HeaderSBF;