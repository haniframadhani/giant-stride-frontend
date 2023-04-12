import Button from "@/components/components/button"
import Card from "@/components/components/card/dashboardcard"
import Head from "next/head"
import { useEffect } from "react"

export default function Dashboard() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
  return (
    <div className="mx-8 md:mx-10 pt-20 pb-16 font-['Poppins']">
      <Head>
        <title>Dashboard | Giant Spot</title>
      </Head>
      <div className="col-span-full flex justify-between">
        <h1 className="capitalize text-4xl font-medium">dashboard</h1>
        <Button text="Create New Post" iconPlus={true} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 mt-10">
        {cards.map((card, i) => {
          return <Card key={i} index={card} />
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