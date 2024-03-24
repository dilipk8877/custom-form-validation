import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    image: null,
    addresses: [{
      houseNumber: '',
      streetName: '',
      landmark: '',
      country: '',
      state: '',
      city: ''
    }]
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    image: '',
    addresses: [{
      houseNumber: '',
      streetName: '',
      landmark: '',
      country: '',
      state: '',
      city: ''
    }]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    if (name === 'image') {
      setFormData({ ...formData, [name]: e.target.files[0] });
      return;
    } else if (name.startsWith('address')) {
      const { parentName, fieldName } = e.target.dataset;
      const newAddresses = [...formData.addresses];
      newAddresses[index][fieldName] = value;
      setFormData({ ...formData, addresses: newAddresses });
      newErrors = validateAddressFields(index);
    } else {
      setFormData({ ...formData, [name]: value });
      newErrors[name] = validateField(name, value);
    }

    setErrors(newErrors);
  };

  const validateField = (fieldName, value) => {
    if (!value || value.trim() === '') {
      return `${fieldName} is required`;
    } else if (value.trim().length < 2) {
      return `${fieldName} must be at least 2 characters long`;
    }
    return '';
  };

  const validateAddressFields = (index) => {
    const newErrors = [...errors.addresses];
    const address = formData.addresses[index];
    const errorMessages = Object.keys(address).reduce((acc, key) => {
      const errorMessage = validateField(key, address[key]);
      if (errorMessage) {
        acc.push({ [key]: errorMessage });
      }
      return acc;
    }, []);

    newErrors[index] = errorMessages;
    return newErrors;
  };

  const handleAddAddress = () => {
    setFormData({
      ...formData,
      addresses: [...formData.addresses, { houseNumber: '', streetName: '', landmark: '', country: '', state: '', city: '' }]
    });
    setErrors({
      ...errors,
      addresses: [...errors.addresses, []]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = { ...errors };

    const errorMessages = Object.keys(formData).reduce((acc, key) => {
      const errorMessage = validateField(key, formData[key]);
      if (errorMessage) {
        acc[key] = errorMessage;
      }
      return acc;
    }, {});

    newErrors.addresses = formData.addresses.map((address, index) => validateAddressFields(index));
    setErrors(newErrors);

    if (!Object.values(newErrors).some(val => val !== '')) {
      console.log(formData);
      // You can submit the form here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <span>{errors.firstName}</span>}
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <span>{errors.lastName}</span>}
      </label>
      <br />
      <label>
        Image Upload:
        <input type="file" name="image" onChange={handleChange} />
        {errors.image && <span>{errors.image}</span>}
      </label>
      <br />
      {formData.addresses.map((address, index) => (
        <div key={index}>
          <label>
            House Number:
            <input type="text" name={`address${index}`} data-parent-name="addresses" data-field-name="houseNumber" value={address.houseNumber} onChange={(e) => handleChange(e, index)} />
            {errors.addresses[index] && errors.addresses[index].houseNumber && <span>{errors.addresses[index].houseNumber}</span>}
          </label>
          <br />
          <label>
            Street Name:
            <input type="text" name={`address${index}`} data-parent-name="addresses" data-field-name="streetName" value={address.streetName} onChange={(e) => handleChange(e, index)} />
            {errors.addresses[index] && errors.addresses[index].streetName && <span>{errors.addresses[index].streetName}</span>}
          </label>
          <br />
          <label>
            Landmark:
            <input type="text" name={`address${index}`} data-parent-name="addresses" data-field-name="landmark" value={address.landmark} onChange={(e) => handleChange(e, index)} />
            {errors.addresses[index] && errors.addresses[index].landmark && <span>{errors.addresses[index].landmark}</span>}
          </label>
          <br />
          <label>
            Country:
            <input type="text" name={`address${index}`} data-parent-name="addresses" data-field-name="country" value={address.country} onChange={(e) => handleChange(e, index)} />
            {errors.addresses[index] && errors.addresses[index].country && <span>{errors.addresses[index].country}</span>}
          </label>
          <br />
          <label>
            State:
            <input type="text" name={`address${index}`} data-parent-name="addresses" data-field-name="state" value={address.state} onChange={(e) => handleChange(e, index)} />
            {errors.addresses[index] && errors.addresses[index].state && <span>{errors.addresses[index].state}</span>}
          </label>
          <br />
          <label>
            City:
            <input type="text" name={`address${index}`} data-parent-name="addresses" data-field-name="city" value={address.city} onChange={(e) => handleChange(e, index)} />
            {errors.addresses[index] && errors.addresses[index].city && <span>{errors.addresses[index].city}</span>}
          </label>
          <br />
        </div>
      ))}
      <button type="button" onClick={handleAddAddress}>Add Address</button>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
