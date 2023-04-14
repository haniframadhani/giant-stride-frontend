import { useState } from 'react';
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
  BtnClearFormatting,
  Editor,
  EditorProvider,
  Toolbar
} from 'react-simple-wysiwyg';

export default function TextEditor({ setBody }) {
  const [value, setValue] = useState('<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>');

  function onChange(e) {
    setValue(e.target.value);
    setBody(e.target.value)
  }

  return (
    <EditorProvider>
      <Editor containerProps={{ style: { resize: 'vertical', overflow: 'auto' } }} value={value} onChange={onChange}>
        <Toolbar>
          <BtnUndo />
          <BtnRedo />
          <BtnBold />
          <BtnItalic />
          <BtnUnderline />
          <BtnBulletList />
          <BtnNumberedList />
          <BtnLink />
          <BtnClearFormatting />
          <HtmlButton />
        </Toolbar>
      </Editor>
    </EditorProvider>
  );
}