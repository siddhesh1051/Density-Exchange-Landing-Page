import { motion } from 'framer-motion';

const Bebest = () => {
  return (
    <section className='md:px-40 flex mt-40 gap-4 font-[Montserrat]'>
        <motion.div 
        initial={{ y: 20, opacity: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.6
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{once:true}}
      className='flex flex-[0.33] justify-center items-start gap-4 text-3xl font-bold text-[#212121]'>
            Be the best you 
            <br/>
            with EQ
        </motion.div>
        <motion.div 
        initial={{ y: 20, opacity: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.6
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{once:true}}
        className='flex flex-[0.33] justify-center items-start text-lg font-semibold text-[#363636]'>
            Not having your own emotions under control might be holding you back.
        </motion.div>
        <motion.div 
        initial={{ y: 20, opacity: 0 }}
        transition={{
          delay: 0.8,
          duration: 0.6
        }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{once:true}}
        className='flex flex-[0.33] justify-center items-start text-lg font-semibold text-[#363636]'>
            Additionally, not understanding those of others stops you from being parent, friend you can be.
        </motion.div>
    </section>
  )
}

export default Bebest
