import InputEmail from "@/components/components/inputs/email"
import Head from "next/head"

export default function Login() {
  return (
    <div className="w-screen h-screen">
      <Head>
        <title>login</title>
      </Head>
      <div>
        <InputEmail placeholder="email" name="email" id="email" />
      </div>
    </div>
  )
}

Login.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
    </>
  )
}