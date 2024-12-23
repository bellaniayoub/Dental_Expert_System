import React, { useState } from "react";
import Layout from "./layout.js"; // Import the Layout component
import "./DiseasesPage.css"; // Import the CSS for styling

const DiseasesPage = () => {
  const diseases = [
    { code: "k0001", name: "Abscess Periodontal", description: "Description for Abscess Periodontal", image: "C:/Users/bella/Desktop/Master/Fondament_Ai/Project/Dental_expert_system/frontend/img/PeriodondalAbscess.jpg" },
    { code: "k0002", name: "Abscess Periapical", description: "Description for Abscess Periapical", image: "path/to/image2.jpg" },
    { code: "k0003", name: "Anodontia", description: "Description for Anodontia", image: "path/to/image3.jpg" },
    { code: "k0004", name: "Tooth Abrasion", description: "Description for Tooth Abrasion", image: "path/to/image4.jpg" },
    { code: "k0005", name: "Bruxism", description: "Description for Bruxism", image: "path/to/image5.jpg" },
    { code: "k0006", name: "Caries", description: "Description for Caries", image: "path/to/image6.jpg" },
    { code: "k0007", name: "Dental Erosion", description: "Description for Dental Erosion", image: "path/to/image7.jpg" },
    { code: "k0008", name: "Gingivitis", description: "Description for Gingivitis", image: "path/to/image8.jpg" },
    { code: "k0009", name: "Halitosis", description: "Description for Halitosis", image: "path/to/image9.jpg" },
    { code: "k0010", name: "Oral Cancer", description: "Description for Oral Cancer", image: "path/to/image10.jpg" },
  ];

  const [selectedDisease, setSelectedDisease] = useState(diseases[0]);

  return (
    <Layout>
      <div className="diseases-page">
        <div className="side-nav">
          <h2>Diseases</h2>
          <ul>
            {diseases.map((disease) => (
              <li key={disease.code} onClick={() => setSelectedDisease(disease)}>
                {disease.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="disease-details">
          <h1>{selectedDisease.name}</h1>
          <img src={selectedDisease.image} alt={selectedDisease.name} className="disease-image" />
          <p>{selectedDisease.description}</p>
        </div>
      </div>
    </Layout>
  );
};

export default DiseasesPage;
