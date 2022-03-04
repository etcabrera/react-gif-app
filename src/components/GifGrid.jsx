import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem'
// import {getGifs} from '../helpers/getGifs'

const GifGrid = ({category}) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <>
            <h3 className='animate__animated animate__slideInLeft'>{category}</h3>
            <div className='card-grid animate__animated animate__fadeIn'>
                { 
                    loading ? 
                        <p className='animate__animated animate__pulse animate__infinite'>Cargando datos...</p>
                    :
                        images.map(img => <GifGridItem
                            {...img}
                            key={img.id}
                        />)
                }
            </div>
        </>
    )
}

export default GifGrid