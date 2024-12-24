import React, { useState, useEffect } from "react";
import Layout from "./layout.js"; // Import the Layout component
import "./App.css";

const Home = () => {
  const [selectedSection, setSelectedSection] = useState("general");
  const [checkedQuestions, setCheckedQuestions] = useState({});
  const [diagnosis, setDiagnosis] = useState(null); // State for diagnosis result
  const dentalMalignancies = {
    "k0001": "Abscess Periodontal",
    "k0002": "Abscess Periapical",
    "k0003": "Anodontia",
    "k0004": "Tooth Abrasion",
    "k0005": "Bruxism",
    "k0006": "Gingivitis",
    "k0007": "Gums Purulent",
    "k0008": "Tooth Perforated",
    "k0009": "Fractures Tooth",
    "k0010": "Periodontitis"
  };
  useEffect(() => {
    setSelectedSection("general"); // Automatically select the first button
  }, []);

  // Questions for each section
  const questions = {
    tooth: [
      "Do you find it hard to chew food?",
      "Are your gums swollen or red?",
      "Have you been experiencing a fever?",
      "Do your gums feel painful or tender, even without touching them?",
      "Have you noticed any pus or festering around your gums or teeth?",
      "Do you feel pain when opening your mouth?",
      "Do you have a toothache or throbbing pain in your teeth?",
      "Are your teeth more sensitive than usual?",
      "Do you have sores or pockets between your teeth and gums?",
      "Have you noticed your gums forming a circular shape?",
      "Do your gums feel soft or inconsistent in texture?",
      "Are your cheeks swollen?",
      "Do your teeth appear longer than normal?",
      "Are any of your teeth loose or wobbly?",
    ],
    gum: [
      "Do you find it hard to chew food?",
      "Do you experience swelling in your jaw?",
      "Are you currently running a fever?",
      "Do you have swollen lymph nodes?",
      "Do you feel pain when opening your mouth?",
      "Do you suffer from toothache or throbbing pain in your teeth?",
      "Are your teeth more sensitive than usual?",
      "Do your teeth appear eroded or worn down?",
      "Do you notice white or brownish stains on your tooth surfaces?",
      "Are your tooth surfaces rough to the touch?",
      "Do you see any visible cracks in your teeth?",
      "Do you have any broken teeth?",
      "Do you feel pain when eating cold, sweet, or sour foods?",
      "Are there any holes visible on the surface of your teeth?"
  ],
    general: [
    "Do not grow all or some teeth, both milk teeth and permanent?",
    "Do you find it hard to chew food?",
    "Are your teeth sensitive to sweetness?",
    "Do you experience earache?",
    "Do you have insomnia or feel uneasy?"
    ],
  };

  // Handle checkbox toggle
  const handleCheckboxChange = (section, question) => {
    setCheckedQuestions((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [question]: !prev[section]?.[question],
      },
    }));
  };

  // Handle section change
  const handleSectionChange = (section) => {
    setSelectedSection(section);
    setDiagnosis(null); // Clear diagnosis when a new section is selected
    const targetSection = document.getElementById("question-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Extract the indices of the selected questions
    const selectedIndices = Object.entries(
      checkedQuestions[selectedSection] || {}
    )
      .filter(([_, isChecked]) => isChecked) // Keep only checked questions
      .map(([question]) => {
        // Map the question back to its index in the original array
        return questions[selectedSection].indexOf(question);
      });

    const payload = {
      category: selectedSection, // Send the category
      indices: selectedIndices, // Send the indices of selected questions
    };

    const response = await fetch("http://127.0.0.1:5000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    try {
      if (response.ok) {
        const data = await response.json();
        setDiagnosis(data["prediction"][0]['Result']); // Store the response in the state
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("An error occurred while submitting data.");
    }
  };

  return (
    <Layout>
      <div className="motivation-img">
        <img src="/img/fiche.jpg" alt="fiche" ></img>
      </div>
      <div className="section-buttons">
        <button
          className={`button-link ${selectedSection === "general" ? "selected" : ""}`}
          onClick={() => handleSectionChange("general")}
        >
          General disease
        </button>
        <button
          className={`button-link ${selectedSection === "gum" ? "selected" : ""}`}
          onClick={() => handleSectionChange("gum")}
        >
          Gum disease
        </button>
        <button
          className={`button-link ${selectedSection === "tooth" ? "selected" : ""}`}
          onClick={() => handleSectionChange("tooth")}
        >
          Tooth disease
        </button>
      </div>
      <div className="questions-section" id = "question-section">
        {selectedSection && (
          <div>
            <h2>Questions for {selectedSection}</h2>
            <form onSubmit={handleSubmit}>
              {questions[selectedSection].map((question, index) => (
                <div key={index} className="checkbox-item">
                  <label>
                    <input
                      type="checkbox"
                      checked={
                        checkedQuestions[selectedSection]?.[question] || false
                      }
                      onChange={() =>
                        handleCheckboxChange(selectedSection, question)
                      }
                    />
                    {question}
                  </label>
                </div>
              ))}
              <button type="submit" className="submit-btn">
                Submit
              </button>
              <div id="diagnose">
  {/* Render the diagnosis response */}
  {diagnosis ? (
    <div>
      <h3>Diagnosis Result:</h3>
      {diagnosis.length > 0 ? (
        <ul>
          {diagnosis.map(([code, confidence]) => (
            <li key={code}>
              {confidence < 60
                ? `You may have ${dentalMalignancies[code] || "an unknown malignancy"}`
                : `You're having ${dentalMalignancies[code] || "an unknown malignancy"}`}
            </li>
          ))}
        </ul>
      ) : (
        <p>Congratulation ! You don't have any dental malignancies</p>
      )}
    </div>
  ) : null}
</div>

          </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
