import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';


const Tag = () => {
    const [tag, setTag] = useState("");
    const[gif, setGif] = useState(""); 
    const[loading, setLoading] = useState(false);

    async function randomGif () {
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=Q1FSOwjDF0mGE0hYdkMKmgj4u1aGFReX&tag=${tag}`;
        const {data} = await axios.get(url);
        const sourceImage = data.data.images.downsized_large.url;
        console.log(sourceImage);
        setGif(sourceImage)
        setLoading(false);
    }

    useEffect( () => {
        randomGif();
    },[]);

    function changeHandler (event) {
        setTag(event.target.value);
    }

    function clickHandler () {
        randomGif();
    }
  return (
    <div className='w-1/2  bg-blue-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px]'>


      <h2 className='mt-[15px] text-2xl underline uppercase font-bold'>RANDOM {tag} GIF</h2>

      {loading ? (<Spinner/>) : (<img src={gif} alt="gif" width="450"/>)}

      <input 
        className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={changeHandler}
        value={tag}
      />

      <button className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[20px]"
       onClick={() => clickHandler()}>

        Generate
        
        </button>
    </div>
  )
}

export default Tag
