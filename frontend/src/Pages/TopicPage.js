import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import axios from "axios";
import Answer from "../Components/Answer";
import "../CSS/TopicPage.css"; // We'll create a unified CSS

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

function TopicPage({ endpoint, title }) {
   const [data, setData] = useState([]);
   const [QA, setQA] = useState([]);
   const [ans, setAns] = useState(false);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(false);

   useEffect(() => {
      setLoading(true);
      setError(false);
      setAns(false);
      setQA([]);

      axios
         .get(`${API_BASE_URL}${endpoint}`)
         .then((res) => {
            setData(res.data);
            setLoading(false);
         })
         .catch((err) => {
            console.log(err);
            setError(true);
            setLoading(false);
         });
   }, [endpoint]);

   const onClickListener = (index) => {
      setAns(true);
      setQA(data[index].QA);
   };

   return (
      <div className="topic-page">
         <div className="topic-navbar">
            <Navbar />
         </div>
         <div className="topic-body">
            {!ans && (
            <div className="content">
               {loading ? (
                  <div className="loader">Loading {title}...</div>
               ) : error || data.length === 0 ? (
                  <div className="error-msg">Database connection failed or no data.</div>
               ) : (
                  <h3>{title} Topics</h3>
               )}
               
               {!loading && data.map((item, index) => (
                  <div className="items" key={index}>
                     <div className="link">
                        <Link
                           to="#"
                           onClick={(e) => {
                              e.preventDefault();
                              onClickListener(index);
                           }}>
                           {item.Topic}
                        </Link>
                     </div>
                  </div>
               ))}
            </div>
            )}
            {ans && (
            <div className="answers full-screen">
               <button onClick={() => setAns(false)} className="back-btn">← Back to Topics</button>
               <Answer QA={QA} />
            </div>
            )}
         </div>
      </div>
   );
}

export default TopicPage;
