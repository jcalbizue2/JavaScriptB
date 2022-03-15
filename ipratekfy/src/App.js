import MenuPrincipal from './MenuPrincipal';
import MenuSecundario from './MenuSecundario';
import Contenido from './Contenido';
import Alerta from './Alerta';

import estilo from './App.module.css';

function App() {
  return (
    <div class={estilo.contenido}>
      <MenuPrincipal />
      <MenuSecundario />
      <Contenido />
      <Alerta />
    </div>
  );
}

export default App;
