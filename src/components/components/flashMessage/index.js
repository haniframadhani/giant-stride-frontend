import useLockBodyScroll from "@/components/utils/useLockBodyScroll";
import useOnClickOutside from "@/components/utils/useOnClickOutside";
import openFlashMessagecontext from "@/components/contexts/openFlashMessagecontext";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { useContext, useRef } from "react";

export default function Flash({ handleGetAllArticle }) {
  const flashRef = useRef(null);
  const { setShowFlash, successDelete } = useContext(openFlashMessagecontext);
  useLockBodyScroll();
  useOnClickOutside(flashRef, () => setShowFlash(false));

  setTimeout(() => {
    setShowFlash(false);
    handleGetAllArticle();
  }, 3000)

  return (
    <div className="bg-overlay">
      <div ref={flashRef} className="bg-white flex items-center gap-2 rounded-sm px-8 py-2 capitalize">
        {successDelete ? <CheckCircleIcon className="w-6 h-6 text-dark-blue" /> : <XCircleIcon className="w-6 h-6 text-red-600" />}
        <p className="text-xl">{successDelete ? 'successfuly deleted' : 'failed deleted'}</p>
      </div>
    </div>
  )
}