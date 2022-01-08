import memesData from "../../memesData"
import { useState } from 'react'

const Generator = () => {
  let memesArray = memesData.data.memes
  let memeUrl = memesArray[Math.floor(Math.random() * memesArray.length)].url

  const [formData, setFormData] = useState({
    topText: "",
    bottomText: ""
  })

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    image: memeUrl,
  })
  const [memeImages, setMemeImages] = useState(memesData.data.memes)


  console.log(memeImages)

  const newMeme = () => {
    memesArray = memeImages
    memeUrl = memesArray[Math.floor(Math.random() * memesArray.length)].url 
    setMeme(prevState => ({
      ...prevState,
      image: memeUrl
    }))
  }

  const handleChange = (e) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }
  

  return (
    <>
      <div className="flex justify-center">
          <div className="pt-10">
            <div className="flex">
            <label className="">
              <input type="text" placeholder="Enter Text For Top" className="w-96 border pl-5 text-lg rounded-lg h-10" onChange={handleChange} name="topText" value={formData.topText}/>
            </label>
            <label className="pl-10">
              <input type="text" placeholder="Enter Text For Bottom" className="w-96 border pl-5 text-lg rounded-lg h-10" onChange={handleChange}name="bottomText" value={formData.bottomText}/>
            </label>
            </div>
            <button onClick={newMeme} className="w-full h-12 border pl-2 text-base rounded-lg mt-10 text-white bg-gradient-to-r from-[#4C1461] via-[#701A8E] to-[#7F07A9] hover:cursor-pointer" >
              Get a new meme image
            </button>
          </div>
      </div>
      <div className="flex justify-center pt-10">
        <img src={meme.image} alt="meme" className="w-[50rem] rounded-lg fixed" />
        <div className="row-span-2 z-10 justify-center">
          <p className="text-black text-5xl">{formData.topText}</p>
          <p className="text-black text-5xl my-96">{formData.bottomText}</p>
        </div>
      </div>
    </>
  )
}

export default Generator