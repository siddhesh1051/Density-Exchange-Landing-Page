import Image from 'next/image'
import SignSvg from '../assets/Sign.svg'

const Sign = () => {
  return (
    <section className='md:px-24 flex justify-center items-center mt-40 font-[Montserrat] '>
      <div className='flex flex-col justify-center items-center text-center gap-3' > 
        <p className='text-[#333333] text-sm font-semibold '>We take privacy seriously</p>
        <h1 className='font-bold text-3xl text-black'>Before you get started</h1>
        <p className='text-lg font-semibold text-[#535353]'>"We won't share answers with anyone (and won't ever tell 
          <br/>
        you which friends said what about you)"</p>
        <div className='flex justify-center items-center text-center'> 

        <p className='text-[#363636] text-sm font-semibold inline mt-2'>with love, </p>
        <Image src={SignSvg} width={150} height={150} className='inline ml-2' />
        </div>
        <button className='flex justify-center items-center bg-black text-[#f3f3f3] rounded-[50px] py-3 px-6 shadow-2xl mt-2'> 
        Start a test
          </button>
          <p className='text-[#808080] text-sm font-medium '>Takes only 5 minutes</p>

      </div>
      
    </section>
  )
}

export default Sign
