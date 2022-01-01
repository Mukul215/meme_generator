import memesData from "../../memesData"
import { useState } from 'react'

const Generator = () => {
  const memesArray = memesData.data.memes
  const memeUrl = memesArray[Math.floor(Math.random() * memesArray.length)].url

  const [meme, setMeme] = useState(memeUrl)

  const newMeme = () => {
    setMeme(memesArray[Math.floor(Math.random() * memesArray.length)].url)
  }

  return (
    <>
      <div className="flex justify-center">
          <div className="pt-10">
            <div className="flex">
            <label className="">
              <input type="text" placeholder="Enter Text For Top" className="w-96 border pl-5 text-lg rounded-lg h-10" />
            </label>
            <label className="pl-10">
              <input type="text" placeholder="Enter Text For Bottom" className="w-96 border pl-5 text-lg rounded-lg h-10" />
            </label>
            </div>
            <button onClick={newMeme} className="w-full h-10 border pl-2 text-base rounded-lg mt-10 text-white bg-gradient-to-r from-[#4C1461] via-[#701A8E] to-[#7F07A9] hover:cursor-pointer" >
              Get a new meme image
            </button>
          </div>
      </div>
      <div className="flex justify-center pt-10">
        <img src={meme} alt="meme" className="w-[50rem]" />
      </div>
    </>
  )
}

export default Generator