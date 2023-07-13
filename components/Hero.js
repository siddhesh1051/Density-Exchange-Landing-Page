// import Star from '../public/assets/star.png'
// import Mobile from '../public/assets/mobile.png'
// import Planet from '../public/assets/Planet.png'
import AppleStore from './AppleStore'
import Image from 'next/image'



const Hero = () => {
    return (
        <section className="md:px-40 flex justify-center items-center mt-10 font-[Montserrat] ">

            <div className="bg-[#ECE8FB] w-[90%] h-full md:h-[80vh] rounded-3xl flex p-2 ">

                <div className="flex flex-col justify-center items-start flex-1 px-5 py-2">
                    <p className="text-xl text-[#323232] font-semibold ml-1">Ahead app</p>
                    <h1 className="text-6xl font-bold text-[#151515] mt-3">Master your life by mastering emotions  </h1>
                    <div className='flex items-center mt-10'>

                        <AppleStore />

                        <div className='flex flex-col justify-center items-start w-40 h-12 rounded-md ml-5 gap-1'>
                            <div className="flex justify-start">

                                <Image
                                    src='/assets/star.png'
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <Image
                                    src='/assets/star.png'
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <Image
                                    src='/assets/star.png'
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <Image
                                    src='/assets/star.png'
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                                <Image
                                    src='/assets/star.png'
                                    width={20}
                                    height={20}
                                    alt="rating"
                                />
                            </div>
                            <p className='text-xs font-semibold text-black'>100+ App Store Reviews </p>
                        </div>

                    </div>
                </div>


                <div className='flex flex-1 justify-center items-center relative px-4 py-2'>

                    <div className='absolute h-[450px] w-[450px] rounded-full  border-4 border-dashed  border-[#f6f6fd] flex justify-center items-center z-0 '>

                        <div className='absolute h-72 w-72  rounded-full bg-[#DED6F8] '>

                        </div>
                    </div>
                    <div className='z-10 absolute top-0'>
                        <Image
                            src='/assets/planet.png'
                            width={75}
                            height={75}
                            alt="planet"
                        />

                    </div>
                    <div className='z-10 absolute left-0 -rotate-45'>
                        <Image
                            src='/assets/planet.png'
                            width={75}
                            height={75}
                            alt="planet"
                        />

                    </div>
                    <div className='z-10 absolute bottom-0 rotate-45'>
                        <Image
                            src='/assets/planet.png'
                            width={75}
                            height={75}
                            alt="planet"
                        />

                    </div>
                    <div className='z-10 absolute right-0 -rotate-45'>
                        <Image
                            src='/assets/planet.png'
                            width={75}
                            height={75}
                            alt="planet"
                        />

                    </div>

                    <div className='flex justify-center items-center z-10'>
                        <Image
                            src='/assets/mobile.png'
                            width={300}
                            height={300}
                            alt="mobile"
                        />


                    </div>
                </div>


            </div>



        </section>
    )
}

export default Hero
