export default function Card({ index }) {
  return (
    <div className={`${index <= 1 ? "col-span-1 md:col-span-2 lg:col-span-3 md:relative md:rounded-lg md:overflow-hidden" : "col-span-1"} grid gap-5`}>
      <div className={`${index <= 1 ? "aspect-square md:aspect-video" : "aspect-square"} rounded-lg overflow-hidden`}>
        <img src="https://source.unsplash.com/random/300×300/?diving" className="object-cover w-full h-full" alt="" />
      </div>
      <div className={`${index <= 1 ? "md:absolute md:bottom-0 md:pl-8 md:py-8 md:left-0 md:w-1/2 md:max-h-full md:bg-gradient-to-r md:from-dull-blue/60" : ""}`}>
        <p className={`${index <= 1 ? "text-base" : "text-xs"} capitalize font-light text-light-gray`}>april, 5 2023</p>
        <h3 className={`${index <= 1 ? "text-5xl" : "text-4xl"} font-medium`}>article {index}</h3>
      </div>
    </div>
  )
}