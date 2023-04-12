import Button from '@/components/components/button';
import InputEmail from '@/components/components/inputs/email';
import InputText from '@/components/components/inputs/text';
import TextArea from '@/components/components/inputs/textarea';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import Head from 'next/head';
import { useEffect } from 'react';
export default function Contact() {
  useEffect(() => {
    document.body.className = 'bg-gradient-to-b from-[#339CF0] from-0% via-[#004E98] via-60% to-[#020024] to-100%';
  }, []);
  return (
    <div className="mx-8 md:mx-10 mt-20 mb-16 text-white font-['Poppins']">
      <Head>
        <title>About Me | Giant Spot</title>
      </Head>
      <div id="about" className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 w-10/12 mx-auto gap-y-8 gap-x-5 scroll-m-28 snap-start">
        <h2 className="capitalize col-span-full font-bold text-3xl">about me</h2>
        <div className="aspect-square overflow-hidden rounded-lg col-span-full md:col-span-4 row-span-2">
          <img src="https://source.unsplash.com/random/300×300/?man" alt="" />
        </div>
        <div className="col-span-full md:col-span-4 lg:col-span-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed feugiat nunc, at feugiat turpis. Vivamus vel nunc et nulla placerat lacinia a vel tortor. Nulla venenatis volutpat arcu, eu rutrum turpis auctor id. Nam tincidunt nibh id tortor convallis, vitae hendrerit nisl tempus. Praesent at viverra erat. Etiam a neque ut metus condimentum commodo. Curabitur nisl eros, finibus id mauris vitae, venenatis porta lectus</p>
          <div className='mt-4 flex gap-2'>
            <UserCircleIcon className='w-6 h-6' />
            <UserCircleIcon className='w-6 h-6' />
            <UserCircleIcon className='w-6 h-6' />
          </div>
        </div>
      </div>
      <div id='contact' className='grid grid-cols-12 w-10/12 mx-auto mt-16'>
        <h2 className="capitalize col-span-full font-bold text-3xl">Contact Me</h2>
        <form className="col-span-full lg:col-span-8 grid gap-y-3 mt-5 !font-['Inter']">
          <InputText name='name' id='name' placeholder='name' />
          <InputEmail name='email' id='email' placeholder='email' />
          <TextArea placeholder='message' name='message' id='message' />
          <Button text="send message" />
        </form>
      </div>
    </div>
  )
}