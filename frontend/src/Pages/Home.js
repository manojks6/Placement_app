import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../CSS/Home.css";

const quotes = [
  { text: "Learn Continually,", subtext: "There's always", highlight: "\"One more thing\"", end: "to Learn." },
  { text: "Success is the sum of", subtext: "small efforts,", highlight: "\"repeated\"", end: "day-in and day-out." },
  { text: "The secret of", subtext: "getting ahead is", highlight: "\"getting started.\"", end: "" },
  { text: "Opportunities don't", subtext: "happen, you", highlight: "\"create\"", end: "them." },
  { text: "Believe you can", subtext: "and you're", highlight: "\"halfway there.\"", end: "" },
  { text: "Preparation is the", subtext: "ultimate", highlight: "\"key\"", end: "to success." }
];

function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500); // Wait for fade out
    }, 6000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      <div className='Body'>
        <div className={`Text ${fade ? 'fade-in' : 'fade-out'}`}>
          {quotes[currentQuote].text}<br /> {quotes[currentQuote].subtext}<br />
          <span>{quotes[currentQuote].highlight}</span> <br />{quotes[currentQuote].end}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
