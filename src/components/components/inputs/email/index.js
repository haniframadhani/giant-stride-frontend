import { useState } from "react"

export default function InputEmail({ name, id, placeholder, setEmail }) {
  const [nilai, setNilai] = useState('');
  const setValue = e => {
    setEmail ? setEmail(e.target.value) : null;
    setNilai(e.target.value);
  }
  return (
    <input type="text" name={name} id={id} placeholder={placeholder} className="input-field" value={nilai} onChange={setValue} />
  )
}