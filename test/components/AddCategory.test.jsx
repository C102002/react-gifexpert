import { fireEvent, render,screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas en AddCategory', () => {
    const name='Saitama'
    test('1.Debe de cambiar el valor en la caja de eventos', () => { 
        render(<AddCategory onNewCategory={()=>{}}/>)
        //NT: Se busca el input y se espera que cambie el valor
        const input = screen.getByRole('textbox');
        //Hacemos el evento al cam
        fireEvent.input(input,{target:{value:name}})
        //Comprobamos el cambio sea 'Saitama'
        expect(input.value).toBe(name);
        //screen.debug();
     })

     test('2. Se logro enviar los datos con onNewCategory si el imput tiene un valor', () => { 
        const inputValue='Saitama'
        //Funcion de jest
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox');
        //NT: Antes la prueba falla porque falta el area label
        const form = screen.getByRole('form');
        
        fireEvent.input(input,{target:{value:inputValue}})
        fireEvent.submit(form);
        
        //NT:Comprobamos que se limpio porque ya hizo el submint
        expect(input.value).toBe('');
        //NT: Si la funcion fue llamada
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //NT: Si la funcion fue llamada con saitama
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
      })

      test('3. No debe llamar al onNewCategory si esta vacio', () => { 
        const inputValue='a'
        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input(input,{target:{value:inputValue}})
        fireEvent.submit(form);
        
        //NT:Comprobamos que sigue siendo 'a'
        expect(input.value).toBe(inputValue);
        //NT: Si la funcion fue llamada esta mala
        expect(onNewCategory).toHaveBeenCalledTimes(0);
      })
})