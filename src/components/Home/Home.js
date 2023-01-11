import React from 'react';
import { useState } from 'react';

import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title');
  const [subtitle, setSubtitle] = useState('Subtitle');
  const [text, setText] = useState('Text');
  const [setFont] = useState('Font');
  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview
        title={title}
        setTitle={setTitle}
        subtitle={subtitle}
        setSubtitle={setSubtitle}
        text={text}
        setText={setText}
      />
      <Editor setTitle={setTitle} setSubtitle={setSubtitle} setText={setText} setFont={setFont} />
    </main>
  );
}
