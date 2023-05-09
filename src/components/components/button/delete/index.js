import selectedArticleContext from "@/components/contexts/selectedArticleContext";
import openModalDeleteContext from "@/components/contexts/openModalDeleteContext"
import { deleteArticle } from "@/components/utils/apiRequest";
import { useContext } from "react";

export default function ButtonDelete() {
  const { article } = useContext(selectedArticleContext);
  const { setShowModal } = useContext(openModalDeleteContext);
  const deletePost = async () => {
    try {
      await deleteArticle(article.id);
      alert('success delete post');
      setShowModal(false);
    }
    catch (error) {
      alert('failed delete post');
      console.log(error);
      setShowModal(false);
    }
  }
  return (
    <button onClick={deletePost} className="button-small bg-red-600 hover:bg-red-700 active:bg-red-800">delete</button>
  )
}