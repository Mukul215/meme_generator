import logo from '../../assets/meme-face.png'

const Header = () => {
  return (
    <div className='flex h-20 items-center bg-gradient-to-r from-[#4C1461] via-[#701A8E] to-[#7F07A9]'>
      <div className='absolute left-10 flex'>
        <div>
          <img src={logo} alt='logo' className='w-10 pr-1'/>
        </div>
        <div className='pl-1'>
          <p className='text-white text-xl'>Meme Generator</p>
        </div>
      </div>
      <div className='absolute right-10'>
        <p className='text-white text-sm'>Generate your own meme</p>
      </div>
    </div>
  )
}

export default Header
