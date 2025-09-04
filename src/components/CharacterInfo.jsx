import React from "react";
import { useState } from "react";
import "./CharacterInfo.css";

function CharacterInfo() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [occupation, setOccupation] = useState("");
  const [profileImage, setProfileImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="character-info">
      {/* Left side: form inputs */}
      <div className="character-details">
        <div className="top-section">
        <label className="top-bar">
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label className="top-bar">
          Age:
          <input
            type="number"
            min="0"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <br />
        </div>
        <label className="bottom-bar">
          Occupation:
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
          />
        </label>
      </div>

      {/* Right side: profile picture */}
      <div className="character-photo">
        {profileImage ? (
          <img src={profileImage} alt="Profile" />
        ) : (
          <div className="photo-placeholder">No Image</div>
        )}
        <br />
        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}   
        />

        <label htmlFor="fileUpload" className="upload-button">
          Upload Photo
        </label>
      </div>
    </div>
  );
}

export default CharacterInfo;
