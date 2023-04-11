export default function InputPassword({ name, id, placeholder }) {
  return (
    <input type="password" name={name} id={id} placeholder={placeholder} className="input-field" />
  )
}