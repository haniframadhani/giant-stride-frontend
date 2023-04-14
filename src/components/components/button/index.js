import { PlusIcon } from "@heroicons/react/24/outline";

export default function Button({ text, iconPlus, clickEvent }) {
  return (
    <button onClick={clickEvent} className="capitalize w-fit rounded-lg cursor-pointer py-4 px-8 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 font-['Inter'] text-white text-base flex gap-2">
      {text}
      {iconPlus ? <PlusIcon className="w-6 h-6" /> : ''}
    </button>
  )
}