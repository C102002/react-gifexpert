import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types'

export const GifGrid = ({category}) => {

    const {images,isLoading}=useFetchGifs(category);
    //Nt: como era antes sin el custom hook
    // const [images, setImages] = useState([])

    // const getImages= async()=>{
    //     const newImages=await getGifs(category);
    //     setImages(newImages)
    // }

    // //NT: UseEfect es para hacer efectos secundarios, el [] es el que hace que se haga solamente una vez
    // useEffect(()=>{
    //     getGifs(category)
    //     getImages();
    // },[])

   
    getGifs(category);

  return (
    <>
    <h3>{category}</h3>
    {
        //NT: isLoading si es true se renderiza el h2
        isLoading && (<h2>Cargando...</h2>)
    }
    <div className='card-grid'>
        {
            images.map((image)=>(
                <GifItem 
                key={image.id}
                title={image.title}
                url={image.url}
                //NT: se puede hacer asi {... image} para sacar todas las props
                />
            ))
        }
    </div>
    </>
  )
}

GifGrid.propTypes ={
    category: PropTypes.string.isRequired
}