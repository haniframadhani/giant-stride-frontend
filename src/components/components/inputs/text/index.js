export default function InputText({ name, id, placeholder }) {
  return (
    <input type="text" name={name} id={id} placeholder={placeholder} className="input-field" />
  )
}