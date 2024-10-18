import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EducationalBackground = () => {
  const [qualifications, setQualifications] = useState([
    { qualification: '', institution: '', percentage: '', passingYear: '', country: '' },
  ]);

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const updatedQualifications = [...qualifications];
    updatedQualifications[index][name] = value;
    setQualifications(updatedQualifications);
  };

  const addQualification = () => {
    setQualifications([
      ...qualifications,
      { qualification: '', institution: '', percentage: '', passingYear: '', country: '' },
    ]);
  };

  return (
    <section className="form-section">
      <h2>Educational Background</h2>
      {qualifications.map((qual, index) => (
        <motion.div
          key={index}
          className="qualification-entry"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="form-group">
            <label>Qualification *</label>
            <input
              type="text"
              name="qualification"
              value={qual.qualification}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Institution/Board/University *</label>
            <input
              type="text"
              name="institution"
              value={qual.institution}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
          <div className="form-group">
            <label>Percentage *</label>
            <input
              type="number"
              name="percentage"
              value={qual.percentage}
              onChange={(e) => handleChange(index, e)}
              required
              min="0"
              max="100"
            />
          </div>
          <div className="form-group">
            <label>Passing Year *</label>
            <input
              type="number"
              name="passingYear"
              value={qual.passingYear}
              onChange={(e) => handleChange(index, e)}
              required
              min="1900"
              max={new Date().getFullYear()}
            />
          </div>
          <div className="form-group">
            <label>Country *</label>
            <input
              type="text"
              name="country"
              value={qual.country}
              onChange={(e) => handleChange(index, e)}
              required
            />
          </div>
        </motion.div>
      ))}
      <button type="button" onClick={addQualification}>Add Another Qualification</button>
    </section>
  );
};

export default EducationalBackground;
