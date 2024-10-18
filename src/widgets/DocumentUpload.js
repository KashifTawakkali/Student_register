import React, { useState } from 'react';
import '../css/DocumentUpload.css';

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
    'experience', // Added Experience field
    'bachelorsDegree'
  ];

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDrop = (e, fieldName) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;

    console.log(files); // Log the files dropped
    if (files.length > 0) {
      handleFileUpload(files[0], fieldName, setFileUploadProgress);
      checkAllFilesUploaded();
    }
  };

  const handleChange = (e, fieldName) => {
    console.log(e.target.files); // Check the files array
    if (e.target.files.length > 0) {
      handleFileUpload(e.target.files[0], fieldName, setFileUploadProgress);
      checkAllFilesUploaded();
    }
  };

  const checkAllFilesUploaded = () => {
    const uploadedFields = requiredFields.filter(field => fileUploadProgress[field] !== undefined);
    setAllFilesUploaded(uploadedFields.length === requiredFields.length);
  };

  return (
    <section className="form-section">
      <h2>Document Upload</h2>
      {requiredFields.map((field) => (
        <div className="form-group" key={field}>
          <label>{field.replace(/([A-Z])/g, ' $1').toUpperCase()} *</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleChange(e, field)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, field)}
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
