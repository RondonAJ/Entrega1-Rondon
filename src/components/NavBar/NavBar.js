import CartWidget from "../CartWidget/CartWidget"
import logo from './assets/logo.png'

const NavBar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" className="logo"/>
            <div className="barra">
                <button className="menu">Accesorios</button>
                <button className="menu">Comida</button>
                <button className="menu">Juguetes</button>
                <CartWidget />
            </div>
            
        </nav>
    )
}

export default NavBar