import { Login } from "@/components/utils/apiRequest";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";

export default function Button({ text, iconPlus, clickEvent, account }) {
  const router = useRouter();
  const signIn = async e => {
    e.preventDefault();
    try {
      await Login(account)
        .then(result => {
          if (result.status == 200) {
            router.push('/dashboard');
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <button onClick={account ? signIn : clickEvent} className="capitalize w-fit rounded-lg cursor-pointer py-4 px-8 bg-orange-400 hover:bg-orange-500 active:bg-orange-600 font-['Inter'] text-white text-base flex gap-2">
      {text}
      {iconPlus ? <PlusIcon className="w-6 h-6" /> : ''}
    </button>
  )
}