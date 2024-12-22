// // import React, { useState } from "react";
// // import Navbar from "./Navbar"; // Import the Navbar component
// // import "./App.css";

// // const App = () => {
// //   const [selectedSection, setSelectedSection] = useState("");
// //   const [checkedQuestions, setCheckedQuestions] = useState({});

// //   // Questions for each section
// //   const questions = {
// //     Gums: [
// //       "What symptoms does the patient have?",
// //       "What are the patient's medical records?",
// //       "What is the preliminary diagnosis?",
// //     ],
// //     Tooth: [
// //       "What equipment is needed?",
// //       "Are there any recurring patient issues?",
// //       "What dental software is being used?",
// //     ],
// //     General: [
// //       "What tests are required?",
// //       "What is the expected delivery date for test results?",
// //       "Are additional materials needed?",
// //     ],
// //   };

// //   // Handle checkbox toggle
// //   const handleCheckboxChange = (section, question) => {
// //     setCheckedQuestions((prev) => ({
// //       ...prev,
// //       [section]: {
// //         ...prev[section],
// //         [question]: !prev[section]?.[question],
// //       },
// //     }));
// //   };

// //   return (
// //     <div className="app-container">
// //       <Navbar />
// //       <div className="section-buttons">
// //         <button
// //           className="button-link"
// //           onClick={() => setSelectedSection("general")}
// //         >
// //           General disease
// //         </button>
// //         <button
// //           className="button-link"
// //           onClick={() => setSelectedSection("gum")}
// //         >
// //           Gum diesese
// //         </button>
// //         <button
// //           className="button-link"
// //           onClick={() => setSelectedSection("tooth")}
// //         >
// //           Tooth diesese
// //         </button>
// //       </div>
// //       <div className="questions-section">
// //         {selectedSection && (
// //           <div>
// //             <h2>
// //               {selectedSection === "general"
// //                 ? "Questions for general desies"
// //                 : selectedSection === "gum"
// //                 ? "Questions for gum"
// //                 : "Questions for tooth"}
// //             </h2>
// //             <form>
// //               {questions[selectedSection].map((question, index) => (
// //                 <div key={index} className="checkbox-item">
// //                   <label>
// //                     <input
// //                       type="checkbox"
// //                       checked={
// //                         checkedQuestions[selectedSection]?.[question] || false
// //                       }
// //                       onChange={() =>
// //                         handleCheckboxChange(selectedSection, question)
// //                       }
// //                     />
// //                     {question}
// //                   </label>
// //                 </div>
// //               ))}
// //             </form>
// //           </div>
// //         )}
// //       </div>
// //       {/* Footer Section */}
// //       <footer className="footer">
// //         <p>&copy; 2024 Dental Expert System. All rights reserved.</p>
// //         <p>
// //           Designed with ❤️ by <a href="#">Your Team</a>
// //         </p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default App;

// import React, { useState } from "react";
// import Navbar from "./Navbar"; // Import the Navbar component
// import "./App.css";

// const App = () => {
//   const [selectedSection, setSelectedSection] = useState("");
//   const [checkedQuestions, setCheckedQuestions] = useState({});

//   // Questions for each section
//   const questions = {
//     general: [
//       "What tests are required?",
//       "What is the expected delivery date for test results?",
//       "Are additional materials needed?",
//     ],
//     gum: [
//       "What symptoms does the patient have?",
//       "What are the patient's medical records?",
//       "What is the preliminary diagnosis?",
//     ],
//     tooth: [
//       "What equipment is needed?",
//       "Are there any recurring patient issues?",
//       "What dental software is being used?",
//     ],
//   };

//   // Handle checkbox toggle
//   const handleCheckboxChange = (section, question) => {
//     setCheckedQuestions((prev) => ({
//       ...prev,
//       [section]: {
//         ...prev[section],
//         [question]: !prev[section]?.[question],
//       },
//     }));
//   };

//   return (
//     <div className="app-container">
//       <Navbar />
//       <div className="section-buttons">
//         <button
//           className="button-link"
//           onClick={() => setSelectedSection("general")}
//         >
//           General disease
//         </button>
//         <button
//           className="button-link"
//           onClick={() => setSelectedSection("gum")}
//         >
//           Gum disease
//         </button>
//         <button
//           className="button-link"
//           onClick={() => setSelectedSection("tooth")}
//         >
//           Tooth disease
//         </button>
//       </div>
//       <div className="questions-section">
//         {selectedSection && (
//           <div>
//             <h2>
//               {selectedSection === "general"
//                 ? "Questions for general disease"
//                 : selectedSection === "gum"
//                 ? "Questions for Gums"
//                 : "Questions for tooths"}
//             </h2>
//             <form>
//               {questions[selectedSection].map((question, index) => (
//                 <div key={index} className="checkbox-item">
//                   <label>
//                     <input
//                       type="checkbox"
//                       checked={
//                         checkedQuestions[selectedSection]?.[question] || false
//                       }
//                       onChange={() =>
//                         handleCheckboxChange(selectedSection, question)
//                       }
//                     />
//                     {question}
//                   </label>
//                 </div>
//               ))}
//             </form>
//           </div>
//         )}
//       </div>
//       {/* Footer Section */}
//       <footer className="footer">
//         <p>&copy; 2024 Dental Expert System. All rights reserved.</p>
//         <p>
//           Designed with ❤️ by <a href="#">Your Team</a>
//         </p>
//       </footer>
//     </div>
//   );
// };

// export default App;



import React, { useState } from "react";
import Layout from "./layout.js"; // Import the Layout component
import "./App.css";

const App = () => {
  const [selectedSection, setSelectedSection] = useState("");
  const [checkedQuestions, setCheckedQuestions] = useState({});
  const [diagnosis, setDiagnosis] = useState(null); // State for diagnosis result
  // Questions for each section
  const questions = {
    general: [
      "Do you find it hard to chew food?",
      "Are your gums swollen or red?",
      "Have you been experiencing a fever?",
      "Do your gums feel painful or tender, even without touching them?",
      "Have you been experiencing a fever?",
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
      "What symptoms does the patient have?",
      "What are the patient's medical records?",
      "What is the preliminary diagnosis?",
    ],
    tooth: [
      "What equipment is needed?",
      "Are there any recurring patient issues?",
      "What dental software is being used?",
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
      indices: selectedIndices,  // Send the indices of selected questions
    };

    
    const response = await fetch("http://127.0.0.1:5000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    try{  
      if (response.ok) {
        const data = await response.json();
        setDiagnosis(data['prediction']); // Store the response in the state
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
      <div className="section-buttons">
        <button
          className="button-link"
          onClick={() => handleSectionChange("general")}
        >
          General disease
        </button>
        <button
          className="button-link"
          onClick={() => handleSectionChange("gum")}
        >
          Gum disease
        </button>
        <button
          className="button-link"
          onClick={() => handleSectionChange("tooth")}
        >
          Tooth disease
        </button>
      </div>
      <div className="questions-section">
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
              <div id='diagnose'>
              {/* Render the diagnosis response */}
              {diagnosis ? (
                <div>
                  <h3>Diagnosis Result:</h3>
                  <pre>{JSON.stringify(diagnosis, null, 2)}</pre>
                </div>
              ) :(<div></div>)
              }
              </div>
            </form>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default App;
