import React, { useEffect, useState } from 'react';
import { getPreview } from '../API/contorller/preview'; // Import the controller
import '../css/DataPreview.css'; // Optional: Include your CSS for styling

const DataPreview = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get the email from local storage
        const email = localStorage.getItem('studentEmailId');
        // Fetch data using the controller
        const responseData = await getPreview(email);
        setData(responseData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data: {error}</p>;

  return (
    <div>
      <h2>Combined Data Preview</h2>
      {data && (
        <div>
          <h3>Personal Data</h3>
          {data.personalData.map((item) => (
            <div key={item._id}>
              <p>Title: {item.title}</p>
              <p>First Name: {item.firstName}</p>
              <p>Middle Name: {item.middleName}</p>
              <p>Last Name: {item.lastName}</p>
              <p>Mobile No: {item.mobileNo}</p>
              <p>Emergency Contact No: {item.emergencyContactNo}</p>
              <p>Student Email ID: {item.studentEmailId}</p>
              <p>Marital Status: {item.maritalStatus}</p>
              <p>Gender: {item.gender}</p>
              <p>Date of Birth: {new Date(item.dateOfBirth).toLocaleDateString()}</p>
            </div>
          ))}

          <h3>Address Data</h3>
          {data.addressData.map((item) => (
            <div key={item._id}>
              <p>Native Country: {item.nativeCountry}</p>
              <p>Native State: {item.nativeState}</p>
              <p>Native City: {item.nativeCity}</p>
              <p>Postal Code: {item.postalCode}</p>
              <p>Passport No: {item.passportNo}</p>
              <p>Passport Expiry: {new Date(item.passportExpiry).toLocaleDateString()}</p>
            </div>
          ))}

          <h3>Education Data</h3>
          {data.educationData.map((item) => (
            <div key={item._id}>
              <p>Interested Country: {item.interestedCountry}</p>
              <p>English Proficiency Test: {item.englishProficiencyTest}</p>
              <p>Test Score: {item.testScore}</p>
              <p>Additional Education Board: {item.additionalEducationBoard}</p>
            </div>
          ))}

          <h3>Visa Status Data</h3>
          {data.visaStatusData.map((item) => (
            <div key={item._id}>
              <p>Visa Rejection Status: {item.visaRejectionStatus}</p>
              <p>Gap in Education: {item.gapInEducation}</p>
            </div>
          ))}

          <h3>Uploaded Data</h3>
          {data.uploadData.map((item) => (
            <div key={item._id}>
              <p>Upload ID: {item._id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DataPreview;
