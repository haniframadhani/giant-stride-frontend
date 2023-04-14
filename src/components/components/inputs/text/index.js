import { useState } from "react"

export default function InputText({ name, id, placeholder, setTitle }) {
  const [nilai, setNilai] = useState('');
  const setValue = e => {
    setTitle ? setTitle(e.target.value) : null;
    setNilai(e.target.value);
  }
  return (
    <input type="text" name={name} id={id} placeholder={placeholder} className="input-field" value={nilai} onChange={setValue} />
  )
}