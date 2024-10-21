// src/components/CountryAndProficiency.js
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import countriesData from '../countries.json';
import { submitCountryEngData } from '../API/contorller/ConutryEngController'; 
import { toast } from 'react-toastify';

const proficiencyTests = [
  { value: 'IELTS', label: 'IELTS' },
  { value: 'TOEFL', label: 'TOEFL' },
  { value: 'PTE', label: 'PTE' },
  { value: 'None', label: 'None' },
];

const CountryAndProficiency = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedTest, setSelectedTest] = useState(null);
  const [score, setScore] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  // Create country options from the JSON data
  const countries = countriesData.map(country => ({
    value: country.countryName,
    label: country.countryName,
  }));

  // Clear the score and additional details when the proficiency test changes
  useEffect(() => {
    if (selectedTest) {
      if (selectedTest.value === 'None') {
        setAdditionalDetails('');
      } else {
        setScore('');
      }
    }
  }, [selectedTest]);

  // Handle score change for proficiency tests
  const handleScoreChange = (e) => {
    setScore(e.target.value);
  };

  // Handle additional details change for "None" option
  const handleAdditionalDetailsChange = (e) => {
    setAdditionalDetails(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Correct payload structure
    const formDataToSubmit = {
      interestedCountry: selectedCountry?.value || '',          // Update this key
      englishProficiencyTest: selectedTest?.value || '',        // Update this key
      testScore: score || '',                                   // Update this key
      additionalEducationBoard: additionalDetails || '',        // Update this key
    };
  
    console.log("Form data being submitted:", formDataToSubmit); // log form data
    setLoading(true);
  
    try {
      // Call the API to submit the data
      await submitCountryEngData(formDataToSubmit);
      toast.success("Data submitted successfully!");
  
      // Reset form fields after successful submission
      setSelectedCountry(null);
      setSelectedTest(null);
      setScore('');
      setAdditionalDetails('');
    } catch (error) {
      console.error("Error submitting data:", error.response ? error.response.data : error.message);
      toast.error("Error submitting data!");
    } finally {
      setLoading(false);
    }
  };
  
  

  return (
    <section className="form-section">
      <h2>Country and English Proficiency</h2>
      <form onSubmit={handleSubmit}> {/* Wrap fields in a form */}
        <div className="form-group">
          <label>Interested Country *</label>
          <Select
            options={countries}
            placeholder="Select country"
            onChange={setSelectedCountry}
            value={selectedCountry} // Control the selected value
          />
        </div>

        <div className="form-group">
          <label>English Proficiency Test *</label>
          <Select
            options={proficiencyTests}
            placeholder="Select test"
            onChange={setSelectedTest}
            value={selectedTest} // Control the selected value
          />
        </div>

        {selectedTest && selectedTest.value !== 'None' && (
          <div className="form-group">
            <label>Score *</label>
            <input
              type="text"
              placeholder="Enter your score"
              value={score}
              onChange={handleScoreChange}
              required
            />
          </div>
        )}

        {selectedTest && selectedTest.value !== 'None' && (
          <div className="form-group">
            <label>Additional Education Board Details</label>
            <input
              type="text"
              placeholder="Enter details"
              value={additionalDetails}
              onChange={handleAdditionalDetailsChange}
            />
          </div>
        )}

        <button type="submit" onClick={handleSubmit} disabled={loading}> 
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
};

export default CountryAndProficiency;
