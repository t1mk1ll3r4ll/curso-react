import React, { useState } from 'react'

const Lista = () => {
    const estadoIniciar =[
        {id:1, texto:"tareas 1"},
        {id:2, texto:"tareas 2"},
        {id:3, texto:"tareas 3"}

    ]
    const agregarElemento = ()=>{
        setLista([...lista,{id:4, texto:"tarea 4"}])
    }
    const [lista, setLista] = useState(estadoIniciar)
    return (
        <div>
            <h1>Listas</h1>
            {
                lista.map((item, index) => (
                    <h4 key={item.id} >{item.texto}</h4>
                ))
            }
            <button onClick={()=> agregarElemento()}> agregar </button>
        </div>
    )
}

export default Lista
