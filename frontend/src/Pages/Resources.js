import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import "../CSS/Resources.css";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

function Resources() {
  const [searchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [resources, setResources] = useState({});
  const [dailyChallenges, setDailyChallenges] = useState([]);
  const [roadmaps, setRoadmaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${API_BASE_URL}/resources`)
      .then((res) => {
        const data = res.data;
        const formattedData = {};

        data.forEach((item) => {
          if (item.category === "daily") {
            setDailyChallenges(item.items);
          } else if (item.category === "roadmaps") {
            setRoadmaps(item.items);
          } else {
            formattedData[item.category] = item.items;
          }
        });

        setResources(formattedData);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching resources:", err);
        setLoading(false);
      });
  }, []);

  const filterResources = (category) => {
    if (!resources[category]) return [];
    return resources[category].filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.desc &&
          item.desc.toLowerCase().includes(searchTerm.toLowerCase())),
    );
  };

  const renderCard = (item, type) => (
    <div className="Resource_Card" key={item.id}>
      <div className="Card_Icon">{item.icon}</div>
      <h3 className="Card_Title">{item.name}</h3>
      {type === "companies" ? (
        <ul className="Company_Points">
          {item.rounds.map((round, i) => (
            <li key={i}>{round}</li>
          ))}
        </ul>
      ) : (
        <p className="Card_Desc">{item.desc}</p>
      )}
      {item.link && (
        <a
          href={item.link}
          className="Card_Link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resource ↗
        </a>
      )}
    </div>
  );

  if (loading)
    return (
      <div className="Resources_Page">
        <Navbar />
        <div
          className="Resources_Header"
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>Loading Resources...</h1>
        </div>
      </div>
    );

  return (
    <div className="Resources_Page">
      <Navbar />

      <div className="Resources_Header">
        <h1>Preparation Hub</h1>
        <p>Your one-stop destination for placement success</p>
      </div>

      <div className="Tabs_Container">
        {["all", "coding", "aptitude", "interview", "companies"].map((tab) => (
          <button
            key={tab}
            className={`Tab_Btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="Resources_Content">
        {/* Daily Challenges */}
        <div className="Section_Title">🔥 Daily Challenges</div>
        <div className="Daily_Grid">
          {dailyChallenges.map((challenge, i) => (
            <div
              className="Challenge_Card"
              key={i}
              style={{ background: challenge.background }}
            >
              <h4>{challenge.type} Challenge</h4>
              <h3>{challenge.title}</h3>
              <a href={challenge.link} className="Challenge_Btn">
                Solve Now
              </a>
            </div>
          ))}
        </div>

        {/* Roadmaps */}
        <div className="Section_Title" style={{ marginTop: "50px" }}>
          🗺️ Learning Roadmaps
        </div>
        <div className="Grid_Layout">
          {roadmaps.map((map, i) => (
            <div className="Resource_Card" key={i}>
              <h3 className="Card_Title">{map.title}</h3>
              <div className="Roadmap_List">
                {map.steps.map((step, index) => (
                  <React.Fragment key={index}>
                    <span
                      className="Roadmap_Step"
                      style={{
                        background: `${map.color}15`,
                        color: map.color,
                        borderColor: `${map.color}30`,
                      }}
                    >
                      {step}
                    </span>
                    {index < map.steps.length - 1 && (
                      <span className="Arrow">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Filtered Sections */}
        {(activeTab === "all" || activeTab === "coding") &&
          resources.coding && (
            <>
              <div className="Section_Title">💻 Coding Platforms</div>
              <div className="Grid_Layout">
                {filterResources("coding").map((item) =>
                  renderCard(item, "coding"),
                )}
              </div>
            </>
          )}

        {(activeTab === "all" || activeTab === "aptitude") &&
          resources.aptitude && (
            <>
              <div className="Section_Title">🧠 Aptitude Resources</div>
              <div className="Grid_Layout">
                {filterResources("aptitude").map((item) =>
                  renderCard(item, "aptitude"),
                )}
              </div>
            </>
          )}

        {(activeTab === "all" || activeTab === "interview") &&
          resources.interview && (
            <>
              <div className="Section_Title">🤝 Interview Prep</div>
              <div className="Grid_Layout">
                {filterResources("interview").map((item) =>
                  renderCard(item, "interview"),
                )}
              </div>
            </>
          )}

        {(activeTab === "all" || activeTab === "companies") &&
          resources.companies && (
            <>
              <div className="Section_Title">🏢 Company-Wise Prep</div>
              <div className="Grid_Layout">
                {filterResources("companies").map((item) =>
                  renderCard(item, "companies"),
                )}
              </div>
            </>
          )}
      </div>
    </div>
  );
}

export default Resources;
