import React, {useState} from 'react'

const Contador = () => {

    const [numero, setNumero] = useState(0)

    const aumentar = () =>{
        setNumero(numero+1)
        if(numero >=15){
            window.alert("deja de picarme!")
        }
    }
    return (
        <div>
            <h2>Contador chido</h2>
            <p>le has picado al boton: {numero} veces</p>
            <h4>
                {
                    numero >2 ? "es mayor a 2" : "negativa"
                }
            </h4>
            <button onClick={()=> aumentar()}>
                Dame click!
            </button>
        </div>
    )
}

export default Contador
