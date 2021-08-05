import React from 'react'

const Variables = () => {
    const saludo = "hola desde constante"
    const imagen = "https://i2.wp.com/tintachida.com/wp-content/uploads/2017/01/ganadores-concurso.jpg?resize=999%2C603&ssl=1"

    return (
        <div>
            <h2>nuevo componente { saludo }</h2>
            <img src={imagen} alt=""></img>
        </div>
    )
}

export default Variables
