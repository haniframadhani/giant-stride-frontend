import selectedArticleContext from "@/components/contexts/selectedArticleContext";
import openModalDeleteContext from "@/components/contexts/openModalDeleteContext"
import openFlashMessagecontext from "@/components/contexts/openFlashMessagecontext"
import { deleteArticle } from "@/components/utils/apiRequest";
import { useContext } from "react";

export default function ButtonDelete() {
  const { article } = useContext(selectedArticleContext);
  const { setShowModal } = useContext(openModalDeleteContext);
  const { setSuccessDelete, setShowFlash } = useContext(openFlashMessagecontext);
  const deletePost = async () => {
    try {
      await deleteArticle(article.id);
      setSuccessDelete(true);
    }
    catch (error) {
      setSuccessDelete(false);
    }
    setShowFlash(true);
    setShowModal(false);
  }
  return (
    <button onClick={deletePost} className="button-small bg-red-600 hover:bg-red-700 active:bg-red-800">delete</button>
  )
}