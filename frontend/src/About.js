import React from 'react';
import Layout from './layout';
import './About.css';

function About_us() {
  return (
    <Layout>
    <div>
      <h1>About Our Dental Expert System</h1>
      <p>
        Our <strong>Dental Expert System</strong> is a specialized tool designed to assist dental professionals in diagnosing a selected range of dental diseases. Focused on 10 common and critical dental conditions, our system categorizes diseases into three primary groups: <strong>General</strong>, <strong>Gum</strong>, and <strong>Tooth Diseases</strong>.
      </p>

    <div className='diseases'>
    <div className='diseases-item'>
      <h3>General Diseases:</h3>
      <ul>
        <li>Anodontia</li>
        <li>Bruxism</li>
      </ul>
        </div>
      <div className='diseases-item'>
      <h3>Gum Diseases:</h3>
      <ul>
        <li>Abscess Periapical</li>
        <li>Tooth Abrasion</li>
        <li>Tooth Perforated</li>
        <li>Tractures Tooth</li>
      </ul>
        </div>
      <div className='diseases-item'>
      <h3>Tooth Diseases:</h3>
      <ul>
        <li>Abscess Periodontal</li>
        <li>Gingivitis</li>
        <li>Gums Purulent</li>
        <li>Periodontitis</li>
      </ul>
    </div>
    </div>
    </div>
    </Layout>
  );
}

export default About_us;
