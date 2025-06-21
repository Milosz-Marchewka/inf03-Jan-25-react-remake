import { Link } from "react-router-dom";

function Menu(){
    return (
        <div className='menu'>
            <Link to="main" className="menu-link">Strona główna</Link>
            <Link to="cost" className="menu-link">Koszt rat</Link>
            <Link to="/trigger-404-hi!" className="menu-link">Nasz partner</Link>
        </div>
    )
}
export default Menu;