// src/widgets/Preview.js
import React from 'react';

const Preview = ({ personalInfo, addressInfo, academicInterests, documents }) => {
  return (
    <section className="form-section">
      <h2>Review Your Information</h2>

      <h3>Personal Information</h3>
      <p><strong>Title:</strong> {personalInfo.title}</p>
      <p><strong>First Name:</strong> {personalInfo.firstName}</p>
      <p><strong>Middle Name:</strong> {personalInfo.middleName}</p>
      <p><strong>Last Name:</strong> {personalInfo.lastName}</p>
      <p><strong>Mobile No.:</strong> {personalInfo.mobile}</p>
      <p><strong>Emergency Contact No.:</strong> {personalInfo.emergencyContact}</p>
      <p><strong>Email:</strong> {personalInfo.email}</p>
      <p><strong>Marital Status:</strong> {personalInfo.maritalStatus}</p>
      <p><strong>Gender:</strong> {personalInfo.gender}</p>
      <p><strong>Date of Birth:</strong> {personalInfo.dob.toLocaleDateString()}</p>

      <h3>Address Information</h3>
      <p><strong>Native Country:</strong> {addressInfo.country}</p>
      <p><strong>Native State:</strong> {addressInfo.state}</p>
      <p><strong>Native City:</strong> {addressInfo.city}</p>
      <p><strong>Postal Code:</strong> {addressInfo.postalCode}</p>
      <p><strong>Passport No.:</strong> {addressInfo.passportNo}</p>
      <p><strong>Passport Expiry:</strong> {addressInfo.passportExpiry.toLocaleDateString()}</p>

      <h3>Academic Interests</h3>
      <p><strong>Interests:</strong> {academicInterests.join(', ')}</p>

      <h3>Documents Uploaded</h3>
      <p><strong>10th Marksheet:</strong> {documents['10thMarksheet'] ? 'Uploaded' : 'Not uploaded'}</p>
      <p><strong>12th Marksheet:</strong> {documents['12thMarksheet'] ? 'Uploaded' : 'Not uploaded'}</p>
      <p><strong>Passport:</strong> {documents.passport ? 'Uploaded' : 'Not uploaded'}</p>
    </section>
  );
};

export default Preview;
