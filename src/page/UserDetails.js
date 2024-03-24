import React from 'react'
import { useState } from 'react'

const UserDetails = () => {
    const [addresses, setAddresses] = useState([
        {
            id: 1,
            houseNo: "",
            street: "",
            landMark: "",
            country: "",
            state: "",
            city: "",
            pincode: ""
        }
    ])

    //form data
    const [profile, setProfile] = useState(null)
    const [inputs, setInputs] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    })


    //error handle
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        houseNo: "",
        street: "",
        landMark: "",
        country: "",
        state: "",
        city: "",
        pincode: ""
    })


    // validate form
    console.log(errors)
    // const formValidation = () => {
    //     const validEmailRegex = RegExp(
    //         /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    //     );

    //     const validPhoneRegex = /^[6-9]\d{9}$/
    //     let validateForm = true;
    //     const newErrors = { ...errors };

    //     if (inputs.firstName === "") {
    //         validateForm = false;
    //         newErrors.firstName = "Please enter your first name";
    //     } else {
    //         newErrors.firstName = "";
    //     }

    //     if (inputs.lastName === "") {
    //         validateForm = false;
    //         newErrors.lastName = "Please enter your last name";
    //     } else {
    //         newErrors.lastName = "";
    //     }

    //     if (inputs.email === "") {
    //         validateForm = false;
    //         newErrors.email = "Please Enter Email";
    //     } else if (!validEmailRegex.test(inputs.email)) {
    //         newErrors.email = "Please Enter valid Email";
    //     } else {
    //         newErrors.email = "";
    //     }

    //     if (inputs.phone === "") {
    //         validateForm = false;
    //         newErrors.phone = "Please Enter phone";
    //     } else if (!validPhoneRegex.test(inputs.phone)) {
    //         newErrors.phone = "Please Enter valid phone";
    //     } else {
    //         newErrors.phone = "";
    //     }
    //     if (addresses[0].houseNo === "") {
    //         validateForm = false
    //         newErrors.houseNo = "Enter House number"
    //     } else {
    //         newErrors.houseNo = ""
    //     }
    //     if (addresses[0].street === "") {
    //         validateForm = false
    //         newErrors.street = "Enter street number"
    //     } else {
    //         newErrors.street = ""
    //     }
    //     if (addresses[0].landMark === "") {
    //         validateForm = false
    //         newErrors.landMark = "Enter land Mark name"
    //     } else {
    //         newErrors.landMark = ""
    //     }

    //     if (addresses[0].country === "") {
    //         validateForm = false
    //         newErrors.country = "Enter country name"
    //     } else {
    //         newErrors.country = ""
    //     }

    //     if (addresses[0].state === "") {
    //         validateForm = false
    //         newErrors.state = "Enter state name"
    //     } else {
    //         newErrors.state = ""
    //     }

    //     if (addresses[0].city === "") {
    //         validateForm = false
    //         newErrors.city = "Enter city name"
    //     } else {
    //         newErrors.city = ""
    //     }

    //     if (addresses[0].pincode === "") {
    //         validateForm = false
    //         newErrors.pincode = "Enter pin code number"
    //     } else {
    //         newErrors.pincode = ""
    //     }
    //     // {addresses.map((address)=>{

    //     // })}

    //     setErrors(newErrors);
    //     return validateForm;
    // };

    const formValidation = () => {
        const validEmailRegex = RegExp(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );

        const validPhoneRegex = /^[6-9]\d{9}$/;
        let validateForm = true;
        const newErrors = { ...errors };

        if (inputs.firstName === "") {
            validateForm = false;
            newErrors.firstName = "Please enter your first name";
        } else {
            newErrors.firstName = "";
        }

        if (inputs.lastName === "") {
            validateForm = false;
            newErrors.lastName = "Please enter your last name";
        } else {
            newErrors.lastName = "";
        }

        if (inputs.email === "") {
            validateForm = false;
            newErrors.email = "Please Enter Email";
        } else if (!validEmailRegex.test(inputs.email)) {
            newErrors.email = "Please Enter valid Email";
        } else {
            newErrors.email = "";
        }

        if (inputs.phone === "") {
            validateForm = false;
            newErrors.phone = "Please Enter phone";
        } else if (!validPhoneRegex.test(inputs.phone)) {
            newErrors.phone = "Please Enter valid phone";
        } else {
            newErrors.phone = "";
        }

        // Reset address errors
        addresses.forEach((address, index) => {
            newErrors[`houseNo_${index}`] = "";
            newErrors[`street_${index}`] = "";
            newErrors[`landMark_${index}`] = "";
            newErrors[`country_${index}`] = "";
            newErrors[`state_${index}`] = "";
            newErrors[`city_${index}`] = "";
            newErrors[`pincode_${index}`] = "";

            if (address.houseNo === "") {
                validateForm = false;
                newErrors[`houseNo_${index}`] = "Enter House number";
            }

            if (address.street === "") {
                validateForm = false;
                newErrors[`street_${index}`] = "Enter street number";
            }

            if (address.landMark === "") {
                validateForm = false;
                newErrors[`landMark_${index}`] = "Enter land Mark name";
            }

            if (address.country === "") {
                validateForm = false;
                newErrors[`country_${index}`] = "Enter country name";
            }

            if (address.state === "") {
                validateForm = false;
                newErrors[`state_${index}`] = "Enter state name";
            }

            if (address.city === "") {
                validateForm = false;
                newErrors[`city_${index}`] = "Enter city name";
            }

            if (address.pincode === "") {
                validateForm = false;
                newErrors[`pincode_${index}`] = "Enter pin code number";
            }
        });

        setErrors(newErrors);
        return validateForm;
    };
    const handleChange = (e, index) => {
        const { name, value } = e.target;
    
        // Update inputs or addresses based on the field being changed
        if (name === "firstName" || name === "lastName" || name === "email" || name === "phone") {
            setInputs({ ...inputs, [name]: value });
        } else {
            const updatedAddresses = [...addresses];
            const addressField = name.split('_')[0]; // Extracting the field name from the name attribute
            updatedAddresses[index] = { ...updatedAddresses[index], [addressField]: value };
            setAddresses(updatedAddresses);
        }
    
        // Clear error for the specific field being updated
        const newErrors = { ...errors };
    
        // Clear error for firstName, lastName, email, and phone fields
        if (name === "firstName") {
            newErrors.firstName = "";
        } else if (name === "lastName") {
            newErrors.lastName = "";
        } else if (name === "email") {
            newErrors.email = "";
        } else if (name === "phone") {
            newErrors.phone = "";
        }
    
        // Clear error for the specific address field being updated
        newErrors[`${name}_${index}`] = "";
        setErrors(newErrors);
    }
    
    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValidation())
        if(formValidation()){
            console.log({ inputs, addresses, profile })
        }
 
    }

    // add and remove address
    const handleAddAddress = () => {
        setAddresses(
            [...addresses,
            {
                id: addresses.length + 1,
                houseNo: "",
                street: "",
                landMark: "",
                country: "",
                state: "",
                city: "",
                pincode: ""
            }]);
    }


    const removeAddressHandler = (id) => {
        const remove = addresses.filter((address) => address.id !== id)
        setAddresses(remove)
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <div className='form-wrapper'>
                    <div className='form-name-input'>
                        <div className='form-input'>
                            <label>First Name<span style={{ color: "red" }}>*</span></label>
                            <input
                                type='text'
                                placeholder='Enter First Name'
                                value={inputs.firstName}
                                name='firstName'
                                onChange={handleChange}
                            />
                           {errors["firstName"] && <span className='error-message'>{errors["firstName"]}</span>}
                        </div>
                        <div className='form-input'>
                            <label>Last Name<span style={{ color: "red" }}>*</span></label>
                            <input
                                type='text'
                                placeholder='Enter Last Name'
                                value={inputs.lastName}
                                name='lastName'
                                onChange={handleChange}
                            />
                            {errors.lastName && <span className='error-message'>{errors.lastName}</span>}
                        </div>
                    </div>
                    <div className='form-name-input'>
                        <div className='form-input'>
                            <label>Email<span style={{ color: "red" }}>*</span></label>
                            <input
                                type='text'
                                placeholder='Enter Email'
                                value={inputs.email}
                                name='email'
                                onChange={handleChange}
                            />
                            {errors.email && <span className='error-message'>{errors.email}</span>}
                        </div>
                        <div className='form-input'>
                            <label>Phone<span style={{ color: "red" }}>*</span></label>
                            <input
                                type='text'
                                placeholder='Enter Phone Number'
                                value={inputs.phone}
                                name='phone'
                                onChange={handleChange}
                            />
                            {errors.phone && <span className='error-message'>{errors.phone}</span>}
                        </div>
                    </div>
                    <div className='form-input'>
                        <label>Upload Image</label>
                        <input
                            type='file'
                            placeholder='Enter Last Name'
                            name='profile'
                            onChange={(e) => setProfile(e.target.files[0])}
                        />
                    </div>
                    <div className='address-field'>
                        <span>Address</span>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                onClick={handleAddAddress}
                            >
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                        </span>
                    </div>
                    {/* {addresses.map((address, index) => {
                        return (
                            <div key={address.id}>
                                <div className='form-name-input'>
                                    <div style={{ marginTop: "10px" }} className='form-input'>
                                        <label>House No<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter House No.'
                                            value={address.houseNo}
                                            name='houseNo'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors.houseNo && <span className='error-message'>{errors.houseNo}</span>}

                                    </div>
                                    <div style={{ marginTop: "10px" }} className='form-input'>
                                        <label>Street Name<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter Street Name'
                                            value={address.street}
                                            name='street'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors.street && <span className='error-message'>{errors.street}</span>}

                                    </div>
                                </div>
                                <div className='form-name-input'>
                                    <div className='form-input'>
                                        <label>Land Mark<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter Land Mark'
                                            value={address.landMark}
                                            name='landMark'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors.landMark && <span className='error-message'>{errors.landMark}</span>}

                                    </div>
                                    <div className='form-input'>
                                        <label>Country Name<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter Country Name'
                                            value={address.country}
                                            name='country'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors.country && <span className='error-message'>{errors.country}</span>}

                                    </div>
                                </div>
                                <div className='form-name-input'>
                                    <div className='form-input'>
                                        <label>State Name<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter State Name'
                                            value={address.state}
                                            name='state'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors.state && <span className='error-message'>{errors.state}</span>}

                                    </div>
                                    <div className='form-input'>
                                        <label>City Name<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter City Name'
                                            value={address.city}
                                            name='city'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors.city && <span className='error-message'>{errors.city}</span>}

                                    </div>
                                </div>
                                <div className='form-input'>
                                    <label>Pin Code<span style={{ color: "red" }}>*</span></label>
                                    <input
                                        type='text'
                                        placeholder='Enter Pin code'
                                        value={address.pincode}
                                        name='pincode'
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                    {errors.pincode && <span className='error-message'>{errors.pincode}</span>}

                                </div>
                                {addresses.length > 1 &&
                                    <div className='delete-svg'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            onClick={() => removeAddressHandler(address.id)}
                                        >
                                            <path d="M3 6h18m-3 0l-2 13a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.5L5 6M9 6V4h6v2M16 6l1-1-1-1-1 1M8 21h8" />
                                        </svg>
                                    </div>
                                }
                                <hr />
                            </div>
                        )
                    })} */}
                    {addresses.map((address, index) => {
                        return (
                            <div key={address.id}>
                                <div className='form-name-input'>
                                    <div style={{ marginTop: "10px" }} className='form-input'>
                                        <label>House No<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter House No.'
                                            value={address.houseNo}
                                            name='houseNo'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors[`houseNo_${index}`] && <span className='error-message'>{errors[`houseNo_${index}`]}</span>}
                                    </div>
                                    <div style={{ marginTop: "10px" }} className='form-input'>
                                        <label>Street Name<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter Street Name'
                                            value={address.street}
                                            name='street'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors[`street_${index}`] && <span className='error-message'>{errors[`street_${index}`]}</span>}
                                    </div>
                                </div>
                                <div className='form-name-input'>
                                    <div className='form-input'>
                                        <label>Land Mark<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter Land Mark'
                                            value={address.landMark}
                                            name='landMark'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors[`landMark_${index}`] && <span className='error-message'>{errors[`landMark_${index}`]}</span>}
                                    </div>
                                    <div className='form-input'>
                                        <label>Country Name<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter Country Name'
                                            value={address.country}
                                            name='country'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors[`country_${index}`] && <span className='error-message'>{errors[`country_${index}`]}</span>}
                                    </div>
                                </div>
                                <div className='form-name-input'>
                                    <div className='form-input'>
                                        <label>State Name<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter State Name'
                                            value={address.state}
                                            name='state'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors[`state_${index}`] && <span className='error-message'>{errors[`state_${index}`]}</span>}
                                    </div>
                                    <div className='form-input'>
                                        <label>City Name<span style={{ color: "red" }}>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter City Name'
                                            value={address.city}
                                            name='city'
                                            onChange={(e) => handleChange(e, index)}
                                        />
                                        {errors[`city_${index}`] && <span className='error-message'>{errors[`city_${index}`]}</span>}
                                    </div>
                                </div>
                                <div className='form-input'>
                                    <label>Pin Code<span style={{ color: "red" }}>*</span></label>
                                    <input
                                        type='text'
                                        placeholder='Enter Pin code'
                                        value={address.pincode}
                                        name='pincode'
                                        onChange={(e) => handleChange(e, index)}
                                    />
                                    {errors[`pincode_${index}`] && <span className='error-message'>{errors[`pincode_${index}`]}</span>}
                                </div>
                                {addresses.length > 1 &&
                                    <div className='delete-svg'>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#000000"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            onClick={() => removeAddressHandler(address.id)}
                                        >
                                            <path d="M3 6h18m-3 0l-2 13a2 2 0 0 1-2 1.5H9a2 2 0 0 1-2-1.5L5 6M9 6V4h6v2M16 6l1-1-1-1-1 1M8 21h8" />
                                        </svg>
                                    </div>
                                }
                                <hr />
                            </div>
                        )
                    })}

                    <div className='save-form'>
                        <button>Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default UserDetails