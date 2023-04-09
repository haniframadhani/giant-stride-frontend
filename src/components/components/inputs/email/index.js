export default function InputEmail({ name, id, placeholder }) {
  return (
    <input type="text" name={name} id={id} placeholder={placeholder} className="input-field" />
  )
}