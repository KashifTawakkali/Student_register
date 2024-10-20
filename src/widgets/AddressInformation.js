// src/widgets/AddressInformation.js
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import countriesData from '../countries.json';
import { submitAddressData } from '../API/contorller/addressController';
import { toast } from 'react-toastify';

const AddressInformation = ({ setLoading, setFormData }) => {
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [availableStates, setAvailableStates] = useState([]);
    const [availableCities, setAvailableCities] = useState([]);
    const [postalCode, setPostalCode] = useState('');
    const [passportNo, setPassportNo] = useState('');
    const [passportExpiry, setPassportExpiry] = useState(null);

    const countries = countriesData.map(country => ({
        value: country.countryName,
        label: country.countryName,
    }));

    useEffect(() => {
        if (selectedCountry) {
            const country = countriesData.find(c => c.countryName === selectedCountry.value);
            if (country && country.states) {
                setAvailableStates(country.states.map(state => ({
                    value: state.stateName,
                    label: state.stateName,
                })));
            } else {
                setAvailableStates([]); // Reset states if country not found
            }
            setSelectedState(null); // Reset state selection when country changes
            setAvailableCities([]); // Reset cities when country changes
        } else {
            setAvailableStates([]);
            setAvailableCities([]);
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedState && selectedCountry) {
            const country = countriesData.find(c => c.countryName === selectedCountry.value);
            if (country) {
                const state = country.states.find(s => s.stateName === selectedState.value);
                if (state && state.cities) {
                    setAvailableCities(state.cities.map(city => ({
                        value: city.cityName,
                        label: city.cityName,
                    })));
                } else {
                    setAvailableCities([]); // Reset cities if state not found
                }
            }
        } else {
            setAvailableCities([]);
        }
    }, [selectedState, selectedCountry]);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true); // Start loader
  
      // Prepare form data for submission
      const formDataToSubmit = {
          nativeCountry: selectedCountry?.value || '',
          nativeState: selectedState?.value || '',
          nativeCity: selectedState && availableCities.length > 0 ? availableCities[0].value : '', // Check if there are cities
          postalCode: postalCode || '',
          passportNo: passportNo || '',
          passportExpiry: passportExpiry ? passportExpiry.toISOString().split('T')[0] : '',
      };
  
      console.log("Form Data:", formDataToSubmit); // Log the form data for debugging
  
      // Validate required fields before submission
      if (!formDataToSubmit.nativeCountry || !formDataToSubmit.nativeState || !formDataToSubmit.nativeCity || 
          !formDataToSubmit.postalCode || !formDataToSubmit.passportNo || !formDataToSubmit.passportExpiry) {
          toast.error("All fields are required.");
          setLoading(false);
          return;
      }
  
      try {
          // Call the API to submit the address data
          await submitAddressData(formDataToSubmit);
          toast.success("Address data submitted successfully!");
  
          // Reset form fields
          setPostalCode('');
          setPassportNo('');
          setSelectedCountry(null);
          setSelectedState(null);
          setAvailableCities([]);
          setPassportExpiry(null);
          setFormData(prev => ({ ...prev, ...formDataToSubmit })); // Update formData in the parent
      } catch (error) {
          console.error("Error submitting address data:", error);
          toast.error("Error submitting address data!");
      } finally {
          setLoading(false); // Stop loader
      }
  };
  

    return (
        <form className="form-section" onSubmit={handleSubmit}>
            <h2>Address & Passport Information</h2>
            <div className="form-group">
                <label>Native Country *</label>
                <Select
                    options={countries}
                    placeholder="Select country"
                    onChange={setSelectedCountry}
                    value={selectedCountry} // Control the selected value
                />
            </div>
            <div className="form-group">
                <label>Native State *</label>
                <Select
                    options={availableStates}
                    placeholder="Select state"
                    onChange={setSelectedState}
                    value={selectedState} // Control the selected value
                    isDisabled={!selectedCountry}
                />
            </div>
            <div className="form-group">
                <label>Native City *</label>
                <Select
                    options={availableCities}
                    placeholder="Select city"
                    onChange={(city) => { 
                        setAvailableCities([city]);
                    }}
                    value={availableCities[0]} // Control the selected value
                    isDisabled={!selectedState}
                />
            </div>
            <div className="form-group">
                <label>Postal Code *</label>
                <input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label>Passport No.</label>
                <input
                    type="text"
                    placeholder="Passport Number"
                    value={passportNo}
                    onChange={(e) => setPassportNo(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label>Passport Expiry *</label>
                <DatePicker
                    selected={passportExpiry}
                    onChange={setPassportExpiry}
                    placeholderText="Select date"
                    dateFormat="dd/MM/yyyy"
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    required
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form>
    );
};

export default AddressInformation;
