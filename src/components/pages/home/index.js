import Card from "@/components/components/card";
import Head from "next/head";
import { useEffect } from "react";
export default function Home({ blogs }) {
  useEffect(() => {
    document.body.className = 'bg-gradient-to-b from-[#339CF0] from-0% via-[#004E98] via-60% to-[#020024] to-100%';
  }, []);
  return (
    <div className="mx-8 md:mx-10 mt-20 mb-16 font-['Poppins'] text-white">
      <Head>
        <title>Home | Giant Spot</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7">
        {blogs.map((blog, i) => {
          return <Card key={i} index={i} id={blog['_id']} title={blog?.title} img={blog?.image} date={blog.uploadDate} />
        })}
      </div>
    </div >
  )
}