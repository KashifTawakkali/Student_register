  import React, { useEffect, useState } from 'react';
  import Select from 'react-select';
  import countriesData from '../countries.json';

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

    return (
      <section className="form-section">
        <h2>Country and English Proficiency</h2>
        
        <div className="form-group">
          <label>Interested Country *</label>
          <Select
            options={countries}
            placeholder="Select country"
            onChange={setSelectedCountry}
          />
        </div>

        <div className="form-group">
          <label>English Proficiency Test *</label>
          <Select
            options={proficiencyTests}
            placeholder="Select test"
            onChange={setSelectedTest}
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

        {selectedTest && selectedTest.value === 'None' && (
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
      </section>
    );
  };

  export default CountryAndProficiency;
