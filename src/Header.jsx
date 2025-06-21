import banner from "./img/klawiatura_final.jpg";
import Menu from "./Menu";

function Header(){
    return (
        <div className="header">
            <img src={banner} alt="Kursy komputerowe"/>
            <Menu/>
        </div>
    )
}
export default Header;