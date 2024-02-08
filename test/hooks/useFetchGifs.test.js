import { renderHook,waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en useFetchGifs', () => {
    const category='One Punch Man'
    test('1. Debe de regresar el estado inicial', () => {
        const {result}=renderHook(()=>useFetchGifs(category))
        const {images,isLoading}=result.current
        //Como es el estado inicial no tiene imagnes y esta cargando (isloading=true)
        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();
    })
    test('1. Debe de regresar las imagenes y el isloading es false', async() => {
        const {result}=renderHook(()=>useFetchGifs(category))
        //NT:Aca esperamos que mande la promesa pero dentro del jest 
        await waitFor(
            ()=> expect(result.current.images.length).toBeGreaterThan(0)
        )
        const {images,isLoading}=result.current
        //Como es el estado inicial no tiene imagnes y esta cargando (isloading=true)
        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).not.toBeTruthy();
    })
    //OJO: Evaluar el hook es simplemente evaluar el comportamiento del hook
})