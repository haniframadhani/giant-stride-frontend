import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

export default function UpdateMessage({ success }) {
  return (
    <>
      {success ? <CheckCircleIcon className="w-6 h-6 text-dark-blue" /> : <XCircleIcon className="w-6 h-6 text-red-600" />}
      <p className="text-xl">{success ? 'success update article' : 'failed update article'}</p>
    </>
  )
}