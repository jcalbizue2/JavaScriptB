import ´Fragment} logo from './logo.svg';
import './App.css';
import MenuPrincipal from './MenuPrincipal';
import MenuSecundarios from './MenuSecundario';
import Contenido from './Contenido';
import Alerta from './Alerta';


function App() {
  return (
    <Fragment>
      <MenuPrincipal />
      <MenuSecundarios />
      <Contenido />
      <Alerta />
    </Fragment>
  );
}

export default App;
