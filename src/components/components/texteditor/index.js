import { useEffect, useState } from 'react';
import {
  BtnBold,
  BtnItalic,
  BtnUnderline,
  BtnLink,
  BtnNumberedList,
  BtnBulletList,
  BtnRedo,
  BtnUndo,
  HtmlButton,
  Editor,
  EditorProvider,
  Toolbar
} from 'react-simple-wysiwyg';

export default function TextEditor() {
  const [value, setValue] = useState();

  function onChange(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    console.log(value)
  }, [value])

  return (
    <EditorProvider>
      <Editor containerProps={{ style: { resize: 'vertical' } }} value={value} onChange={onChange}>
        <Toolbar>
          <BtnUndo />
          <BtnRedo />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnBulletList />
          <BtnNumberedList />
          <BtnLink />
          <HtmlButton />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}