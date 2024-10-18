import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Make sure to import DatePicker styles
import countriesData from '../countries.json';

const AddressInformation = ({ passportExpiry, setPassportExpiry }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [availableStates, setAvailableStates] = useState([]);
  const [availableCities, setAvailableCities] = useState([]);

  // Create country options from the JSON data
  const countries = countriesData.map(country => ({
    value: country.countryName, // Using country name for selection
    label: country.countryName,
  }));

  // Update available states based on the selected country
  useEffect(() => {
    if (selectedCountry) {
      const country = countriesData.find(c => c.countryName === selectedCountry.value);
      setAvailableStates(country.states.map(state => ({
        value: state.stateName,
        label: state.stateName,
      })));
      setSelectedState(null); // Reset selected state when country changes
      setAvailableCities([]); // Clear cities when country changes
    } else {
      setAvailableStates([]);
      setAvailableCities([]);
    }
  }, [selectedCountry]);

  // Update available cities based on the selected state
  useEffect(() => {
    if (selectedState && selectedCountry) {
      const country = countriesData.find(c => c.countryName === selectedCountry.value);
      const state = country.states.find(s => s.stateName === selectedState.value);
      setAvailableCities(state.cities.map(city => ({
        value: city.cityName,
        label: city.cityName,
      })));
    } else {
      setAvailableCities([]);
    }
  }, [selectedState, selectedCountry]);

  // Handle date change for passport expiry
  const handlePassportExpiryChange = (date) => {
    setPassportExpiry(date);
  };

  return (
    <section className="form-section">
      <h2>Address & Passport Information</h2>
      <div className="form-group">
        <label>Native Country *</label>
        <Select
          options={countries}
          placeholder="Select country"
          onChange={setSelectedCountry}
        />
      </div>
      <div className="form-group">
        <label>Native State *</label>
        <Select
          options={availableStates}
          placeholder="Select state"
          onChange={setSelectedState}
          isDisabled={!selectedCountry} // Disable until a country is selected
        />
      </div>
      <div className="form-group">
        <label>Native City *</label>
        <Select
          options={availableCities}
          placeholder="Select city"
          isDisabled={!selectedState} // Disable until a state is selected
        />
      </div>
      <div className="form-group">
        <label>Postal Code *</label>
        <input type="text" placeholder="Postal Code" required />
      </div>
      <div className="form-group">
        <label>Passport No.</label>
        <input type="text" placeholder="Passport Number" />
      </div>
      <div className="form-group">
        <label>Passport Expiry</label>
        <DatePicker
          selected={passportExpiry} // Use passportExpiry state
          onChange={handlePassportExpiryChange} // Handle date change
          placeholderText="Select date"
          dateFormat="dd/MM/yyyy"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </div>
    </section>
  );
};

export default AddressInformation;
