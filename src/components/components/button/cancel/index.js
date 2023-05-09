import openModalDeleteContext from "@/components/contexts/openModalDeleteContext"
import { useContext } from "react";

export default function ButtonCancel() {
  const { setShowModal } = useContext(openModalDeleteContext);
  return (
    <button className="button-small bg-gray-600 hover:bg-gray-700 active:bg-gray-800" onClick={() => setShowModal(false)}>cancel</button>
  )
}