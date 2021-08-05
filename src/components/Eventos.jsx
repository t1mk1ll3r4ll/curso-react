import React, {useState} from 'react'

const Eventos = () => {
    const [texto, setTexto] = useState('Contador de eventos: 0')
    const eventoClick =()=>{
        console.log("me diste un click")
        setTexto('Contador de eventos: 1')
    }
    return (
        <div>
            <hr></hr>
            <h2>{texto}</h2>
            <button onClick={ ()=> eventoClick() }>click!</button>
        </div>
    )
}

export default Eventos
