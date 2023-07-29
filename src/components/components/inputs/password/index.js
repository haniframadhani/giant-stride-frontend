import { useEffect, useState } from "react"

export default function InputPassword({ name, id, placeholder, setPassword }) {
  const [nilai, setNilai] = useState('');
  const setValue = e => {
    setPassword ? setPassword(e.target.value) : null;
    setNilai(e.target.value);
  }
  return (
    <input type="password" name={name} id={id} placeholder={placeholder} className="input-field" value={nilai} onChange={setValue} />
  )
}