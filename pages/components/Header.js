import Image from "next/image";
import NavBar from "./NavBar";

const Header = () => {
    return (
        <div>
            <Image 
                src="/stunt.jpg"
                alt="stunt"
                width={450}
                height={150}
            />
            <NavBar/>
        </div>
    )
}

export default Header;