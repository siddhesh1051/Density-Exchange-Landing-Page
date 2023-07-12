import Image from 'next/image'
import '../app/globals.css'
import Sun from '../assets/sun.png'
import Path from '../assets/path.png'
const Procedure = () => {
  return (
    <section className='md:px-24 flex mt-40 font-[Montserrat]'>
      <div className="bg-[#EEF8FE] w-full h-full  rounded-3xl flex flex-col px-28 py-16 ">
        <div className="flex flex-col justify-center items-center">
          <p className='font-semibold text-sm text-[#53553]'>Let your friends, family, and co-workers rate your skills.</p>
          <h1 className='font-bold text-3xl text-black mt-3'>Ever Wondered what others think of you?</h1>

        </div>
        <div className="flex justify-center items-center">

          <ul className="timeline mt-12 ml-40" id="timeline">
            <li className="li">
              <div className="timestamp ">
                <Image src={Sun} width={50} height={50} className='-mb-6' />

              </div>
              <div className="status">
                <h4> Answer question on your social skills</h4>
              </div>
            </li>
            <li className="li ">
              <div className="timestamp">
                
                <Image src={Sun} width={50} height={50} className='-mb-6'/>
              </div>
              <div className="status">
                <h4>Let others anonymously answer the same questions about you</h4>
              </div>
            </li>
            <li className="li">
              <div className="timestamp" id="last">
                
                <Image src={Sun} width={50} height={50} className='-mb-6'/>

              </div>
              <div className="status">
                <h4>Find out where you and others see things the same way-and where not!</h4>
              </div>
            </li>
         
          </ul>

        </div>
        <div className='flex justify-center items-center mt-4 '>
        <Image src={Path} width={500} height={500} className='p-2' />
        </div>
      </div>
    </section>
  )
}

export default Procedure
