import React from 'react';
import Layout from './layout';
import About from './About';

function About_us() {
  return (
    <Layout>
    <div>
      <h1>About Our Dental Expert System</h1>
      <p>
        Our <strong>Dental Expert System</strong> is a specialized tool designed to assist dental professionals in diagnosing a selected range of dental diseases. Focused on 10 common and critical dental conditions, our system categorizes diseases into three primary groups: <strong>General</strong>, <strong>Gum</strong>, and <strong>Tooth Diseases</strong>.
      </p>


      <h2>The 10 Diseases We Focus On:</h2>
      <h3>General Diseases:</h3>
      <ul>
        <li>Oral Infections</li>
        <li>Oral Cancer</li>
        <li>Salivary Gland Disorders</li>
      </ul>

      <h3>Gum Diseases:</h3>
      <ul>
        <li>Gingivitis</li>
        <li>Periodontitis</li>
        <li>Gum Recession</li>
        <li>Gum Abscess</li>
      </ul>

      <h3>Tooth Diseases:</h3>
      <ul>
        <li>Dental Caries (Tooth Cavities)</li>
        <li>Tooth Decay</li>
        <li>Tooth Abscess</li>
      </ul>

      <h2>Conclusion:</h2>
      <p>
        Our Dental Expert System is designed to simplify the process of diagnosing these 10 common dental diseases. By using advanced diagnostic algorithms and offering personalized treatment plans, we aim to empower dental professionals to deliver the best care possible.
      </p>
    </div>
    </Layout>
  );
}

export default About_us;
