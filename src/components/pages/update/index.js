import Button from "@/components/components/button"
import Flash from "@/components/components/flashMessage"
import InputText from "@/components/components/inputs/text"
import TextEditor from "@/components/components/texteditor"
import { getOneArticle, updateArticle } from "@/components/utils/apiRequest"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import openFlashMessagecontext from "@/components/contexts/openFlashMessagecontext"

import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import ReactLoading from 'react-loading'

export default function Update() {
  const { status } = useSession();

  const router = useRouter();
  const id = router.query.articleId;
  const [post, setPost] = useState({});
  const [showFlash, setShowFlash] = useState(false);
  const [success, setSuccess] = useState(false);

  const [updatePost, setUpdatePost] = useState({
    title: "",
    body: ""
  });
  const setTitle = value => { setUpdatePost({ ...updatePost, title: value }) }
  const setBody = value => { setUpdatePost({ ...updatePost, body: value }) }

  const handleGetArticle = async () => {
    const res = await getOneArticle(id);
    setPost(res.article);
  }

  const postArticle = async () => {
    if (updatePost.title === post.title && updatePost.body === post.body) {
      return alert('data sama')
    }
    try {
      await updateArticle(id, updatePost)
        .then(response => {
          if (response.status === 304) {
            return console.log(response.status);
          }
          return response.json()
        })
        .then(result => {
          if (result.status == 200) {
            setSuccess(true);
          } else {
            setSuccess(false);
          }
        })
    } catch (err) {
      setSuccess(false);
    }
    setShowFlash(true);
  }

  useEffect(() => {
    try {
      handleGetArticle();
    } catch (err) {
      console.log(err);
    }
  }, [id])

  useEffect(() => {
    setUpdatePost({
      title: post?.title,
      body: post?.body
    })
  }, [post])

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push("/")
    }
  }, [status]);

  if (status !== 'authenticated') {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <ReactLoading type="spinningBubbles" color="" height="" width="" className="fill-black w-20 h-20" />
      </div>
    )
  }

  return (
    <div className="mx-8 md:mx-10 pt-20 pb-16 font-['Poppins']">
      <openFlashMessagecontext.Provider value={{ setShowFlash, success }}>
        <Head>
          <title>Update {post?.title} | Giant Spot</title>
        </Head>
        <Link href="/dashboard" className="flex items-center gap-2 w-fit">
          <ChevronLeftIcon className="w-6 h-6" />
          <h2 className="font-medium capitalize text-3xl">back</h2>
        </Link>
        <div className="mt-10 grid gap-4">
          <img className="rounded w-1/3" src={post?.image} />
          <InputText placeholder="Title e.g. my blog title" name="title" id="title" setTitle={setTitle} titleContent={post?.title} />
          <TextEditor setBody={setBody} bodyContent={post?.body} />
          <Button text='update' clickEvent={postArticle} />
        </div>
        {showFlash && (<Flash message='update' />)}
      </openFlashMessagecontext.Provider>
    </div>
  )
}

Update.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}