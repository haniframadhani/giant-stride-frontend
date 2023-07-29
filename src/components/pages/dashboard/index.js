import Button from "@/components/components/button"
import Card from "@/components/components/card/dashboardcard"
import ModalDelete from "@/components/components/modal/delete"
import { getAllArticle } from "@/components/utils/apiRequest"
import openModalDeleteContext from "@/components/contexts/openModalDeleteContext"
import selectedArticleContext from "@/components/contexts/selectedArticleContext"
import openFlashMessagecontext from "@/components/contexts/openFlashMessagecontext"
import Head from "next/head"
import Link from "next/link"
import { useState, useEffect } from "react"
import Flash from "@/components/components/flashMessage"

export default function Dashboard() {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showFlash, setShowFlash] = useState(false);
  const [success, setSuccess] = useState(false);
  const [article, setArticle] = useState({});

  const handleGetAllArticle = async () => {
    const res = await getAllArticle();
    setBlogs(res?.articles)
  }

  useEffect(() => {
    handleGetAllArticle();
    document.body.className = 'bg-white';
  }, [])

  return (
    <>
      <Head>
        <title>Dashboard | Giant Spot</title>
      </Head>
      <openModalDeleteContext.Provider value={{ setShowModal }}>
        <selectedArticleContext.Provider value={{ article, setArticle }}>
          <openFlashMessagecontext.Provider value={{ setShowFlash, success, setSuccess }}>
            <div className="mx-8 md:mx-10 pt-20 pb-16 font-['Poppins']">
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