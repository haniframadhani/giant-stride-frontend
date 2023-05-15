import useLockBodyScroll from "@/components/utils/useLockBodyScroll";
import ButtonCancel from "../../button/cancel";
import ButtonDelete from "../../button/delete";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import selectedArticleContext from "@/components/contexts/selectedArticleContext";
import { useContext, useRef } from "react";
import useOnClickOutside from "@/components/utils/useOnClickOutside";
import openModalDeleteContext from "@/components/contexts/openModalDeleteContext"

export default function ModalDelete() {
  const modalRef = useRef(null);
  const { article } = useContext(selectedArticleContext);
  const { setShowModal } = useContext(openModalDeleteContext);
  useLockBodyScroll();
  useOnClickOutside(modalRef, () => setShowModal(false));

  return (
    <div className="bg-overlay">
      <div ref={modalRef} className="bg-white grid grid-row-3 justify-items-center items-center gap-y-5 py-8 px-12 rounded-lg w-full md:w-fit md:max-w-[80%]">
        <div className="text-red-600 flex items-center gap-4">
          <ExclamationTriangleIcon className="w-8 h-8" />
          <h2 className="uppercase text-3xl font-bold font-['inter']">delete?</h2>
        </div>
        <p className="text-xl font-['inter']">&quot;{article.title}&quot;</p>
        <div className="flex gap-4">
          <ButtonCancel />
          <ButtonDelete />
        </div>
      </div>
    </div>
  )
}