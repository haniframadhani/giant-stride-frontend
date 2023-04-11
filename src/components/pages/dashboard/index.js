import Button from "@/components/components/button"
import Head from "next/head"

export default function Dashboard() {
  return (
    <div className="bg-white w-screen h-screen">
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="mx-8 md:mx-10 pt-20 pb-16">
        <h1 className="capitalize text-4xl font-medium">dashboard</h1>
        <Button text="Create New Post" />
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