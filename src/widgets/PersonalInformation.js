import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { submitPersonalData } from '../API/contorller/personalController';
import { toast } from 'react-toastify';
import 'react-datepicker/dist/react-datepicker.css';

const PersonalInformation = ({ formData, setFormData, errors, setErrors, setLoading }) => {
  const titles = [
    { value: 'Mr.', label: 'Mr.' },
    { value: 'Mrs.', label: 'Mrs.' },
    { value: 'Ms.', label: 'Ms.' },
  ];

  const maritalStatusOptions = [
    { value: 'Single', label: 'Single' },
    { value: 'Married', label: 'Married' },
  ];

  const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Other', label: 'Other' },
  ];

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.title) newErrors.title = 'Title is required';
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.mobileNo) newErrors.mobileNo = 'Mobile No. is required';
    if (!formData.studentEmailId) newErrors.studentEmailId = 'Email is required';
    if (!formData.maritalStatus) newErrors.maritalStatus = 'Marital Status is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.dateOfBirth) newErrors.dob = 'Date of Birth is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      setLoading(true); // Set loading to true when submission starts
      try {
        await submitPersonalData({
          title: formData.title,
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          mobileNo: formData.mobileNo,
          emergencyContactNo: formData.emergencyContactNo,
          studentEmailId: formData.studentEmailId,
          maritalStatus: formData.maritalStatus,
          gender: formData.gender,
          dateOfBirth: formData.dateOfBirth.toISOString().split('T')[0],
        });
        toast.success('Personal data submitted successfully.Press Next to Next Step');
      } catch (error) {
        toast.error('Failed to submit personal data');
      } finally {
        setLoading(false); // Turn off the loader after submission completes
      }
    }
  };

  return (
    <section className="form-section">
      <h2>Personal Information</h2>
      
      <div className="form-group">
        <label>Title *</label>
        <Select 
          options={titles} 
          placeholder="Select title" 
          onChange={(option) => handleInputChange('title', option ? option.value : '')}
        />
        {errors.title && <div className="error-message">{errors.title}</div>}
      </div>

      <div className="form-group">
        <label>First Name *</label>
        <input 
          type="text" 
          placeholder="First Name" 
          required 
          onChange={(e) => handleInputChange('firstName', e.target.value)} 
        />
        {errors.firstName && <div className="error-message">{errors.firstName}</div>}
      </div>

      <div className="form-group">
        <label>Middle Name</label>
        <input 
          type="text" 
          placeholder="Middle Name" 
          onChange={(e) => handleInputChange('middleName', e.target.value)} 
        />
      </div>

      <div className="form-group">
        <label>Last Name *</label>
        <input 
          type="text" 
          placeholder="Last Name" 
          required 
          onChange={(e) => handleInputChange('lastName', e.target.value)} 
        />
        {errors.lastName && <div className="error-message">{errors.lastName}</div>}
      </div>

      <div className="form-group">
        <label>Mobile No. *</label>
        <input 
          type="tel" 
          placeholder="Mobile Number" 
          required 
          onChange={(e) => handleInputChange('mobileNo', e.target.value)} 
        />
        {errors.mobileNo && <div className="error-message">{errors.mobileNo}</div>}
      </div>

      <div className="form-group">
        <label>Emergency Contact No.</label>
        <input 
          type="tel" 
          placeholder="Emergency Contact Number" 
          onChange={(e) => handleInputChange('emergencyContactNo', e.target.value)} 
        />
      </div>

      <div className="form-group">
        <label>Student Email ID *</label>
        <input 
          type="email" 
          placeholder="Email" 
          required 
          onChange={(e) => handleInputChange('studentEmailId', e.target.value)} 
        />
        {errors.studentEmailId && <div className="error-message">{errors.studentEmailId}</div>}
      </div>

      <div className="form-group">
        <label>Marital Status *</label>
        <Select 
          options={maritalStatusOptions} 
          placeholder="Select marital status" 
          onChange={(option) => handleInputChange('maritalStatus', option ? option.value : '')}
        />
        {errors.maritalStatus && <div className="error-message">{errors.maritalStatus}</div>}
      </div>

      <div className="form-group">
        <label>Gender *</label>
        <Select 
          options={genderOptions} 
          placeholder="Select gender" 
          onChange={(option) => handleInputChange('gender', option ? option.value : '')}
        />
        {errors.gender && <div className="error-message">{errors.gender}</div>}
      </div>

      <div className="form-group">
        <label>Date of Birth *</label>
        <DatePicker
          selected={formData.dateOfBirth}
          onChange={(date) => handleInputChange('dateOfBirth', date)}
          placeholderText="Select date"
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
        {errors.dob && <div className="error-message">{errors.dob}</div>}
      </div>

      <button type="button" onClick={handleSubmit} className="submit-button">Submit</button>
    </section>
  );
};

export default PersonalInformation;
