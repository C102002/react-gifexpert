import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
        const [images, setImages] = useState([])
        //NT:Para ver el cargo de la imagen
        const [isLoading,setIsLoading]= useState(true);

    const getImages= async()=>{
        const newImages=await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    //NT: UseEfect es para hacer efectos secundarios, el [] es el que hace que se haga solamente una vez
    useEffect(()=>{
        getGifs(category)
        getImages();
    },[])
    return {
    images:images,
    isLoading: isLoading
    }
}
