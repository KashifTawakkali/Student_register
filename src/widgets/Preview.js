import React from 'react';
import { motion } from 'framer-motion';

const Preview = ({ formData, uploadedDocuments }) => {
  return (
    <section className="preview-section">
      <h2>Preview Your Information</h2>

      <div className="preview-group">
        <h3>Personal Information</h3>
        <p><strong>Title:</strong> {formData.title}</p>
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Middle Name:</strong> {formData.middleName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Mobile No.:</strong> {formData.mobile}</p>
        <p><strong>Emergency Contact No.:</strong> {formData.emergencyContact}</p>
        <p><strong>Email ID:</strong> {formData.email}</p>
        <p><strong>Marital Status:</strong> {formData.maritalStatus}</p>
        <p><strong>Gender:</strong> {formData.gender}</p>
        <p><strong>Date of Birth:</strong> {formData.dateOfBirth ? formData.dateOfBirth.toLocaleDateString() : ''}</p>
      </div>

      <div className="preview-group">
        <h3>Educational Background</h3>
        {formData.educationalBackground.map((qual, index) => (
          <div key={index}>
            <p><strong>Qualification:</strong> {qual.qualification}</p>
            <p><strong>Institution:</strong> {qual.institution}</p>
            <p><strong>Percentage:</strong> {qual.percentage}</p>
            <p><strong>Passing Year:</strong> {qual.passingYear}</p>
            <p><strong>Country:</strong> {qual.country}</p>
            <hr />
          </div>
        ))}
      </div>

      <div className="preview-group">
        <h3>Address Information</h3>
        <p><strong>Native Country:</strong> {formData.nativeCountry}</p>
        <p><strong>Native State:</strong> {formData.nativeState}</p>
        <p><strong>Native City:</strong> {formData.nativeCity}</p>
        <p><strong>Postal Code:</strong> {formData.postalCode}</p>
        <p><strong>Passport No.:</strong> {formData.passportNo}</p>
        <p><strong>Passport Expiry:</strong> {formData.passportExpiry ? formData.passportExpiry.toLocaleDateString() : ''}</p>
      </div>

      <div className="preview-group">
        <h3>Background Information</h3>
        <p><strong>Visa Rejection Status:</strong> {formData.visaRejectionStatus ? 'Yes' : 'No'}</p>
        <p><strong>Gap in Education:</strong> {formData.gapInEducation}</p>
      </div>

      <div className="preview-group">
        <h3>Uploaded Documents</h3>
        {uploadedDocuments.length > 0 ? (
          uploadedDocuments.map((doc, index) => (
            <p key={index}><strong>{doc.name}</strong>: <a href={URL.createObjectURL(doc)} target="_blank" rel="noopener noreferrer">View Document</a></p>
          ))
        ) : (
          <p>No documents uploaded.</p>
        )}
      </div>

      <div className="preview-actions">
        <button onClick={() => {/* Implement logic to go back to the form */}}>Edit Form</button>
        <button onClick={() => {/* Implement final submission logic */}}>Submit</button>
      </div>
    </section>
  );
};

export default Preview;
