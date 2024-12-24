import React, { useState } from "react";
import Layout from "./layout.js"; // Import the Layout component
import "./DiseasesPage.css"; // Import the CSS for styling

const DiseasesPage = () => {
  // const diseases = [
  //   {
  //     code: "k0001",
  //     name: "Abscess Periodontal",
  //     description: "A periodontal abscess is a localized infection within the gums, leading to the accumulation of pus. It often results from advanced gum disease (periodontitis) and is characterized by swollen, red, and painful gums. Symptoms may include fever, throbbing pain, and discomfort while chewing. If left untreated, it can lead to tooth loss and the spread of infection.",
  //     image: "/img/PeriodontalAbscess.jpg",
  //     source: "https://www.webmd.com/oral-health/guide/dental-abscess"
  //   },
  //   {
  //     code: "k0002",
  //     name: "Abscess Periapical",
  //     description: "A periapical abscess occurs at the tip of a tooth's root due to bacterial infection, often stemming from untreated dental cavities or trauma. It leads to severe toothache, sensitivity to hot and cold, swelling of the face or jaw, and sometimes fever. Prompt treatment is essential to prevent the spread of infection.",
  //     image: "/img/Abscess_Periapical.jpg",
  //     source: "https://www.mayoclinic.org/diseases-conditions/tooth-abscess/symptoms-causes/syc-20350901"
  //   },
  //   {
  //     code: "k0003",
  //     name: "Anodontia",
  //     description: "Anodontia is a rare genetic condition characterized by the congenital absence of all primary or permanent teeth. It can significantly impact chewing, speech, and facial aesthetics. Management often involves dental prosthetics and multidisciplinary care.",
  //     image: "/img/Anodontia.jpg",
  //     source: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6267895/"
  //   },
  //   {
  //     code: "k0004",
  //     name: "Tooth Abrasion",
  //     description: "Tooth abrasion refers to the wearing away of tooth enamel due to mechanical actions such as aggressive brushing, use of hard-bristled toothbrushes, or habits like nail-biting. It can lead to tooth sensitivity and increased risk of cavities. Preventive measures include adopting proper brushing techniques and using softer toothbrushes.",
  //     image: "/img/Tooth_Abrasion.jpg",
  //     source: "https://www.dentalhealth.org/tooth-wear-and-dental-erosion"
  //   },
  //   {
  //     code: "k0005",
  //     name: "Bruxism",
  //     description: "Bruxism is the involuntary grinding or clenching of teeth, often occurring during sleep. It can result in tooth wear, jaw pain, headaches, and temporomandibular joint disorders. Stress management and the use of mouthguards are common treatments.",
  //     image: "/img/Bruxism.jpg",
  //     source: "https://www.mayoclinic.org/diseases-conditions/bruxism/symptoms-causes/syc-20356095"
  //   },
  //   {
  //     code: "k0006",
  //     name: "Caries",
  //     description: "Dental caries, commonly known as cavities, are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes. They are caused by a combination of factors, including bacteria in the mouth, frequent snacking, sugary drinks, and inadequate cleaning of teeth. If untreated, cavities can lead to severe toothache, infection, and tooth loss.",
  //     image: "/img/Dental_Caries.jpg",
  //     source: "https://www.webmd.com/oral-health/guide/dental-health-cavities"
  //   },
  //   {
  //     code: "k0007",
  //     name: "Dental Erosion",
  //     description: "Dental erosion involves the loss of tooth enamel due to acid attack from dietary sources like citrus fruits, sodas, or from stomach acids. It leads to tooth sensitivity, discoloration, and increased risk of cavities. Preventive strategies include dietary modifications and the use of fluoride treatments.",
  //     image: "/img/Dental_Erosion.jpg",
  //     source: "https://www.dentalhealth.org/tooth-wear-and-dental-erosion"
  //   },
  //   {
  //     code: "k0008",
  //     name: "Gingivitis",
  //     description: "Gingivitis is the inflammation of the gums caused by plaque buildup on teeth. It is characterized by red, swollen gums that may bleed during brushing or flossing. Early-stage gum disease is reversible with proper oral hygiene, but if left untreated, it can progress to periodontitis.",
  //     image: "/img/Gingivitis.jpg",
  //     source: "https://www.mouthhealthy.org/en/az-topics/g/gingivitis"
  //   },
  //   {
  //     code: "k0009",
  //     name: "Halitosis",
  //     description: "Halitosis, or chronic bad breath, can result from poor oral hygiene, certain foods, smoking, or underlying health issues. It often indicates the presence of bacteria or decay in the mouth. Maintaining good oral hygiene and regular dental check-ups are essential for prevention and treatment.",
  //     image: "/img/Halitosis.jpg",
  //     source: "https://www.mayoclinic.org/diseases-conditions/bad-breath/symptoms-causes/syc-20350922"
  //   },
  //   {
  //     code: "k0010",
  //     name: "Oral Cancer",
  //     description: "Oral cancer refers to cancer that develops in any part of the mouth or throat. It can present as a sore that doesn't heal, a lump, or white or red patches inside the mouth. Risk factors include tobacco use, heavy alcohol consumption, and HPV infection. Early detection is crucial for effective treatment.",
  //     image: "/img/Oral_Cancer.jpg",
  //     source: "https://www.cancer.org/cancer/oral-cavity-and-oropharyngeal-cancer.html"
  //   }
  // ];


  const diseases = [
    {
      code: "k0001",
      name: "Abscess Periodontal",
      description: "A periodontal abscess is a localized infection that forms in the tissues surrounding a tooth, often resulting from bacterial infection in a pocket of gum tissue. It typically occurs in individuals with existing gum disease, such as periodontitis. This condition is marked by swollen, red, and painful gums, often accompanied by fever and a sensation of throbbing pain, particularly when chewing. Left untreated, the infection can spread to other areas of the mouth and body, leading to serious complications. A visual representation of a periodontal abscess would include inflamed gums, with a localized bump or pimple-like formation on the gum surface near the affected tooth, with redness and swelling.",
      image: "/img/PeriodondalAbscess.jpg"
    },
    {
      code: "k0002",
      name: "Abscess Periapical",
      description: "Periapical abscesses occur at the tip of the tooth’s root and are usually caused by untreated cavities, which allow bacteria to infiltrate the inner part of the tooth (pulp). This leads to severe pain, swelling, and possible fever, along with sensitivity to hot and cold. Affected teeth may feel loose, and there may be visible pus. If not addressed promptly, the infection can spread to surrounding tissues, leading to more severe health issues. An image of this condition would focus on a swollen area at the base of the tooth, showing redness and possible drainage of pus, as well as the classic tooth root involvement.",
      image: "/img/Abscess_Periapical.jpg"
    },
    {
      code: "k0003",
      name: "Anodontia",
      description: "Anodontia is a rare congenital condition where one or more teeth are absent at birth. It can affect both primary (baby) teeth and permanent teeth. This disorder can cause difficulty in chewing, speaking, and can impact a person’s appearance. It may be hereditary or related to genetic syndromes. Individuals with anodontia often require dental prosthetics or orthodontic treatment to restore function and aesthetics. The image of anodontia would feature a mouth with visible gaps where teeth should be, highlighting the absence of teeth, and showing how this condition affects facial aesthetics.",
      image: "img/k3.jpg"
    },
    {
      code: "k0004",
      name: "Tooth Abrasion",
      description: "Tooth abrasion happens when the enamel of the teeth is worn away due to external factors such as aggressive brushing, excessive use of hard-bristled toothbrushes, or teeth grinding. This leads to tooth sensitivity, especially to hot or cold foods, and a noticeable thinning or worn-down appearance on the teeth. Over time, abrasion can lead to increased risk of cavities and other dental issues. An image of tooth abrasion would show the surface of the teeth with visible wear marks, possibly along the gumline or on the biting surfaces, with an emphasis on the damage caused to enamel.",
      image: "img/k4.jpg"
    },
    {
      code: "k0005",
      name: "Bruxism",
      description: "Bruxism refers to the grinding or clenching of teeth, typically during sleep. This condition can lead to worn-down teeth, jaw pain, headaches, and sensitivity. Over time, bruxism may cause the enamel to erode, resulting in visible flattening or chipping of the teeth. Stress, anxiety, and certain sleep disorders are common contributing factors. Managing bruxism often involves the use of mouthguards and stress-reduction techniques. A typical image for bruxism would show a worn-down surface of teeth with noticeable flattening or cracking, alongside the involvement of jaw muscles, potentially in a diagram showing the tension and pressure applied during grinding.",
      image: "img/k5.jpg"
    },
    {
      code: "k0006",
      name: "Caries",
      description: "Dental caries, commonly known as cavities, are permanently damaged areas in the hard surface of your teeth that develop into tiny openings or holes. They are caused by a combination of factors, including bacteria in your mouth, frequent snacking, sipping sugary drinks, and not cleaning your teeth well. If left untreated, cavities can lead to severe toothache, infection, and even tooth loss. An image depicting dental caries would show a tooth with visible decay, highlighting the areas where the enamel has been compromised.",
      image: "img/k6.jpg"
    },
    {
      code: "k0007",
      name: "Dental Erosion",
      description: "Dental erosion involves the loss of tooth enamel due to acid attack. Unlike cavities caused by bacteria, erosion is the result of acids directly dissolving the enamel. Common sources include acidic foods and beverages, as well as conditions like acid reflux. Over time, erosion can lead to sensitivity, discoloration, and an increased risk of cavities. Preventive measures include reducing acidic intake and maintaining good oral hygiene. An image of dental erosion would show smooth, shiny areas on the tooth surface where enamel has been worn away, often exposing the underlying dentin.",
      image: "img/k7.jpg"
    },
    {
      code: "k0008",
      name: "Gingivitis",
      description: "Gingivitis is the mildest form of gum disease, causing irritation, redness, and swelling of the gums due to plaque buildup. If left untreated, gingivitis can progress to more severe periodontal diseases. The main symptoms include red, swollen gums that may bleed easily when brushing or flossing. Maintaining good oral hygiene and regular dental check-ups are essential for preventing and treating gingivitis. An image of gingivitis would show inflamed gums around the teeth, with redness and possible bleeding at the gumline, highlighting the early stages of gum disease.",
      image: "img/k8.jpg"
    },
    {
      code: "k0009",
      name: "Halitosis",
      description: "Halitosis, commonly known as bad breath, can result from poor dental hygiene, certain foods, or underlying health issues. Persistent bad breath may indicate gum disease, cavities, or other dental problems. It can also be influenced by factors such as dry mouth, tobacco use, or systemic conditions like diabetes. Addressing halitosis involves identifying and treating the underlying cause, maintaining proper oral hygiene, and regular dental visits. An image representing halitosis might depict bacteria on the tongue or inflamed gums, illustrating common sources of bad breath.",
      image: "img/k9.jpg"
    },
    {
      code: "k0010",
      name: "Oral Cancer",
      description: "Oral cancer encompasses cancers of the mouth and throat. Risk factors include tobacco use, heavy alcohol consumption, and human papillomavirus (HPV) infection. Early signs may include sores that don't heal, lumps, or white or red patches in the mouth. Early detection is crucial for successful treatment, making regular dental check-ups important for screening. Treatment often involves surgery, radiation, and chemotherapy. An image of oral cancer might show a lesion or tumor within the oral cavity, highlighting areas of abnormal cell growth.",
      image: "img/k10.jpg"
    }
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
          <div><h1>{selectedDisease.name}</h1>
          <p>{selectedDisease.description}</p></div>
          <img src={selectedDisease.image} alt={selectedDisease.name} className="disease-image" />
        </div>
      </div>
    </Layout>
  );
};

export default DiseasesPage;
