import React, { useState } from 'react';
import Select from 'react-select';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { submitVissData } from '../API/contorller/backgroundController'; 
import { toast } from 'react-toastify'; 
import '../css/BackgroundInformation.css'; 

const BackgroundInformation = () => {
  const [visaRejectionStatus, setVisaRejectionStatus] = useState(null);
  const [gapInEducation, setGapInEducation] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const gapOptions = [
    { value: 'none', label: 'None' },
    { value: 'less_than_1_year', label: 'Less than 1 year' },
    { value: '1_to_2_years', label: '1 to 2 years' },
    { value: 'more_than_2_years', label: 'More than 2 years' },
  ];

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoading(true); // Start loading state

    // Prepare data for submission with proper casing
    const formData = {
      visaRejectionStatus: visaRejectionStatus === 'yes' ? 'Yes' : 'No', // Adjust casing
      gapInEducation: gapInEducation === '1_to_2_years' ? '1-2 years' : gapInEducation, // Adjust gap format if necessary
    };

    try {
      // Call the API to submit the data
      await submitVissData(formData);
      toast.success("Background information submitted successfully!");

      // Reset form fields after successful submission
      setVisaRejectionStatus(null);
      setGapInEducation(null);
    } catch (error) {
      console.error("Error submitting background information:", error);
      toast.error("Error submitting background information!");
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <section className="form-section">
      <h2>Background Information</h2>
      <form onSubmit={handleSubmit}> {/* Wrap fields in a form */}
        <div className="form-group">
          <label>Visa Rejection Status *</label>
          <div className="radio-group">
            <motion.label 
              whileHover={{ scale: 1.1 }} 
              whileTap={{ scale: 0.9 }} // Added bounce effect
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
              whileTap={{ scale: 0.9 }} // Added bounce effect
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
          />
          <Tooltip 
            place="top" 
            type="dark" 
            effect="float" 
            style={{ transition: 'opacity 0.3s ease-in-out' }}
          />
        </div>

        <div className="form-group">
          <label>Gap in Education *</label>
          <Select 
            options={gapOptions} 
            placeholder="Select gap in education" 
            onChange={(option) => setGapInEducation(option.value)} 
            styles={{
              control: (base) => ({
                ...base,
                transition: 'all 0.3s ease', 
                marginTop: '0.5rem',
              }),
            }}
          />
          <span 
            data-tip="Select the duration of any gaps in your education." 
            className="tooltip-trigger"
          />
          <Tooltip 
            place="top" 
            type="dark" 
            effect="float" 
            style={{ transition: 'opacity 0.3s ease-in-out' }} 
          />
        </div>

        <button type="submit" onClick={handleSubmit} disabled={loading}> {/* Submit button */}
          {loading ? "Submitting..." : "Submit Background Information"}
        </button>
      </form>
    </section>
  );
};

export default BackgroundInformation;
