// src/widgets/StudentRegistration.js
import React, { useState } from 'react';
import './studentregister.css';
import PersonalInformation from './widgets/PersonalInformation';
import AddressInformation from './widgets/AddressInformation';
import AcademicInterests from './widgets/AcademicInterests';
import DocumentUpload from './widgets/DocumentUpload';
import BackgroundInformation from './widgets/BackgroundInformation';
import EducationalBackground from './widgets/EducationaInfo';
import Preview from './widgets/Preview';
import Loader from './widgets/loader';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toast styles

const StudentRegistration = () => {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    mobile: '',
    emergencyContact: '',
    email: '',
    maritalStatus: '',
    gender: '',
    dateOfBirth: null,
    nativeCountry: '',
    nativeState: '',
    nativeCity: '',
    postalCode: '',
    passportNo: '',
    passportExpiry: null,
    visaRejectionStatus: false,
    gapInEducation: '',
    educationalBackground: [],
  });

  const [showTestScore, setShowTestScore] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [documents, setDocuments] = useState({
    '10thMarksheet': null,
    '12thMarksheet': null,
    'passport': null,
  });

  // Step state
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loader state

  const handleTestChange = (selectedOption) => {
    setShowTestScore(selectedOption.value !== 'none');
  };

  const handleFileUpload = (file, fieldName, setFileUploadProgress) => {
    if (!file) {
      console.error('No file provided');
      return;
    }

    const formData = new FormData();
    formData.append(fieldName, file);

    const uploadProgress = setInterval(() => {
      setFileUploadProgress((prev) => {
        const currentProgress = (prev[fieldName] || 0) + 20;
        if (currentProgress >= 100) {
          clearInterval(uploadProgress);
          return { ...prev, [fieldName]: 100 }; // Set progress to 100%
        }
        return { ...prev, [fieldName]: currentProgress };
      });
    }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
    }
  };

  const nextStep = () => {
    if (validateForm()) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const validateForm = () => {
    let newErrors = {};
    switch (currentStep) {
      case 1:
        // Validate Personal Information
        break;
      case 2:
        // Validate Address Information
        break;
      case 3:
        // Validate Academic Interests
        break;
      case 4:
        // Validate Educational Background
        break;
      case 5:
        // Validate Document Upload
        break;
      case 6:
        // Validate Background Information
        break;
      default:
        break;
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
          <span className={currentStep >= 2 ? 'completed' : ''}>Step 2: Address Info</span>
          <span className={currentStep >= 3 ? 'completed' : ''}>Step 3: Academic Interests</span>
          <span className={currentStep >= 4 ? 'completed' : ''}>Step 4: Educational Background</span>
          <span className={currentStep >= 5 ? 'completed' : ''}>Step 5: Document Upload</span>
          <span className={currentStep >= 6 ? 'completed' : ''}>Step 6: Background Info</span>
          <span className={currentStep >= 7 ? 'completed' : ''}>Step 7: Preview</span>
        </div>
      </div>

      {loading && <Loader />}

      {currentStep === 1 && (
        <PersonalInformation
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          setLoading={setLoading}
        />
      )}
      {currentStep === 2 && (
        <AddressInformation
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          setLoading={setLoading} // Pass setLoading to AddressInformation
        />
      )}
      {currentStep === 3 && (
        <AcademicInterests
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
          showTestScore={showTestScore}
          handleTestChange={handleTestChange}
        />
      )}
      {currentStep === 4 && (
        <EducationalBackground
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      )}
      {currentStep === 5 && (
        <BackgroundInformation
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          setErrors={setErrors}
        />
      )}
      {currentStep === 6 && (
        <DocumentUpload
          handleFileUpload={handleFileUpload}
          documents={documents}
          setDocuments={setDocuments}
          errors={errors}
        />
      )}
      {currentStep === 7 && (
        <Preview formData={formData} uploadedDocuments={Object.values(documents)} />
      )}

      <div className="navigation-buttons">

        {currentStep < totalSteps ? (
          <button type="button" onClick={nextStep}>
            Next
          </button>
        ) : (
          <button type="submit">Submit</button>
        )}
      </div>

      {formSubmitted && <div className="confirmation-message">You have complete all Registeration step successfully!.Press Next to submit </div>}
    </form>
  );
};

export default StudentRegistration;
