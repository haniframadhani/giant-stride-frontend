import { useEffect, useState } from "react"

export default function InputText({ name, id, placeholder, setTitle, titleContent }) {
  const [nilai, setNilai] = useState('');
  useEffect(() => {
    if (titleContent != null) {
      setNilai(titleContent);
    }
  }, [titleContent])
  const setValue = e => {
    setTitle ? setTitle(e.target.value) : null;
    setNilai(e.target.value);
  }
  return (
    <input type="text" name={name} id={id} placeholder={placeholder} className="input-field" value={nilai} onChange={setValue} />
  )
}