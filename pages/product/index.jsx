import Image from 'next/image'
import React from 'react'
import Title from '../../components/ui/Title'

const index = () => {
    return (
        <div className="flex items-center h-screen gap-20 py-20 flex-wrap">
            <div className="relative md:flex-1 w-[80%] h-[80%] mx-20">
                <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain" />
            </div>
            <div className='md:flex-1 md:text-start text-center'>
                <Title addClass="text-6xl ">Süperos</Title>
                <span className='text-primary text-2xl font-bold underline underline-offset-1 inline-block my-3'>20 ₺</span>
                <p className='text-sm my-4 md:pr-24'> 

                    Pizzalarımızda kullandığımız sosis, sucuk, küp sucuk, pepperoni, New York pepperoni, jambon ürünleri piliç ve/veya hindi etinden,döner eti kıymadan üretilmiştir.
                </p>
                <div >
                    <h4 className='text-xl font-bold'>Pizza Boyutu</h4>
                    <div className=' flex items-center gap-x-20 md:justify-start justify-center'>
                        <div className='relative w-8 h-8 '>
                            <Image src="/images/size.png" alt="" layout='fill' />
                            <span className='absolute top-0 -right-9 text-xs bg-primary rounded-full px-[5px] font-medium'>Small</span>
                        </div>
                        <div className='relative w-12 h-12' >
                            <Image src="/images/size.png" alt="" layout='fill' />
                            <span className='absolute top-0 -right-12 text-xs bg-primary rounded-full px-[5px] font-medium'>Medium</span>
                        </div>
                        <div className='relative w-16 h-16'>
                            <Image src="/images/size.png" alt="" layout='fill' />
                            <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-[5px] font-medium'>Large</span>
                        </div>
                    </div>
                </div>
                <div className=' flex gap-x-4 my-6 md:justify-start justify-center'>
                    <label className='flex items-center gap-x-1' >
                        <input type='checkbox' className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>Jampon</span>
                    </label><label className='flex items-center gap-x-1' >
                        <input type='checkbox' className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>Sucuk</span>
                    </label><label className='flex items-center gap-x-1' >
                        <input type='checkbox' className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>Sosis</span>
                    </label><label className='flex items-center gap-x-1' >
                        <input type='checkbox' className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>Salam</span>
                    </label><label className='flex items-center gap-x-1' >
                        <input type='checkbox' className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>Domates</span>
                    </label><label className='flex items-center gap-x-1' >
                        <input type='checkbox' className='w-5 h-5 accent-primary' />
                        <span className='text-sm font-semibold'>Kekik</span>
                    </label>
                </div>
                <button className='btn-primary mt-6'>Sepete Ekle</button>
            </div>
        </div>
    )
}

export default index