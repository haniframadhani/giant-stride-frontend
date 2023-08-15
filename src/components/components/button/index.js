import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { useContext } from "react";
import loginErrorContext from "@/components/contexts/loginErrorContext";

export default function Button({ text, iconPlus, clickEvent, account }) {
  const router = useRouter();
  const setErrorLogin = useContext(loginErrorContext);
  const login = async e => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email: account.email,
      password: account.password,
      redirect: false
    })
    if (res.status === 401) {
      setErrorLogin(res)
    }
    if (res.status === 200) {
      router.push('/dashboard');
    }
  }
  return (
    <button onClick={account ? login : clickEvent} className="capitalize w-fit rounded-lg cursor-pointer py-4 px-8 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 font-['Inter'] text-white text-base flex gap-2">
      {text}
      {iconPlus ? <PlusIcon className="w-6 h-6" /> : ''}
    </button>
  )
}