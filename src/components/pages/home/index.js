import Card from "@/components/components/card"
export default function Home() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
  return (
    <div className="mx-8 md:mx-10 mt-20 mb-16 font-['Poppins']">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-7 text-white">
        {cards.map((card, i) => {
          return <Card key={i} index={card} />
        })}
      </div>
    </div>
  )
}