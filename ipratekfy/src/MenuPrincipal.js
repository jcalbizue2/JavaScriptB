import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import estilo from './MenuPrincipal.module.css';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

export default function MenuPrincipal() {
    return (
        <div class={estilo.principal}>
            <h1>
                <FontAwesomeIcon icon={solid('music')} />&nbsp;
                Ipartekify
            </h1>

            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={solid('home')} />&nbsp;
                            Inicio
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={solid('search')} />&nbsp;
                            Buscar
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={solid('book')} />&nbsp;
                            Tu biblioteca
                        </a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={solid('plus')} />&nbsp;
                            Crear lista
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FontAwesomeIcon icon={solid('heart')} />&nbsp;
                            Canciones que te gustan
                        </a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            Cookies
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Privacidad
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}