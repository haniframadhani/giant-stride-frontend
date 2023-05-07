import { deleteArticle } from "@/utils/apiRequest";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { DateTime } from "luxon";

export default function Card({ title, img, date, id }) {
  const time = DateTime.fromISO(date);
  const waktu = time.setLocale('en').toLocaleString(DateTime.DATE_FULL);
  const deletePost = async () => {
    if (confirm(`delete "${title}"?`)) {
      try {
        await deleteArticle(id);
      }
      catch (error) {
        alert(error);
      }
    }
  }
  return (
    <div className="col-span-1 flex flex-col gap-5">
      <div className="aspect-square rounded-lg overflow-hidden">
        <img src={img} className="object-cover w-full h-full" alt="" />
      </div>
      <div className="grow">
        <p className="text-xs capitalize font-light text-black">{waktu}</p>
        <h3 className="text-4xl font-medium text-black">{title}</h3>
      </div>
      <div className="flex justify-end gap-2">
        <PencilSquareIcon className="w-6 h-6 cursor-pointer" />
        <div className="cursor-pointer hover:text-red-500 active:text-red-800" onClick={(e) => {
          e.stopPropagation()
          e.preventDefault()
          deletePost()
        }}>
          <TrashIcon className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}