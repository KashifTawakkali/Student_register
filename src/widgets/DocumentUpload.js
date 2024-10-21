import React, { useState } from 'react';
import { submitDocument } from '../API/contorller/documentUploadController'; 
import '../css/DocumentUpload.css';

const DocumentUpload = () => {
  const [dragging, setDragging] = useState(false);
  const [fileUploadProgress, setFileUploadProgress] = useState({});
  const [files, setFiles] = useState({
    tenthMarksheet: null,
    twelfthMarksheet: null,
    passport: null,
    englishProficiencyCertificate: null,
    sop: null,
    cv: null,
    experience: null,
    bachelorsDegree: null
  });
  const [allFilesUploaded, setAllFilesUploaded] = useState(false);

  const requiredFields = [
    'tenthMarksheet',
    'twelfthMarksheet',
    'passport',
    'englishProficiencyCertificate',
    'sop',
    'cv',
    'experience',
    'bachelorsDegree'
  ];

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDrop = (e, fieldName) => {
    e.preventDefault();
    setDragging(false);
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles.length > 0) {
      handleFileUpload(droppedFiles[0], fieldName);
    }
  };

  const handleChange = (e, fieldName) => {
    const selectedFiles = e.target.files;
    if (selectedFiles.length > 0) {
      handleFileUpload(selectedFiles[0], fieldName);
    }
  };

  const handleFileUpload = (file, fieldName) => {
    console.log(`Uploading file for field: ${fieldName}`, file); // Debugging: Log file upload
    setFiles((prevFiles) => ({ ...prevFiles, [fieldName]: file }));
    setFileUploadProgress((prevProgress) => ({
      ...prevProgress,
      [fieldName]: 100 // Assuming the file is uploaded instantly for simplicity
    }));
    checkAllFilesUploaded();
  };

  const checkAllFilesUploaded = () => {
    const uploadedFields = requiredFields.filter(field => files[field] !== null);
    setAllFilesUploaded(uploadedFields.length === requiredFields.length);
    console.log("All files uploaded: ", uploadedFields.length === requiredFields.length); // Debugging: Check if all files are uploaded
  };

  const handleSubmit = async () => {
    console.log("Submit button clicked"); // Debugging: Log when submit button is clicked

    const formData = new FormData();

    // Append all files to FormData object with correct field names
    Object.keys(files).forEach((field) => {
      if (files[field]) {
        console.log(`Appending file for field: ${field}`); // Debugging: Log each appended file
        formData.append(field, files[field]);
      }
    });

    try {
      const response = await submitDocument(formData); // Call the API controller
      console.log("Upload successful:", response); // Debugging: Log the response on success
      alert("Form submitted successfully!");
    } catch (error) {
      console.error("Error uploading files:", error); // Debugging: Log the error on failure
      alert("Error uploading files, please try again.");
    }
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
        onClick={handleSubmit} // Submit the form when the button is clicked
      >
        Submit
      </button>
    </section>
  );
};

export default DocumentUpload;
