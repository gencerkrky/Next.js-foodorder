import React from 'react'
import { GiCancel } from "react-icons/gi"
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";


const Search = ({ setIsSearchModal }) => {
    return (
        <div className=' fixed top-0 left-0 position w-screen h-screen z-50 after:content-[""] 
         after:w-screen after:h-screen after:bg-white after:opacity-50 after:absolute after:top-0 
         after:left-0 grid place-content-center '>
            <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
                <div className='w-full h-full grid place-content-center '>
                    <div className=" relative z-50 md:w-[600px] w-[370px] bg-white border-2 
                    p-10 rounded-3xl ">
                        <Title addClass="text-60px text-center">ARAMA</Title>
                        <input type="text" placeholder='ARAMA' className='border w-full my-5' />
                        <div>
                            <ul>
                                
                                <li className='flex items-center justify-between p-2
                                 hover:bg-primary transition-all '>
                                    <div className='relative flex'>
                                        <Image src="/images/f1.png" alt="" width={48} height={48} />
                                    </div>
                                    <span className='font-bold'>Süper Pizza</span>
                                    <span className='font-bold'>120 TL</span>

                                </li>
                            </ul>
                            <ul>

                                <li className='flex items-center justify-between p-2
                                 hover:bg-primary transition-all '>
                                    <div className='relative flex'>
                                        <Image src="/images/f1.png" alt="" width={48} height={48} />
                                    </div>
                                    <span className='font-bold'>Büyük Pizza</span>
                                    <span className='font-bold'>100 TL</span>

                                </li>
                            </ul>
                            <ul>

                                <li className='flex items-center justify-between p-2
                                 hover:bg-primary transition-all '>
                                    <div className='relative flex'>
                                        <Image src="/images/f1.png" alt="" width={48} height={48} />
                                    </div>
                                    <span className='font-bold'>Orta Pizza</span>
                                    <span className='font-bold'>80 TL</span>

                                </li>
                            </ul>
                            <ul>

                                <li className='flex items-center justify-between p-2
                                 hover:bg-primary transition-all '>
                                    <div className='relative flex'>
                                        <Image src="/images/f1.png" alt="" width={48} height={48} />
                                    </div>
                                    <span className='font-bold'>Küçük Pizza</span>
                                    <span className='font-bold'>60 TL</span>

                                </li>
                            </ul>
                            

                            <button className=' absolute top-4 right-4 '
                            onClick={()=> setIsSearchModal(false)}
                            >
                                <GiCancel size={25} className=" transition-all "/>
                            </button>
                        </div>
                    </div>
                </div>
            </OutsideClickHandler></div>
    )
}

export default Search;