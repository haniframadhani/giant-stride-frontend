import Head from "next/head";
import { useEffect } from "react";
import { DateTime } from 'luxon';

export default function Detail({ blog }) {
  const time = DateTime.fromISO(blog?.uploadDate);
  const waktu = time.setLocale('en').toLocaleString(DateTime.DATE_FULL);
  useEffect(() => {
    document.body.className = 'bg-gradient-to-b from-[#339CF0] from-0% via-[#004E98] via-60% to-[#020024] to-100%';
  }, []);
  return (
    <div className="mx-8 md:mx-10 mt-20 mb-16 text-center text-white font-['Poppins']">
      <Head>
        <title>{blog?.title} | Giant Spot</title>
      </Head>
      <div className="mx-auto md:w-10/12 aspect-video overflow-hidden rounded-lg">
        <img className="object-cover w-full h-full" src={blog?.image} alt="" />
      </div>
      <div className="md:w-4/6 lg:w-8/12 mx-auto selection:bg-orange-400">
        <h1 className="text-3xl md:text-4xl lg:text-6xl mt-10 font-medium">{blog?.title}</h1>
        <p className="text-sm text-light-gray mt-2 mb-8 text-['Inter'] font-normal">{waktu}</p>
        <div className="text-start grid gap-6 text-base" dangerouslySetInnerHTML={{ __html: blog?.body }}></div>
      </div>
    </div>
  )
}