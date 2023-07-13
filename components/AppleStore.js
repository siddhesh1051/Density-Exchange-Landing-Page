import Apple from '../public/assets/apple.svg'
import Image from 'next/image'


const AppleStore = () => {
  return (
    <div className='flex justify-center items-center w-40 h-12 bg-black rounded-md '>
    <Image
        src={Apple}
        width={35}
        height={35}
        alt="Logo"
    />
    <div className='flex flex-col flex-[0.9] text-white '>
        <p className='text-xs font-medium text-center'>Download on the</p>
        <p className='text-lg text-center font-semibold'>App Store</p>

    </div>

</div>
  )
}

export default AppleStore
