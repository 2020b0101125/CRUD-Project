import React from "react";
import axios from "axios";
function CreatePage() {
  const [formData, setFormData] = React.useState({
    user_id: "",
    user_name: "",
    user_designation_id: "",
    user_role: "",
    user_contact: "",
    user_email: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from reloading the page
    axios
      .post("http://localhost:3000/api/user", formData)
      .then((response) => {
        console.log("User created successfully:", response.data);
        alert("User created successfully!");
        setFormData({
          user_id: "",
          user_name: "",
          user_designation_id: "",
          user_role: "",
          user_contact: "",
          user_email: "",
        }); // Reset the form
      })
      .catch((error) => {
        console.error("Error creating user:", error);
        alert("Error creating user. Please try again.");
      });
  };

  return (
    <div className="form-container">
      <h1>Create New User</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="user_id"
            value={formData.user_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Designation ID:</label>
          <input
            type="text"
            name="user_designation_id"
            value={formData.user_designation_id}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Role:</label>
          <input
            type="text"
            name="user_role"
            value={formData.user_role}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Contact:</label>
          <input
            type="text"
            name="user_contact"
            value={formData.user_contact}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreatePage;
