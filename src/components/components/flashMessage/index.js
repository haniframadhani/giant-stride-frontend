import useLockBodyScroll from "@/components/utils/useLockBodyScroll";
import useOnClickOutside from "@/components/utils/useOnClickOutside";
import openFlashMessagecontext from "@/components/contexts/openFlashMessagecontext";
import { useContext, useEffect, useRef } from "react";
import DeleteMessage from "./body/delete";
import PostMessage from "./body/post";
import { useRouter } from "next/router";

export default function Flash({ handleGetAllArticle, message }) {
  const flashRef = useRef(null);
  const { setShowFlash, success } = useContext(openFlashMessagecontext);
  const { push } = useRouter();

  useLockBodyScroll();
  useOnClickOutside(flashRef, () => {
    setShowFlash(false)
    if (message === 'delete') {
      handleGetAllArticle();
    } else if (message === 'post') {
      push('/dashboard');
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setShowFlash(false);
      if (message === 'delete') {
        handleGetAllArticle();
      }
    }, 3000);
  }, [])

  return (
    <div className="bg-overlay">
      <div ref={flashRef} className="bg-white flex items-center gap-2 rounded-sm px-8 py-2 capitalize">
        {message === 'delete' ? <DeleteMessage success={success} /> : <PostMessage success={success} />}
      </div>
    </div>
  )
}