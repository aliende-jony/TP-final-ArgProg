import { FechaActual } from "./FechaActual/FechaActual";
import './Header.css'

function Header({modoNocturno}){

    return(
        <div className={`header ${modoNocturno ? 'modo-nocturno' : ''}`}>
            <FechaActual/>
        </div>
    )
}

export { Header};