import React, { useState } from 'react'

const Formulario = () => {
    const [listaFruta, setListaFruta] = useState([])
    const [fruta, setFruta] = useState('')
    const [descripcion, setDescripcion] = useState('')

    const guardarDatos = (e) =>{
        e.preventDefault()
        if(!fruta.trim()){
            window.alert("el campo fruta esta vacio")
            return
        }
        if(!descripcion.trim()){
            window.alert("el campo descripcione esta vacio")
            return
        }
        console.log(fruta + descripcion)

        e.target.reset()
        setListaFruta([...listaFruta,{fruta: fruta, descripcion:descripcion}])
        setFruta('')
        setDescripcion('')
    }
    return (
        <div>
            <h2>
                Formulario
            </h2>
            <form onSubmit={guardarDatos}>
                <input
                 type="text"
                 placeholder="Ingrese Fruta"
                 className="form-control mb-2"
                 onChange={e => setFruta(e.target.value)}
                />
                <input type="text"
                placeholder="Ingrese Descripcion" 
                className="form-control mb-2"
                onChange={e=>setDescripcion(e.target.value)}
                />
                <button type="submit" className="btn btn-primary btn-block mb-2">Agregar</button>
            </form>
            <h3>Lista de frutas </h3>
            <ul>
            {
                listaFruta.map((item, index) =>
                <li key = {index}>
                    Fruta {item.fruta} - Descripcion {item.descripcion}
                </li>
                )
            }
            </ul>
        </div>
    )
}

export default Formulario
