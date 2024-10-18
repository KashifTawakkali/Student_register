import React, { useState } from 'react';
import './studentregister.css';
import PersonalInformation from './widgets/PersonalInformation';
import AddressInformation from './widgets/AddressInformation';
import AcademicInterests from './widgets/AcademicInterests';
import DocumentUpload from './widgets/DocumentUpload';
import BackgroundInformation from './widgets/BackgroundInformation'; 
import EducationalBackground from './widgets/EducationaInfo'; 
import Preview from './widgets/Preview';

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

  const [dob, setDob] = useState(null);
  const [passportExpiry, setPassportExpiry] = useState(null);
  const [showTestScore, setShowTestScore] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [documents, setDocuments] = useState({
    '10thMarksheet': null,
    '12thMarksheet': null,
    'passport': null,
  });

  // Step state
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7; // Updated to include the preview step

  const [errors, setErrors] = useState({});

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
  
    // Simulating a file upload process
    const uploadProgress = setInterval(() => {
      setFileUploadProgress((prev) => {
        const currentProgress = (prev[fieldName] || 0) + 20; // Simulating upload progress
        if (currentProgress >= 100) {
          clearInterval(uploadProgress);
          return { ...prev, [fieldName]: 100 }; // Set progress to 100%
        }
        return { ...prev, [fieldName]: currentProgress };
      });
    }, 1000); // Update progress every second
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFormSubmitted(true);
      // Handle successful submission (e.g., send to API)
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
        // Validate Background Information
        break;
      case 6:
        // Validate Document Upload
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
          <span className={currentStep >= 2 ? 'completed' : ''}>Step 2: Address</span>
          <span className={currentStep >= 3 ? 'completed' : ''}>Step 3: Academic Interests</span>
          <span className={currentStep >= 4 ? 'completed' : ''}>Step 4: Educational Background</span>
          <span className={currentStep >= 5 ? 'completed' : ''}>Step 5: Background Info</span>
          <span className={currentStep >= 6 ? 'completed' : ''}>Step 6: Documents</span>
          <span className={currentStep >= 7 ? 'completed' : ''}>Step 7: Preview</span> {/* New preview step */}
        </div>
      </div>

      {currentStep === 1 && (
        <PersonalInformation dob={dob} setDob={setDob} formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {currentStep === 2 && (
        <AddressInformation passportExpiry={passportExpiry} setPassportExpiry={setPassportExpiry} formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {currentStep === 3 && (
        <AcademicInterests showTestScore={showTestScore} handleTestChange={handleTestChange} formData={formData} setFormData={setFormData} errors={errors} />
      )}
      {currentStep === 4 && (
        <EducationalBackground formData={formData} setFormData={setFormData} errors={errors} /> 
      )}
      {currentStep === 5 && (
        <BackgroundInformation formData={formData} setFormData={setFormData} errors={errors} /> 
      )}
      {currentStep === 6 && (
        <DocumentUpload handleFileUpload={handleFileUpload} documents={documents} setDocuments={setDocuments} errors={errors} />
      )}
      {currentStep === 7 && (
        <Preview formData={formData} uploadedDocuments={Object.values(documents)} />
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
    </form>
  );
};

export default StudentRegistration;
