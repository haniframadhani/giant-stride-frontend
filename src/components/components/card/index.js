export default function Card({ index }) {
  return (
    <div className={`${index <= 1 ? "col-span-3 relative" : "col-span-1"} grid auto-row-flow gap-5`}>
      <div className={`${index <= 1 ? "aspect-video" : "aspect-square"}`}>
        <img src="https://plchldr.co/i/381x381?&bg=D9D9D9&fc=797979" className="object-cover w-full h-full rounded-lg " alt="" />
      </div>
      <div className={`${index <= 1 ? "absolute bottom-0 pl-8 py-8 left-0 w-1/2 max-h-full" : ""}`}>
        <p className={`${index <= 1 ? "text-base" : ""} text-xs capitalize font-light text-light-gray`}>april, 5 2023</p>
        <h3 className={`${index <= 1 ? "text-5xl" : ""} text-4xl font-medium`}>article {index}</h3>
      </div>
    </div>
  )
}