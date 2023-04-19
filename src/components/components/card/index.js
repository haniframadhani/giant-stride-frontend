import { DateTime } from 'luxon';
import Link from 'next/link';

export default function Card({ index, title, img, date, id }) {
  const time = DateTime.fromISO(date);
  const waktu = time.setLocale('en').toLocaleString(DateTime.DATE_FULL);
  return (
    <div className={`${index < 1 ? "col-span-1 md:col-span-2 lg:col-span-3 md:relative md:rounded-lg md:overflow-hidden" : "col-span-1"}`}>
      <Link href={`blog/${id}`} className='flex flex-col gap-5 items-stretch'>
        <div className={`${index < 1 ? "aspect-square md:aspect-video" : "aspect-square"} rounded-lg overflow-hidden`}>
          <img src={img} className="object-cover w-full h-full" alt="" />
        </div>
        <div className={`${index < 1 ? "md:absolute md:bottom-0 md:pl-8 md:py-8 md:left-0 md:w-1/2 md:max-h-full md:bg-gradient-to-r md:from-dull-blue/60" : "self-stretch"}`}>
          <p className={`${index < 1 ? "text-base" : "text-xs"} capitalize font-light text-light-gray`}>{waktu}</p>
          <h3 className={`${index < 1 ? "text-5xl" : "text-4xl"} font-medium`}>{title}</h3>
        </div>
      </Link>
    </div>
  )
}