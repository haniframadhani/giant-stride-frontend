import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function Card({ index }) {
  return (
    <div className="col-span-1 grid gap-5">
      <div className="aspect-square rounded-lg overflow-hidden">
        <img src="https://source.unsplash.com/random/300×300/?diving" className="object-cover w-full h-full" alt="" />
      </div>
      <>
        <p className="text-xs capitalize font-light text-black">april, 5 2023</p>
        <h3 className="text-4xl font-medium text-black">article {index}</h3>
      </>
      <div className="flex justify-end gap-2">
        <PencilSquareIcon className="w-6 h-6 cursor-pointer" />
        <TrashIcon className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  )
}