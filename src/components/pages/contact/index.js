import Button from '@/components/components/button';
import InputEmail from '@/components/components/inputs/email';
import InputText from '@/components/components/inputs/text';
import TextArea from '@/components/components/inputs/textarea';
import Head from 'next/head';
import { useEffect } from 'react';
import profile from '@/components/asset/image/profile.webp';
import Image from 'next/image'

export default function Contact() {
  useEffect(() => {
    document.body.className = 'bg-gradient-to-b from-[#339CF0] from-0% via-[#004E98] via-60% to-[#020024] to-100%';
  }, []);
  const style = {
    objectFit: 'cover',
    position: 'relative',
    height: '100%',
    width: '100%',
  }
  return (
    <div className="mx-8 md:mx-10 mt-20 mb-16 text-white font-['Poppins']">
      <Head>
        <title>About Me | Giant Spot</title>
      </Head>
      <div id="about" className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 w-12/12 md:w-10/12 md:mx-auto gap-y-8 gap-x-5 scroll-m-28 snap-start">
        <h2 className="capitalize col-span-full font-bold text-3xl">about me</h2>
        <div className="aspect-square overflow-hidden rounded-lg col-span-full md:col-span-4 row-span-2">
          <Image src={profile.src} width='100' height='100' style={style} />
        </div>
        <div className="col-span-full md:col-span-4 lg:col-span-8 text-justify flex flex-col gap-2 selection:bg-orange-400">
          <p>Welcome to the wonderful underwater world! I'm Ethan Robinson, a dedicated and enthusiastic scuba driver in exploring the beauty of seas and ocean. Since my youth, I have been felt in love with the beauty of underwater world and since then, I never stop following the call of the sea.</p>
          <p>With over 17 years of experience in diving, I have been exploring various destinations around the world. From colorful coral reefs to ancient shipwrecks harboring historical secrets, every time I dive, I feel the wonder and indescribable life in the water</p>
          <p>This blog site is a place where I share stories, experiences, and knowledge about the underwater world. I believe that by sharing the beauty and the importance of keeping sustainability of sea ecosystem, we can be the part of solution for preserving the fragile underwater environment</p>
          <p>Join with me in unforgetable exploration through writing, images, videos that will take you closer to the hidden beauty of the ocean. Let's explore together and protect the priceless treasure the of underwater world. Thank you for visiting my blog, and let's feel the magic of underwater world together.</p>
          <div className='flex gap-2'>
            <div className='fill-white w-6 h-6'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0s256 114.6 256 256v32c0 53-43 96-96 96-29.3 0-55.6-13.2-73.2-33.9-22.8 21-53.3 33.9-86.8 33.9-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1 5.7-5 13.1-8.1 21.3-8.1 17.7 0 32 14.3 32 32v112c0 17.7 14.3 32 32 32s32-14.3 32-32v-32c0-106-86-192-192-192zm64 192a64 64 0 10-128 0 64 64 0 10128 0z"></path>
              </svg>
            </div>
            <div className='fill-white w-6 h-6'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </div>
            <div className='fill-white w-6 h-6'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div id='contact' className='grid grid-cols-12 w-12/12 md:w-10/12 mx-auto mt-16'>
        <h2 className="capitalize col-span-full font-bold text-3xl">Contact Me</h2>
        <div className="col-span-full lg:col-span-8 grid gap-y-3 mt-5 !font-['Inter']">
          <InputText name='name' id='name' placeholder='name' />
          <InputEmail name='email' id='email' placeholder='email' />
          <TextArea placeholder='message' name='message' id='message' />
          <Button text="send message" />
        </div>
      </div>
    </div>
  )
}