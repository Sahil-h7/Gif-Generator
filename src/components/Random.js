import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';


const Random = () => {

    const[gif, setGif] = useState(""); 
    const[loading, setLoading] = useState(false);

    async function randomGif () {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=Q1FSOwjDF0mGE0hYdkMKmgj4u1aGFReX&tag=&rating=g`;
        const {data} = await axios.get(url);
        const sourceImage = data.data.images.downsized_large.url;
        setGif(sourceImage);
        setLoading(false);
    }

    useEffect( () => {
        randomGif()
    },[]);

    function clickHandler () {
        randomGif();
    }
  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>
 
      <h2 className='mt-[15px] text-2xl underline uppercase font-bold'>A RANDOM GIF</h2>
      {loading ? (<Spinner/>) : (<img src={gif} alt="gif" width="450"/>)}

      <button className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
       onClick={() => clickHandler()}>
        
        Generate
        
        </button>
    </div>
  )
}

export default Random
