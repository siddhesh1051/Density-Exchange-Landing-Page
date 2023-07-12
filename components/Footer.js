import Image from 'next/image'
import Logo from '../assets/logo.png'
import Location from '../assets/location.svg'
import Mail from '../assets/mail.svg'
import AppleStore from './AppleStore'


const Footer = () => {
  return (
    <section className="mt-24  border-t-4 w-[99vw] flex justify-center items-center " >
      <div className="md:px-40 flex  mt-24 font-[Montserrat] flex-col w-[80%] justify-center items-center gap-4"> 
      <Image
      src={Logo}
      width={55}
      height={55}
      alt="Logo"
      style={{cursor:'pointer'}}
    />
    <h1 className='font-bold text-3xl text-[#6B4DEE] '>ahead</h1>

    <div className='flex justify-center items-center my-4'>
    <div className='flex text-sm font-semibold items-center cursor-pointer'>
    <Image
      src={Location}
      width={30}
      height={30}
      alt="location"
      className='mr-2'
    />
        Augustraβe 26, 10117 Berlin
        </div>
        <div className='flex text-sm font-semibold items-center ml-12 cursor-pointer'>
        <Image
      src={Mail}
      width={30}
      height={30}
      alt="mail"
            className='mr-2'

    />
        hi@ahead-app.com
    </div>
    </div>
    <AppleStore/>
    <p className='flex text-sm font-semibold my-4 text-[#535353]'>&copy; 2022 Ahead app.All rights reserved</p>
      </div>

    </section>
  )
}

export default Footer
