import logo from "../assets/images/logo.svg";
import sunIcon from "../assets/images/icon-sun.svg"
import moonIcon from "../assets/images/icon-moon.svg"
const Navbar = () => {
    return (
        <nav className="w-full h-20 bg-Neutral-0 p-3 rounded-2xl shadow-xl flex justify-between items-center">
            <img src={logo} className="h-full " alt="logo" />
            <div className="w-12 h-12 rounded-lg bg-Neutral-100 flex justify-center items-center cursor-pointer">
                <img src={moonIcon} alt="moon-icon" />
            </div>
        </nav>
    )
}

export default Navbar