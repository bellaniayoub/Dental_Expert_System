import React, { useState } from "react";
import "./Agencies.css";
import Layout from "./layout";

const dentists = [
    {
      name: "Dr Wafae SAFI",
      location: "Casablanca, Maroc",
      description: "Clinique dentaire l'art du sourire",
      link: "https://www.google.com/maps/place/Clinique+dentaire+l'art+du+sourire/@33.6035134,-7.515147,581m/data=!3m2!1e3!4b1!4m6!3m5!1s0xda7cbbc8c1ed08b:0x72c998f713187b26!8m2!3d33.603509!4d-7.5125721!16s%2Fg%2F11w22jffjs?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
      image: "/img/women.jpg"
    },
    {
      name: "Dr ADNANE EL KOTBI",
      location: "Marrakech, Maroc",
      description: "Dentiste généraliste offrant des soins dentaires complets.",
      link: "https://www.google.com/maps/@31.6390662,-8.2171813,19014m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
      image: "/img/men.jpg"
    },
    {
      name: "Dr Abdelfettah Benjelloun",
      location: "Marrakech, Maroc",
      description: "Dentiste généraliste offrant une gamme complète de soins dentaires.",
      link: "https://www.google.com/maps/place/Benjelloun+Abdelfettah+(Dentiste)/@31.6329855,-8.0115768,593m/data=!3m1!1e3!4m6!3m5!1s0xdafee61783563b1:0x9e7ba4e0a4a14b4b!8m2!3d31.6329855!4d-8.0115768!16s%2Fg%2F11b6hyr991?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
      image: "/img/men.jpg"
    },
    {
      name: "Dr Ghita Lamrani",
      location: "Marrakech, Maroc",
      description: "Spécialisée en esthétique dentaire, chirurgie buccale, orthodontie, pédodontie et parodontologie.",
      link: "https://www.google.com/maps/search/Dr+Ghita+Lamrani%2C+Marrakech%2C+Maroc",
      image: "/img/women.jpg"
    },
    {
      name: "Dr Kawtar Ammor",
      location: "Marrakech, Maroc",
      description: "Expertise en pédodontie, esthétique dentaire, endodontie, chirurgie buccale et parodontologie.",
      link: "https://www.google.com/maps/search/Dr+Kawtar+Ammor%2C+Marrakech%2C+Maroc",
      image: "/img/women.jpg"
    },
    {
      name: "Dr Oumhani Elghozail",
      location: "Marrakech, Maroc",
      description: "Dentiste généraliste offrant des soins dentaires complets.",
      link: "https://www.google.com/maps/place/Cabinet+dentaire+Dr+Elghozail+Oumhani/@31.6711049,-8.0282889,593m/data=!3m2!1e3!4b1!4m6!3m5!1s0xdafed0d5a5a5239:0x22210ecd955999aa!8m2!3d31.6711049!4d-8.0282889!16s%2Fg%2F11fhk7d7vl?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D",
      image: "/img/men.jpg"
    },
    {
      name: "Dr Hadda Kchirid",
      location: "Marrakech, Maroc",
      description: "Spécialisée en esthétique dentaire, implantologie et orthodontie.",
      link: "https://www.google.com/maps/search/Dr+Hadda+Kchirid%2C+Marrakech%2C+Maroc",
      image: "/img/women.jpg"
    },
    {
      name: "Dr Meryem Guennouni",
      location: "Casablanca, Maroc",
      description: "Dentiste généraliste offrant une gamme complète de soins dentaires.",
      link: "https://www.google.com/maps/search/Dr+Meryem+Guennouni%2C+Casablanca%2C+Maroc",
      image: "/img/women.jpg"
    },
    {
      name: "Dr Hamza Taoudi Benchekroun",
      location: "Casablanca, Maroc",
      description: "Spécialisé en esthétique dentaire, implantologie et orthodontie.",
      link: "https://www.google.com/maps/search/Dr+Hamza+Taoudi+Benchekroun%2C+Casablanca%2C+Maroc",
      image: "/img/men.jpg"
    },
    {
      name: "Dr Mohamed Ali Chraibi",
      location: "Casablanca, Maroc",
      description: "Expertise en implantologie et parodontologie.",
      link: "https://www.google.com/maps/search/Dr+Mohamed+Ali+Chraibi%2C+Casablanca%2C+Maroc",
      image: "/img/men.jpg"
    },
    {
      name: "Dr Rachida El Jazouli",
      location: "Casablanca, Maroc",
      description: "Dentiste généraliste offrant des soins dentaires complets.",
      link: "https://www.google.com/maps/search/Dr+Rachida+El+Jazouli%2C+Casablanca%2C+Maroc",
      image: "/img/women.jpg"
    },
    {
      name: "Dr Meryem Berrada",
      location: "Casablanca, Maroc",
      description: "Spécialisée en endodontie, implantologie, orthodontie et parodontologie.",
      link: "https://www.google.com/maps/search/Dr+Meryem+Berrada%2C+Casablanca%2C+Maroc",
      image: "/img/women.jpg"
    }
  ];
  

  const Agencies = () => {
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("name");
  
    const handleSearch = (e) => setSearch(e.target.value.toLowerCase());
  
    const sortedDentists = [...dentists].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "location") return a.location.localeCompare(b.location);
      return 0;
    });
  
    const filteredDentists = sortedDentists.filter(
      (dentist) =>
        dentist.name.toLowerCase().includes(search) ||
        dentist.location.toLowerCase().includes(search) ||
        dentist.description.toLowerCase().includes(search)
    );
  
    return (
      <Layout>
        <div className="container">
          <div className="cards">
            {filteredDentists.length > 0 ? (
              filteredDentists.map((dentist, index) => (
                <div key={index} className="card">
                  {/* Dentist Image */}
                  <img
                    src={dentist.image}
                    alt={dentist.name}
                    className="card-image"
                  />
                  {/* Dentist Details */}
                  <div className="details">
                    <h2>{dentist.name}</h2>
                    <p>{dentist.location}</p>
                    <p>{dentist.description}</p>
                    <a href={dentist.link} target="_blank" rel="noopener noreferrer">
                      View on Map
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p>No dentists found.</p>
            )}
          </div>
        </div>
      </Layout>
    );
  };
  

export default Agencies;
