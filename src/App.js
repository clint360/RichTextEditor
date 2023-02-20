import './App.css';
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [value, setValue] = useState('');
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ['bold', 'underline', 'italic', 'blockquote', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ["link", "image", "video", "pdf"]
    ]
  }

  return (
    <div>
      <main className='main'>
        <section className='editor'>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={setValue}
            className='editor-input'
            modules={modules}
            spellcheck="true"
            placeholder='Tell us an interesting story, Feel free to use Media to describe your experience'
          />
        </section>
        <section className='preview' dangerouslySetInnerHTML={{ __html: value }} />
      </main>
    </div>
  )
}

export default App;
