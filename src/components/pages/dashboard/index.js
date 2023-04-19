import Button from "@/components/components/button"
import Card from "@/components/components/card/dashboardcard"
import Head from "next/head"
import Link from "next/link"

export default function Dashboard({ blogs }) {
  return (
    <div className="mx-8 md:mx-10 pt-20 pb-16 font-['Poppins']">
      <Head>
        <title>Dashboard | Giant Spot</title>
      </Head>
      <div className="col-span-full flex justify-between">
        <h1 className="capitalize text-4xl font-medium">dashboard</h1>
        <Link href="write">
          <Button text="Create New Post" iconPlus={true} />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 mt-10">
        {blogs.map((blog, i) => {
          return <Card key={i} id={blog['_id']} title={blog?.title} img={blog?.image} date={blog.uploadDate} />
        })}
      </div>
    </div>
  )
}

Dashboard.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}