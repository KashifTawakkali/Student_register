import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import "../personal.css";

const PersonalInformation = ({ nextStep }) => {
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
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const titles = [
    { value: 'mr', label: 'Mr.' },
    { value: 'mrs', label: 'Mrs.' },
    { value: 'ms', label: 'Ms.' },
  ];

  const maritalStatusOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
    { value: 'divorce', label: 'Divorce' },
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { title, firstName, lastName, mobile, email, maritalStatus, gender, dateOfBirth } = formData;
    return title && firstName && lastName && mobile && email && maritalStatus && gender && dateOfBirth;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setIsModalOpen(true);
      return;
    }

    // Save the form data to local storage
    sessionStorage.setItem('personalInfo', JSON.stringify({
      title: formData.title.value, // Use value from selected option
      firstName: formData.firstName,
      middleName: formData.middleName,
      lastName: formData.lastName,
      mobile: formData.mobile,
      emergencyContact: formData.emergencyContact,
      email: formData.email,
      maritalStatus: formData.maritalStatus.value, // Use value from selected option
      gender: formData.gender.value, // Use value from selected option
      dateOfBirth: formData.dateOfBirth,
    }));

    // Proceed to the next step
    nextStep();
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="form-section">
      <h2>Personal Information</h2>
      <form onSubmit={handleSubmit}>

        <div className="form-row">
          <div className="form-group">
            <label>Title *</label>
            <Select
              options={titles}
              onChange={(option) => handleChange('title', option)}
              placeholder="Select title"
            />
          </div>
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              placeholder="First Name"
              required
              onChange={(e) => handleChange('firstName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Middle Name *</label>
            <input
              type="text"
              placeholder="Middle Name"
              onChange={(e) => handleChange('middleName', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              placeholder="Last Name"
              required
              onChange={(e) => handleChange('lastName', e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Mobile No. *</label>
            <input
              type="tel"
              placeholder="Mobile Number"
              required
              onChange={(e) => handleChange('mobile', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Emergency Contact No.</label>
            <input
              type="tel"
              placeholder="Emergency Contact Number"
              onChange={(e) => handleChange('emergencyContact', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Student Email ID *</label>
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Marital Status *</label>
            <Select
              options={maritalStatusOptions}
              onChange={(option) => handleChange('maritalStatus', option)}
              placeholder="Select marital status"
              required
            />
          </div>
          <div className="form-group">
            <label>Gender *</label>
            <Select
              options={genderOptions}
              onChange={(option) => handleChange('gender', option)}
              placeholder="Select gender"
              required
            />
          </div>
          <div className="form-group">
            <label>Date of Birth *</label>
            <DatePicker
              selected={formData.dateOfBirth}
              onChange={(date) => handleChange('dateOfBirth', date)}
              placeholderText="Select date"
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <p>Please fill in all required fields.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default PersonalInformation;
