import { GifExpertApp } from '../src/GifExpertApp'
const { render, screen, fireEvent, getByText, getAllByAltText } = require("@testing-library/react")

describe('Pruebas en GifExpertApp', () => { 

    const category='Dragon Ball'
    test('1. Revisar el snapshot', () => { 
    const container=render(<GifExpertApp/>)
    screen.debug();
    expect(container).toMatchSnapshot();})
    
    test('2.La pagina debe de tener la categoria Dargon Ball', () => {
        const container=render(<GifExpertApp/>)
        const input = screen.getByRole('textbox');
        //Hacemos el evento al cam
        fireEvent.input(input,{target:{value:category}})
        //Comprobamos el cambio sea 'Dragon Ball'
        expect(input.value).toBe(category);
        screen.debug();
    })

    test('3.La pagina debe de tener Dragon Ball en el input', () => {
        const container=render(<GifExpertApp/>)
        const input = screen.getByRole('textbox');
        //Hacemos el evento al cam
        fireEvent.input(input,{target:{value:category}})
        //Comprobamos el cambio sea 'Dragon Ball'
        expect(input.value).toBe(category);
        screen.debug();
    })

    test('4.La pagina debe de agregar Dragon Ball a las categorias', () => {
        const container=render(<GifExpertApp/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Hacemos el evento al cam
        fireEvent.input(input,{target:{value:category}})
        //Comprobamos el cambio sea 'Dragon Ball'
        fireEvent.submit(form);
        screen.debug();
        expect(screen.getByText(category)).toBeTruthy();
    })

    test('5.La pagina NO debe de agregar Dragon Ball a las categorias, una vez insertado Dragon Ball por primera vez', () => {
        const container=render(<GifExpertApp/>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        //Agregamos Dargon Ball 1 vez
        fireEvent.input(input,{target:{value:category}})
        fireEvent.submit(form);

        //Agregamos Dragon Ball 2 veces
        fireEvent.input(input,{target:{value:category}})
        fireEvent.submit(form);

        //screen.debug();
        //Comprobamos que se haya insertado 1 vez nada mas
        expect(screen.getAllByText(category).length).toBe(1)
    })
 })