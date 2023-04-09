export default function Button({ text }) {
  return (
    <div className="capitalize w-fit rounded-lg cursor-pointer py-4 px-8 bg-orange-400 hover:bg-orange-500 active:bg-orange-600">
      {text}
    </div>
  )
}