import { useState } from "react"
import PropTypes from 'prop-types';

//NT: Los accidentes no existen
export const AddCategory = ({onNewCategory}) => {
  const [inputValue, setInputvalue] = useState('One punch');

  const onInputChange=(event)=>{
    //console.log(event.target.value)
    setInputvalue(event.target.value)
  }

  const onSubmit=(event)=>{
    event.preventDefault()
    const input=inputValue

    //NT: Al usar categories asi, no perdemos la referencia de los datos de antes
    //NT:validacion de string<=1
    if(input.trim().length<=1) return;
    //NT:Mandandolo de forma de evento al padre
    onNewCategory(input);
    //NT:Reiniciandolo
    setInputvalue('');
  }
    return (
        //NT: Manda la info aca cuando le da enter
    <form onSubmit={onSubmit} aria-label="form">
        <input 
            type="text"
            placeholder="Buscar gif"
            value={inputValue}
            onChange={(event)=>onInputChange(event)}
            // Es lo mismo de lo de arriba onChange={onInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}