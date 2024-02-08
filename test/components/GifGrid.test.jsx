const { render, screen } = require("@testing-library/react")
const { GifGrid } = require("../../src/components/GifGrid")
const { useFetchGifs } = require("../../src/hooks/useFetchGifs")
//Nt: Con esto se puede hacer un hook de terceros o nuestros
jest.mock('../../src/hooks/useFetchGifs')

describe('Prueba de GifGrid', () => {
    const category='One punch'
    test('1. Debe de mostrar el loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'))
        expect(screen.getByText(category))
    })
    test('2.Debe de mostrar items cuando se cargan las imagenes', () => {
        //Como ya hay datos creamos el dato  de retorno que es el  gif y de ahi lo que debe de devolver
        const gifs=[
            {
                id:'ABC',
                title:'Saitama',
                url:'https:///calvoconcapa.com'
            },
            {
                id:'DEF',
                title:'Goku',
                url:'https:///insecto.com'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category}/>)
        //screen.debug()
        //Probamos que hayan dos datos de pruebas (saitama y goku)
        expect(screen.getAllByRole('img').length).toBe(2)
    })
})