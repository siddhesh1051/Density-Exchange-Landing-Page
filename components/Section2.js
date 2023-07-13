import { motion } from 'framer-motion';
const Section2 = () => {
  return (
    <section className='md:px-40 flex items-start justify-between font-[Montserrat]  mt-32 h-28 w-[90%]'>
      <motion.div 
      initial={{ y: 20, opacity: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.6
      }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{once:true}}
      className='flex justify-start items-start flex-[0.35] text-3xl font-bold'>
        EQ beats IQ

      </motion.div>
      <div className='flex justify-between items-start flex-[0.65] gap-2 font-semibold'>
            <motion.div 
            initial={{ y: 20, opacity: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.6
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true}}
            className='flex items-center justify-start text-[#646363]'>
                People with high emotional intelligence(EQ) live more fulfilled lives. They tend to be happierand have healthier relationships.

                </motion.div>
            <motion.div 
            initial={{ y: 20, opacity: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.6
            }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once:true}}
            className='flex items-center justify-start text-[#646363]'>
                They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $ 29k a year

                </motion.div>

            
      </div>
    </section>
  )
}

export default Section2
