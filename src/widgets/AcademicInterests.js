import React, { useState } from 'react';
import Select from 'react-select';
import { motion } from 'framer-motion';
import countriesData from '../countries.json'; 

const EducationalBackground = () => {
  const [qualifications, setQualifications] = useState([]);

  // Create country options from the JSON data
  const countries = countriesData.map(country => ({
    value: country.code2, // Using code2 for country selection
    label: country.name,
  }));

  const handleAddQualification = () => {
    setQualifications([...qualifications, { qualification: '', institution: '', percentage: '', passingYear: '', country: '' }]);
  };

  const handleChange = (index, field, value) => {
    const newQualifications = [...qualifications];
    newQualifications[index][field] = value;
    setQualifications(newQualifications);
  };

  return (
    <section className="form-section">
      <h2>Educational Background</h2>
      {qualifications.map((qual, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, height: 0 }} 
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="qualification-form"
        >
          <div className="form-group">
            <label>Qualification *</label>
            <input 
              type="text" 
              placeholder="Enter qualification" 
              value={qual.qualification} 
              onChange={(e) => handleChange(index, 'qualification', e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Institution/Board/University *</label>
            <input 
              type="text" 
              placeholder="Enter institution" 
              value={qual.institution} 
              onChange={(e) => handleChange(index, 'institution', e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Percentage *</label>
            <input 
              type="number" 
              placeholder="Enter percentage" 
              value={qual.percentage} 
              onChange={(e) => handleChange(index, 'percentage', e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Passing Year *</label>
            <input 
              type="number" 
              placeholder="Enter passing year" 
              value={qual.passingYear} 
              onChange={(e) => handleChange(index, 'passingYear', e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label>Country *</label>
            <Select 
              options={countries} 
              placeholder="Select country" 
              onChange={(option) => handleChange(index, 'country', option.value)} 
              required 
            />
          </div>
        </motion.div>
      ))}
      <button onClick={handleAddQualification} className="add-button">
        Add Another Qualification
      </button>
    </section>
  );
};

export default EducationalBackground;
