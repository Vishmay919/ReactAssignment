import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './RichTextEditor.css';

interface RichTextEditorProps {
  userData: { id: string, name: string, address: string, email: string, phone: string };
}

const RichTextEditor: React.FC<RichTextEditorProps> = ({ userData }) => {
  const [editorContent, setEditorContent] = useState('');

  useEffect(() => {
    const formattedContent = `
      <p><strong>Id:</strong> ${userData.id}</p>
      <p><strong>Name:</strong> ${userData.name}</p>
      <p><strong>Address:</strong> ${userData.address}</p>
      <p><strong>Email:</strong> ${userData.email}</p>
      <p><strong>Phone:</strong> ${userData.phone}</p>
    `;
    setEditorContent(formattedContent);
  }, [userData]);

  return (
    <div className="editorContainer">
      <ReactQuill value={editorContent} readOnly={false} theme="snow" className="editor" />
    </div>
  );
};

export default RichTextEditor;
