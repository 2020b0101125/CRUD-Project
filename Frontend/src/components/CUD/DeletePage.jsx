import React from "react";
import axios from "axios";

function DeletePage() {
  const [userId, setUserId] = React.useState("");

  // Handle input change
  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  // Handle delete request
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission
    if (!userId.trim()) {
      alert("User ID is required!");
      return;
    }

    axios
      .delete(`http://localhost:3000/api/user/${userId}`)
      .then((response) => {
        console.log("User deleted successfully:", response.data);
        alert("User deleted successfully!");
        setUserId(""); // Reset the input field
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        alert("Error deleting user. Please try again.");
      });
  };

  return (
    <div className="form-container">
      <h1>Delete User</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>User ID:</label>
          <input
            type="text"
            name="user_id"
            value={userId}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
}

export default DeletePage;
