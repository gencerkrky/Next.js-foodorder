import Image from 'next/image'

const CampaignItem = () => {
    return (
        <div className=' bg-secondary flex rounded-md px-36'>
            <div className='flex-1'>
                <div className='relative w-72 h-96 after:content-[""] border-[5px] after:border-primary overflow-hidden '>
                    <Image src="/images/b1.jpg" alt="" layout="fill" />
                </div>
            </div>
            <div className='flex-1'>
                <div className='relative w-72 h-96 after:content-[""] border-[5px] after:border-primary overflow-hidden '>
                    <Image src="/images/b1.jpg" alt="" layout="fill" />
                </div>
            </div>
            <div className='flex-1'>
                <div className='relative w-72 h-96 after:content-[""] border-[5px] after:border-primary overflow-hidden '>
                    <Image src="/images/b1.jpg" alt="" layout="fill" />
                </div>
            </div>
        </div>
    )
}



const Campaigns = () => {
    return (
        <div className=" flex !justify-between container mx-auto py-20 gap-5">
            <CampaignItem />
        </div>
    )
}

export default Campaigns