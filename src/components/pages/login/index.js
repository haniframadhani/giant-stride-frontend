import Button from "@/components/components/button"
import InputEmail from "@/components/components/inputs/email"
import InputPassword from "@/components/components/inputs/password"
import Head from "next/head"

export default function Login() {
  return (
    <div className="w-screen h-screen bg-dull-blue grid place-content-center">
      <Head>
        <title>login</title>
      </Head>
      <div className="text-white bg-dark-blue py-8 px-10 md:px-16 w-fit h-fit rounded-lg drop-shadow-2xl">
        <h2 className="text-3xl md:text-5xl uppercase font-bold font-['Inter'] text-center">giant spot</h2>
        <form className="grid gap-2 mt-5 md:mt-7">
          <InputEmail placeholder="email" name="email" id="email" />
          <InputPassword placeholder="password" name="password" id="password" />
          <Button text="login" />
        </form>
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