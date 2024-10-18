import React, { useState } from 'react';
import Select from 'react-select';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';

const BackgroundInformation = () => {
  const [visaRejectionStatus, setVisaRejectionStatus] = useState(null);
  const [gapInEducation, setGapInEducation] = useState(null);

  const gapOptions = [
    { value: 'none', label: 'None' },
    { value: 'less_than_1_year', label: 'Less than 1 year' },
    { value: '1_to_2_years', label: '1 to 2 years' },
    { value: 'more_than_2_years', label: 'More than 2 years' },
  ];

  return (
    <section className="form-section">
      <h2>Background Information</h2>

      <div className="form-group">
        <label>Visa Rejection Status *</label>
        <div className="radio-group">
          <motion.label 
            whileHover={{ scale: 1.1 }} 
            className="radio-option"
          >
            <input 
              type="radio" 
              value="yes" 
              checked={visaRejectionStatus === 'yes'} 
              onChange={() => setVisaRejectionStatus('yes')} 
            />
            Yes
          </motion.label>
          <motion.label 
            whileHover={{ scale: 1.1 }} 
            className="radio-option"
          >
            <input 
              type="radio" 
              value="no" 
              checked={visaRejectionStatus === 'no'} 
              onChange={() => setVisaRejectionStatus('no')} 
            />
            No
          </motion.label>
        </div>
        <span 
          data-tip="Indicate if you have faced any visa rejections." 
          className="tooltip-trigger"
        >
          ?
        </span>
        <Tooltip place="top" type="dark" effect="float" />
      </div>

      <div className="form-group">
        <label>Gap in Education *</label>
        <Select 
          options={gapOptions} 
          placeholder="Select gap in education" 
          onChange={(option) => setGapInEducation(option.value)} 
        />
        <span 
          data-tip="Select the duration of any gaps in your education." 
          className="tooltip-trigger"
        >
          ?
        </span>
        <Tooltip place="top" type="dark" effect="float" />
      </div>
    </section>
  );
};

export default BackgroundInformation;
