import Button from "@/components/components/button"
import InputText from "@/components/components/inputs/text"
import TextEditor from "@/components/components/texteditor"
import Upload from "@/components/components/upload"
import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import Head from "next/head"
import Link from "next/link"

export default function Write() {
  return (
    <div className="mx-8 md:mx-10 pt-20 pb-16 font-['Poppins']">
      <Head>
        <title>Write Article | Giant Spot</title>
      </Head>
      <Link href="./dashboard" className="flex items-center gap-2 w-fit">
        <ChevronLeftIcon className="w-6 h-6" />
        <h2 className="font-medium capitalize text-3xl">back</h2>
      </Link>
      <div className="mt-10 grid gap-4">
        <Upload className='p-16 mt-10 border border-neutral-200' />
        <InputText placeholder="Title e.g. my blog title" />
        <TextEditor />
        <Button text='upload' />
      </div>
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