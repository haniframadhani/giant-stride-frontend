import Button from "@/components/components/button"
import Card from "@/components/components/card/dashboardcard"
import ModalDelete from "@/components/components/modal/delete"
import { Logout, getAllArticle } from "@/components/utils/apiRequest"
import openModalDeleteContext from "@/components/contexts/openModalDeleteContext"
import selectedArticleContext from "@/components/contexts/selectedArticleContext"
import openFlashMessagecontext from "@/components/contexts/openFlashMessagecontext"
import Head from "next/head"
import Link from "next/link"
import { useState, useEffect } from "react"
import Flash from "@/components/components/flashMessage"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/router"
import ReactLoading from 'react-loading'

export default function Dashboard() {
  const router = useRouter();

  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [success, setSuccess] = useState(false);
  const [article, setArticle] = useState({});
  const { status } = useSession();

  const handleGetAllArticle = async () => {
    const res = await getAllArticle();
    setBlogs(res?.articles)
  }

  useEffect(() => {
    handleGetAllArticle();
    document.body.className = 'bg-white';
  }, [])

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
    <>
      <Head>
        <title>Dashboard | Giant Spot</title>
      </Head>
      <openModalDeleteContext.Provider value={{ setShowModal }}>
        <selectedArticleContext.Provider value={{ article, setArticle }}>
          <openFlashMessagecontext.Provider value={{ setShowFlash, success, setSuccess }}>
            <div className="mx-8 md:mx-10 pt-16 pb-16 font-['Poppins']">
              <div className="flex justify-end mb-2">
                <button className="text-base text-slate-400 hover:text-slate-600" onClick={async () => {
                  await Logout()
                    .then(result => { if (result.status === 204) { router.push('/') } });
                  await signOut()
                }}>logout</button>
              </div>
              <div className="col-span-full flex justify-between">
                <h1 className="capitalize text-4xl font-medium">dashboard</h1>
                <Link href="write">
                  <Button text="Create New Post" iconPlus={true} />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 mt-10">
                {blogs.map((blog, i) => {
                  return <Card key={i} id={blog['_id']} title={blog?.title} img={blog?.image} date={blog.uploadDate} />
                })}
              </div>
              {showModal && (<ModalDelete />)}
              {showFlash && (<Flash handleGetAllArticle={handleGetAllArticle} message='delete' />)}
            </div>
          </openFlashMessagecontext.Provider>
        </selectedArticleContext.Provider>
      </openModalDeleteContext.Provider>
    </>
  )
}

Dashboard.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}