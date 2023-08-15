import Button from "@/components/components/button"
import InputEmail from "@/components/components/inputs/email"
import InputPassword from "@/components/components/inputs/password"
import loginErrorContext from "@/components/contexts/loginErrorContext"
import { useSession } from "next-auth/react"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Login() {
  useEffect(() => {
    document.body.className = 'bg-dull-blue';
  }, []);

  const router = useRouter();
  const { status } = useSession();
  const [errorLogin, setErrorLogin] = useState(null);

  useEffect(() => {
    if (status == 'authenticated') {
      router.push("/dashboard");
    }
  }, [status]);

  const [account, setAccount] = useState({
    email: "",
    password: ""
  });
  const setEmail = value => { setAccount({ ...account, email: value }) }
  const setPassword = value => { setAccount({ ...account, password: value }) }

  useEffect(() => {
    console.log(errorLogin)
  }, [errorLogin])

  return (
    <div className="w-screen h-screen grid place-content-center">
      <Head>
        <title>login</title>
      </Head>
      <loginErrorContext.Provider value={setErrorLogin}>
        <div className="text-white bg-dark-blue py-8 px-10 md:px-16 w-fit h-fit rounded-lg drop-shadow-2xl">
          <h2 className="text-3xl md:text-5xl uppercase font-bold font-['Inter'] text-center">giant spot</h2>
          <form className="grid gap-2 mt-5 md:mt-7">
            <InputEmail placeholder="email" name="email" id="email" setEmail={setEmail} />
            <InputPassword placeholder="password" name="password" id="password" setPassword={setPassword} />
            {errorLogin && (<p className="text-center"><span className="bg-red-700 rounded-sm">{errorLogin.error}</span></p>)}
            <Button text="login" account={account} />
          </form>
        </div>
      </loginErrorContext.Provider>
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