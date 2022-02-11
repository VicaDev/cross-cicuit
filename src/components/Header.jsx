import { Link, Outlet } from "react-router-dom"
import '../styles/header.css'
import { Icon } from '@iconify/react';

export default function Header() {
    return(
        <header className="content-header">
            <div className="info-header">
                <div className="container">
                    <Icon className="icons" icon="fa-solid:mobile-alt" color="#08070f"  /><p className="contact-header">+34 123456789</p>
                    <Icon className="icons" icon="fontisto:email" color="08070f"  /><p className="contact-header">correo@correo.com</p>   
                    <h1 className="logo">Vica<span>Dev</span></h1>                  
                </div>  
                 
            </div>
            <nav className="navegation">
                <Link to='/index'>Inicio</Link>
                <Link to='/expenses'>Galería</Link>
                <Link to='/contact'>Contacto</Link>
            </nav>

            <div className="container2">
                <p className="paragraph-header">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Ex voluptatibus ea sapiente alias non molestiae laudantium excepturi,
                    itaque et ut deserunt a cum eveniet facilis atque animi laboriosam.
                    Facilis, deleniti?
                </p>   
            </div>
                     
            <Outlet />
        </header>        
    )
}