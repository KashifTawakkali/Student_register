import React from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';

const PersonalInformation = ({ dob, setDob, formData, setFormData, errors }) => {
  const titles = [
    { value: 'mr', label: 'Mr.' },
    { value: 'mrs', label: 'Mrs.' },
    { value: 'ms', label: 'Ms.' },
  ];

  const maritalStatusOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married' },
  ];

  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
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
          onChange={(e) => handleInputChange('mobile', e.target.value)} 
        />
        {errors.mobile && <div className="error-message">{errors.mobile}</div>}
      </div>
      <div className="form-group">
        <label>Emergency Contact No.</label>
        <input 
          type="tel" 
          placeholder="Emergency Contact Number" 
          onChange={(e) => handleInputChange('emergencyContact', e.target.value)} 
        />
      </div>
      <div className="form-group">
        <label>Student Email ID *</label>
        <input 
          type="email" 
          placeholder="Email" 
          required 
          onChange={(e) => handleInputChange('email', e.target.value)} 
        />
        {errors.email && <div className="error-message">{errors.email}</div>}
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
              onChange={(date) => handleChange('dateOfBirth', date)}
              placeholderText="Select date"
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
        {errors.dob && <div className="error-message">{errors.dob}</div>}
      </div>
    </section>
  );
};

export default PersonalInformation;
