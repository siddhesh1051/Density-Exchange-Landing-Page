import Image from 'next/image'
// import Logo from '../public/assets/logo.png'

const Nav = () => {
  return (
    <>
      <nav className='md:px-64 flex justify-between items-center h-16 w-full pt-2 ' >
      <Image
      src='/assets/logo.png'
      width={55}
      height={55}
      alt="Logo"
      style={{cursor:'pointer'}}
    />

    <div className='flex justify-between items-center'>
      <a className='mr-10 font-semibold text-[#5e5e5e]' href="./">Emotions</a>
      <a className='mr-10 font-semibold text-[#5e5e5e]' href="./">Manifesto</a>
      <a className='mr-10 font-semibold text-[#5e5e5e]' href="./">Self-Awareness Test</a>
      <a className='mr-10 font-semibold text-[#5e5e5e]' href="./">Work With Us</a>

    </div>

    <d className='flex justify-center items-center bg-[#212020] rounded-[50px] text-[#e6e4e4] px-5 py-3 font-medium cursor-pointer'>
      Download app
    </d>

    

      </nav>
    </>
  )
}

export default Nav
