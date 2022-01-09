// import memesData from "../../memesData"
import { useState, useEffect } from 'react'

const Generator = () => {
  
  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
    .then(response => response.json())
    .then(data => setMemeImages(data))
  })

  // let memesArray = memesData.data.memes
  // let memeUrl = memesArray[Math.floor(Math.random() * memesArray.length)].url
  const newMeme = () => {
    const memesArray = memeImages.data.memes
    const memeUrl = memesArray[Math.floor(Math.random() * memesArray.length)].url 
    setMeme(prevState => ({
      ...prevState,
      image: memeUrl
    }))
  }

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: "http://i.imgflip.com/1bij.jpg" 
  })
  const [memeImages, setMemeImages] = useState([])

  console.log(memeImages)


  const handleChange = (e) => {
    const { name, value } = e.target
    setMeme(prevFormData => {
      return {
        ...prevFormData,
        [name]: value
      }
    })
  }

  
  return (
    <>
      <div className="flex justify-center">
          <div className="pt-10">
            <div className="flex">
            <label className="">
              <input type="text" placeholder="Enter Text For Top" className="w-96 border pl-5 text-lg rounded-lg h-10" onChange={handleChange} name="topText" value={meme.topText}/>
            </label>
            <label className="pl-10">
              <input type="text" placeholder="Enter Text For Bottom" className="w-96 border pl-5 text-lg rounded-lg h-10" onChange={handleChange} name="bottomText" value={meme.bottomText}/>
            </label>
            </div>
            <button onClick={newMeme} className="w-full h-12 border pl-2 text-base rounded-lg mt-10 text-white bg-gradient-to-r from-[#4C1461] via-[#701A8E] to-[#7F07A9] hover:cursor-pointer" >
              Get a new meme image
            </button>
          </div>
      </div>
      <div className="flex relative justify-center pt-10">
        <img src={meme.image} alt="meme" className="w-[50rem] rounded-lg fixed" />
        <div className="row-span-2 z-10 justify-center">
          <p className="text-white text-5xl py-10">{meme.topText}</p>
          <p className="text-white text-5xl my-96">{meme.bottomText}</p>
        </div>
      </div>
    </>
  )
}

export default Generator