import { useState } from 'react';
import '../Header/Header.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export function Header() {

    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSideBar = () => {
        setShowSidebar(!showSidebar);
    }

    const closeSidebar = () => {
        setShowSidebar(false)
    }

    return (
        <div className="header">
            <button onClick={toggleSideBar} className="bi bi-list btn_icon_header"></button>
            <img className='img_header' src="src/assets/digimon_logo.png" />
            <div className={'navigation_header'} style={{marginLeft: showSidebar ? '0vw' : '-100vw', animation: showSidebar ? 'showSidebar 3s forwards' : 'showSidebar 3s backwards'}}>
                <button onClick={closeSidebar} className="bi bi-x btn_icon_header"></button>
                <a href="#">Início</a>
                <a href="#">Digimons</a>
                <a href="#">Categorias</a>
            </div>
        </div>
    )
}