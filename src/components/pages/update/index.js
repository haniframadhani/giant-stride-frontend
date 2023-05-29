import Button from "@/components/components/button"
import InputText from "@/components/components/inputs/text"
import TextEditor from "@/components/components/texteditor"
import { getOneArticle, updateArticle } from "@/components/utils/apiRequest"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"

import Head from "next/head"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function Update() {
  const router = useRouter();
  const id = router.query.articleId;
  const [post, setPost] = useState({});

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
    // console.log(data)
    try {
      // 400 no data send
      await updateArticle(id, updatePost)
        .then(response => response.text())
        .then(result => console.log(result))
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    try {
      handleGetArticle();
    } catch (err) {
      console.log(err);
    }
  }, [id])


  return (
    <div className="mx-8 md:mx-10 pt-20 pb-16 font-['Poppins']">
      <Head>
        <title>Update Article | Giant Spot</title>
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