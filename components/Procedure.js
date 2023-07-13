import '../app/globals.css'
import Image from 'next/image'
import { motion } from 'framer-motion';

const Procedure = () => {
  return (
    <section className='md:px-24 flex mt-40 font-[Montserrat]'>
      <motion.div 
      initial={{ y: 40, opacity: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.6
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{once:true}}
      className="bg-[#D9F2FF] w-full h-full  rounded-3xl flex flex-col px-28 py-16 ">
        <motion.div 
        initial={{ y: 20, opacity: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.6
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{once:true}}
        className="flex flex-col justify-center items-center">
          <p className='font-semibold text-sm text-[#53553]'>Let your friends, family, and co-workers rate your skills.</p>
          <h1 className='font-bold text-3xl text-black mt-3'>Ever Wondered what others think of you?</h1>

        </motion.div>
        <div className="flex justify-center items-center">

          <ul className="timeline mt-12 ml-40" id="timeline">
            <li className="li">
              <motion.div 
              initial={{ scale: 0}}
              transition={{
                delay: 0.4,
                duration: 0.8,
                type:'spring'
              }}
              whileInView={{ scale: 1}}
              viewport={{once:true}}
              className="timestamp ">
                <Image src='/assets/sun.png' width={50} height={50} className='-mb-6' />

              </motion.div>
              <motion.div 
              initial={{ y: 20, opacity: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.3,
                type:'spring'
              }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{once:true}}
              className="status">
                <h4> Answer question on your social skills</h4>
              </motion.div>
            </li>
            <li className="li ">
              <motion.div 
              initial={{ scale: 0}}
              transition={{
                delay: 0.4,
                duration: 0.8,
                type:'spring'
              }}
              whileInView={{ scale: 1}}
              viewport={{once:true}}
              className="timestamp">
                
                <Image src='/assets/sun.png' width={50} height={50} className='-mb-6'/>
              </motion.div>
              <motion.div 
              initial={{ y: 20, opacity: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.3,
                type:'spring'
              }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{once:true}}
              className="status">
                <h4>Let others anonymously answer the same questions about you</h4>
              </motion.div>
            </li>
            <li className="li">
              <motion.div 
              initial={{ scale: 0}}
              transition={{
                delay: 0.4,
                duration: 0.8,
                type:'spring'
              }}
              whileInView={{ scale: 1}}
              viewport={{once:true}}
              className="timestamp" id="last">
                
                <Image src='/assets/sun.png' width={50} height={50} className='-mb-6'/>

              </motion.div>
              <motion.div 
              initial={{ y: 20, opacity: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.3,
                type:'spring'
              }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{once:true}}
              className="status">
                <h4>Find out where you and others see things the same way-and where not!</h4>
              </motion.div>
            </li>
         
          </ul>

        </div>
        <motion.div 
        initial={{ scale:0, opacity: 0 }}
        transition={{
          delay: 0.4,
          duration: 0.5,
          type:'spring',
          stiffness: 100
        }}
        whileInView={{scale:1, opacity: 1 }}
        viewport={{once:true}}
         className='flex justify-center items-center mt-4 '>
        <Image src='/assets/path.png' width={500} height={500} className='p-2' />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Procedure
