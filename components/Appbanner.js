import Image from 'next/image'
// import Boo_Circle from '../public/assets/boo.svg'
// import Right_emoji from '../public/assets/emote-right.png'


const Appbanner = () => {
    return (
        <section className="md:px-40 flex justify-center items-center mt-28 font-[Montserrat]">
            <div className="bg-[#FEF6F0] w-[85%] h-full md:h-[70vh] rounded-3xl flex p-8 ">
                <div className="flex flex-col justify-center items-start flex-[0.6] px-5 py-2 gap-2">
                    <p className="text-xl text-[#212121] font-semibold ml-1">Built out of frustration</p>
                    <h1 className="text-5xl font-bold text-[#151515] mt-3">Meet the ahead app  </h1>
                    {/* <div clasName='relative z-10'> */}



                        <Image
                            src='/assets/boo.svg'
                            width={250}
                            height={250}
                            alt="hero"
                            className=' border-spacing-8 border-[16px] rounded-full bg-[#FBE8DC] border-[#f0eeee] mt-4'
                        />

                          
                        

                        {/* <div className='h-[500px] w-[500px] bg-white rounded-full absolute'>

                        </div> */}
                    {/* </div> */}



                </div>
                <div className='flex flex-col justify-center items-center z-10 flex-[0.4] text-[#626262] font-semibold relative '>
                    <p className='mb-3  '>A personalized pocket coach that provides bite-sized,science driven tools to boost emotional intelligence.</p>
                    <p>Think of it as pocket cheerleader towards a better,more fulflling.</p>
                    <Image
                            src='/assets/emote-right.png'
                            width={150}
                            height={150}
                            alt="hero"
                            className='absolute -z-20 opacity-40 bottom-0'
                            />


                </div>
            </div>
        </section>
    )
}

export default Appbanner
