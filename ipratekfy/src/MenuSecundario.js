import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

import estilo from './MenuSecundario.module.css';

export default function MenuSecundario() {
    return (<div class={estilo.secundario}>
        <nav>
            <ul>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={solid('arrow-left')} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FontAwesomeIcon icon={solid('arrow-right')} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        Registrarte
                    </a>
                </li>
                <li>
                    <a href="#">
                        Iniciar sesión
                    </a>
                </li>
            </ul>
        </nav>
    </div>);
}
