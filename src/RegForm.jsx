import { useState } from "react";
import "./Form.css";

export const RegForm = () => {
  const [user, setUser] = useState({
    name: "Seenu Vasan",
    age: 23,
    gender: "Male",
    married: false,
    country: "India",
    bio: " I am a MCA Student"
  });

  function changeHandler(e) {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    setUser({ ...user, [name]: value });
  }

  return (
    <div className="container">
      <h1>Registration Form</h1>
      <div className="content">
        <div className="table-container">
          <table>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>{user.name}</td>
              </tr>
              <tr>
                <td>Age:</td>
                <td>{user.age}</td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td>{user.gender}</td>
              </tr>
              <tr>
                <td>Marital Status:</td>
                <td>{user.married ? "Married" : "Not Married"}</td>
              </tr>
              <tr>
                <td>Country:</td>
                <td>{user.country}</td>
              </tr>
              <tr>
                <td>Bio:</td>
                <td>{user.bio}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="form-container">
          <form>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={changeHandler}
              placeholder="Enter the Name"
              value={user.name}
            />

            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              onChange={changeHandler}
              placeholder="Enter the Age"
              value={user.age}
            />

            <div className="gender">
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="male"
                  onChange={changeHandler}
                  checked={user.gender === "Male"}
                  value="Male"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  id="female"
                  onChange={changeHandler}
                  checked={user.gender === "Female"}
                  value="Female"
                />
                Female
              </label>
            </div>

            <div className="checkbox">
              <label>
                <input
                  type="checkbox"
                  name="married"
                  id="isMarried"
                  onChange={changeHandler}
                  checked={user.married}
                />
                Is Married
              </label>
            </div>

            <label htmlFor="country">Country:</label>
            <select name="country" id="country" value={user.country} onChange={changeHandler}>
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="Dubai">Dubai</option>
            </select>

            <label htmlFor="bio">Bio:</label>
            <textarea
              name="bio"
              id="bio"
              onChange={changeHandler}
              placeholder="Write About Yourself"
              value={user.bio}
            />

            <button type="button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
