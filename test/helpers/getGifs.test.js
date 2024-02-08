import { getGifs } from "../../src/helpers/getGifs"

describe('Prueba de getGifs', () => { 
    test('1.Usar la funcion y  devuelva un array de gifs', async() => {
        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBeGreaterThan(0);
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String),
        })
    })
 })