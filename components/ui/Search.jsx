import React from 'react'
import { GiCancel } from "react-icons/gi"
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";


const Search = ({ setIsSearchModal }) => {
    return (
        <div className=' fixed top-0 left-0 position w-screen h-screen z-50 after:content-[""] 
         after:w-screen after:h-screen after:bg-white after:absolute after:top-0 
         after:left-0 grid place-content-center '>
            <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
                <div className='w-full h-full grid place-content-center '>
                    <div className=" relative z-50 w-[600px] h-[600px] bg-white border-2 
                    p-5 ">
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