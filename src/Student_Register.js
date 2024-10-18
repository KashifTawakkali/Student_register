import React, { useState } from 'react';
import './studentregister.css';
import PersonalInformation from './widgets/PersonalInformation';
import AddressInformation from './widgets/AddressInformation';
import AcademicInterests from './widgets/AcademicInterests';
import DocumentUpload from './widgets/DocumentUpload';
import BackgroundInformation from './widgets/BackgroundInformation';
import Preview from './widgets/Preview';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const StudentRegistration = () => {
  const [dob, setDob] = useState(null);
  const [passportExpiry, setPassportExpiry] = useState(null);
  const [showTestScore, setShowTestScore] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [documents, setDocuments] = useState({
    '10thMarksheet': null,
    '12thMarksheet': null,
    'passport': null,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6; // Incremented to account for Preview step

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const [personalInfo, setPersonalInfo] = useState({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobile: '',
    emergencyContact: '',
    email: '',
    maritalStatus: '',
    gender: '',
  });

  const [addressInfo, setAddressInfo] = useState({
    country: '',
    state: '',
    city: '',
    postalCode: '',
    passportNo: '',
  });

  const handleTestChange = (selectedOption) => {
    setShowTestScore(selectedOption.value !== 'none');
  };

  const handleFileUpload = (e, field) => {
    setDocuments({ ...documents, [field]: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const nextStep = () => {
    // If we are on the personal information step (Step 1)
    if (currentStep === 1) {
      // Check if all required personal info is filled
      const { firstName, lastName, mobile, email, gender } = personalInfo;
      if (!firstName || !lastName || !mobile || !email || !gender || !dob) {
        setPopupMessage('Please fill out the Personal Information before proceeding.');
        setIsModalOpen(true);
        return;
      }
      // Save personal information to local storage
      localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <form onSubmit={handleSubmit} className="student-registration-form">
      <h1>Student Registration</h1>

      {/* Progress bar */}
      <div className="progress-container">
        <div className="progress-bar-background">
          <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
        </div>
        <div className="progress-labels">
          <span className={currentStep >= 1 ? 'completed' : ''}>Step 1: Personal Info</span>
          <span className={currentStep >= 2 ? 'completed' : ''}>Step 2: Address</span>
          <span className={currentStep >= 3 ? 'completed' : ''}>Step 3: Academic Interests</span>
          <span className={currentStep >= 4 ? 'completed' : ''}>Step 4: Background Info</span>
          <span className={currentStep >= 5 ? 'completed' : ''}>Step 5: Documents</span>
          <span className={currentStep >= 6 ? 'completed' : ''}>Step 6: Preview</span>
        </div>
      </div>

      {/* Form sections */}
      {currentStep === 1 && (
        <PersonalInformation dob={dob} setDob={setDob} personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />
      )}
      {currentStep === 2 && (
        <AddressInformation passportExpiry={passportExpiry} setPassportExpiry={setPassportExpiry} />
      )}
      {currentStep === 3 && (
        <AcademicInterests showTestScore={showTestScore} handleTestChange={handleTestChange} />
      )}
      {currentStep === 4 && (
        <DocumentUpload handleFileUpload={handleFileUpload} />
      )}
      {currentStep === 5 && (
        <Preview 
          personalInfo={personalInfo}
          addressInfo={addressInfo}
          academicInterests={[]} // Replace with actual data
          documents={documents}
        />
      )}

      {/* Navigation buttons */}
      {currentStep < totalSteps && (
        <button type="button" onClick={nextStep}>Next</button>
      )}

      {currentStep === totalSteps && (
        <button type="submit">Submit</button>
      )}

      {/* Confirmation message */}
      {formSubmitted && (
        <div className="confirmation-message">Your registration has been submitted successfully!</div>
      )}

      {/* Modal popup for alerts */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h4>{popupMessage}</h4>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </form>
  );
};

export default StudentRegistration;
