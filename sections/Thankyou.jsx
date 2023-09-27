import Image from "next/image"
import Link from "next/link"



const Thankyou = () => {
  return (
    <div className="h-[60vh] md:h-[85vh] lg:pb-[110px] lg:pt-32 flex flex-col justify-center items-center bg-[#f3f7f8] pt-40">

        <div>
        <Image
            src="/thankyou.jpg"
            width={800}
            height={600}
            alt="Thank You"
           
            className=" lg:w-[1100px] lg:h-auto  rounded-lg z-10"
          />
        </div>
   <div className=" flex flex-col justify-center items-center z-20 lg:mt-[-80px]">    
 <p className=" flex justify-center items-center text-center px-8 text-xl lg:text-3xl font-bold">Thank you for reaching out. We will get in touch with you soon.</p>
 <Link href={'/'}>
<div className=" mb-32 mt-14">
<button className=" bg-pink-600 py-2 px-6 text-white font-bold rounded-md"> Back to Home</button>
</div>
</Link>
</div> 
    </div>
  )
}

export default Thankyou