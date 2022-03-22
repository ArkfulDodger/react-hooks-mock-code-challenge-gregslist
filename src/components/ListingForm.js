import React, { useState, useEffect } from "react";

// Default Form Values
const defaultForm = {
    description: "",
    image: "",
    location: ""
}


function ListingForm ({ addListing }) {
    // State and Variable Declaration
    const [formData, setFormData] = useState(defaultForm);
    const { description, image, location } = formData;

    // Reset formData to default values
    const resetForm = () => setFormData(defaultForm);

    // Handles form onSubmit event
    const handleSubmit = (e) => {
        e.preventDefault();

        addListing(formData);

        resetForm();
    }

    // Handles input onChange events: input name attributes must match formData keys
    const handleFormChange = ({ target: { type, name, value, checked } }) => {
        const newValue = type === 'checkbox' ? checked : value; 
        const updatedFormData = { ...formData, [name]: newValue };

        setFormData(updatedFormData);
    }


    return (
        <header>
            <h2>Create Listing:</h2>
            <form className="searchbar" onSubmit={handleSubmit} >
                <label>Description:</label>
                <input type="text"name="description" value={description} onChange={handleFormChange}></input><br></br>
                <label>Image URL:</label>
                <input type="text" name="image" value={image} onChange={handleFormChange}></input><br></br>
                <label>Location:</label>
                <input type="text" name="location" value={location} onChange={handleFormChange}></input><br></br>
                <button type="submit">Submit</button>
            </form>
        </header>
    );
}

export default ListingForm;