import React, {Component} from 'react';
import '../assets/css/MiComponente.css'


class MiComponente extends Component{

    render(){
        let receta = {
            nombre: 'Pizza',
            ingredientes: ['Tomate', 'Queso', 'Jamon'],
            calorias: 400
        }
        return(
            <div>
                <h1 className="titulo">Hola, soy el componente llamado: MiComponente</h1>
                <h2>Probando el componente</h2>
                <h3>{'Receta: ' + receta.nombre}</h3>
                <p>{'Calorias: ' + receta.calorias}</p>
                <ol>{receta.ingredientes.map((ingrediente, i )=> {
                    return (
                        <li key={i}>
                            {ingrediente}
                        </li>
                    )
                })
                }</ol>
            </div>
            
        )
    }

}

export default MiComponente;