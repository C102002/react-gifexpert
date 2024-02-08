import { render,screen } from "@testing-library/react"
import {GifItem} from "../../src/components/GifItem"



describe('Prueba de GifItem', () => {
    const title='Saitama'
    const url ='https://one-punch.com/saitama.jpg'

    test('1.Prueba de los props (titulo obligatorio y url obligatorio)', () => { 
        const {container}= render (<GifItem title={title} url={url} />)
    })
    test('2. Prueba del snapshot', () => {
        const {container}= render (<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
     })

     test('3. Debe mostrar la imagen con el URL y el ALT indicado', () => {

        render (<GifItem title={title} url={url}/>)
        //NT: Es lo mismo pero mas ordenado
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const {src,alt} =screen.getByRole('img');
        console.log(src)
        expect(src).toBe(url);
        expect(alt).toBe(title);
     })

     test('4.El titulo este mostrado como  un texto', () => {
        render (<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
      })
 })