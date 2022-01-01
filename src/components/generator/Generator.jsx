const Generator = () => {
  return (
    <div className="flex justify-center h-screen">
        <form className="pt-10">
          <div className="flex">
          <label className="">
            <input type="text" placeholder="Enter Text For Top" className="w-96 border pl-5 text-lg rounded-lg h-10" />
          </label>
          <label className="pl-10">
            <input type="text" placeholder="Enter Text For Bottom" className="w-96 border pl-5 text-lg rounded-lg h-10" />
          </label>
          </div>
          <button className="w-full h-10 border pl-2 text-base rounded-lg mt-10 text-white bg-gradient-to-r from-[#4C1461] via-[#701A8E] to-[#7F07A9] hover:cursor-pointer" >
            Get a new meme image
          </button>
        </form>
    </div>
  )
}

export default Generator