import React from 'react';
import Logo from '../../assets/imagens/logos-sexflix-e-netflix.jpg'
import './Menu.css';
import Button from '../Button';
//import ButtonLink from './components/ButtonLink';

function Menu() {

    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="PauloFlix Show!" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo2
            </Button>
        </nav>

    );

}

export default Menu;