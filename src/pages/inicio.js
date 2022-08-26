import Descripcion from "../components/descripcion"
import Galeria from "../components/galeria"
import Regalo from "../components/regalo"
import Reloj from "../components/reloj"


function Inicio()
{
    return(
        <div id="page">
          <Reloj />
          <Descripcion />
          <Regalo />
          <Galeria />
        </div>
    )
}

export default Inicio