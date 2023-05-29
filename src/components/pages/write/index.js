import Button from "@/components/components/button"
import Flash from "@/components/components/flashMessage"
import InputText from "@/components/components/inputs/text"
import TextEditor from "@/components/components/texteditor"
import Upload from "@/components/components/upload"
import { uploadArticle } from "@/components/utils/apiRequest"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import openFlashMessagecontext from "@/components/contexts/openFlashMessagecontext"

import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"

export default function Write() {
  const [post, setPost] = useState({
    title: "",
    image: "",
    body: ""
  });
  const setTitle = value => { setPost({ ...post, title: value }) }
  const setBody = value => { setPost({ ...post, body: value }) }
  const setImage = value => { setPost({ ...post, image: value }) }

  const [showFlash, setShowFlash] = useState(false);
  const [success, setSuccess] = useState(false);

  const { push } = useRouter();
  const postArticle = async () => {
    let formData = new FormData();
    formData.append('image', post?.image)
    formData.append('title', post?.title)
    formData.append('body', post?.body)
    try {
      await uploadArticle(formData);
      setSuccess(true);
      setShowFlash(true);
    } catch (err) {
      setSuccess(false);
    }
  }

  return (
    <div className="mx-8 md:mx-10 pt-20 pb-16 font-['Poppins']">
      <openFlashMessagecontext.Provider value={{ setShowFlash, success }}>
        <Head>
          <title>Write Article | Giant Spot</title>
        </Head>
        <Link href="./dashboard" className="flex items-center gap-2 w-fit">
          <ChevronLeftIcon className="w-6 h-6" />
          <h2 className="font-medium capitalize text-3xl">back</h2>
        </Link>
        <div className="mt-10 grid gap-4">
          <Upload className='p-16 mt-10 border border-neutral-200' setImage={setImage} />
          <InputText placeholder="Title e.g. my blog title" name="title" id="title" setTitle={setTitle} />
          <TextEditor setBody={setBody} />
          <Button text='upload' clickEvent={postArticle} />
        </div>
        {showFlash && (<Flash message='post' />)}
      </openFlashMessagecontext.Provider>
    </div>
  )
}

Write.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}