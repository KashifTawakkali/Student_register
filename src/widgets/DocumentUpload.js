import React, { useState } from 'react';
import '../DocumentUplload.css';

const DocumentUpload = ({ handleFileUpload }) => {
  const [dragging, setDragging] = useState(false);
  const [fileUploadProgress, setFileUploadProgress] = useState({});
  const [allFilesUploaded, setAllFilesUploaded] = useState(false);

  const requiredFields = [
    '10thMarksheet',
    '12thMarksheet',
    'passport',
    'englishProficiency',
    'sop',
    'cv',
    'bachelorsDegree'
  ];

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e, fieldName) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0], fieldName, setFileUploadProgress);
      checkAllFilesUploaded();
    }
  };

  const handleChange = (e, fieldName) => {
    handleFileUpload(e.target.files[0], fieldName, setFileUploadProgress);
    checkAllFilesUploaded();
  };

  const checkAllFilesUploaded = () => {
    const uploadedFields = requiredFields.filter(field => fileUploadProgress[field] !== undefined);
    if (uploadedFields.length === requiredFields.length) {
      setAllFilesUploaded(true);
    } else {
      setAllFilesUploaded(false);
    }
  };

  return (
    <section className="form-section">
      <h2>Document Upload</h2>
      <div
        className={`drop-area ${dragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e, '10thMarksheet')}
      >
        <p>Drag and drop your files here or click to upload</p>
      </div>
      {requiredFields.map((field) => (
        <div className="form-group" key={field}>
          <label>{field.replace(/([A-Z])/g, ' $1').toUpperCase()} *</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleChange(e, field)}
            required
          />
          {fileUploadProgress[field] && (
            <progress value={fileUploadProgress[field]} max="100">{fileUploadProgress[field]}%</progress>
          )}
        </div>
      ))}
      <button
        className={`submit-button ${allFilesUploaded ? 'active' : 'disabled'}`}
        disabled={!allFilesUploaded}
        onClick={() => alert("Form submitted successfully!")}
      >
        Submit
      </button>
    </section>
  );
};

export default DocumentUpload;
