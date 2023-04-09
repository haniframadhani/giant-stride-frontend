export default function TextArea({ id, name, placeholder }) {
  return (
    <textarea placeholder={placeholder} id={id} name={name} className="textarea" />
  )
}