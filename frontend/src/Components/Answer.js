import "../CSS/Answer.css";
import React from "react";

function Answer(props) {
   const ans = props.QA;
   return (
      <div className="body">
         {ans.map((i, j) => (
            <div className="QA">
               <div className="question">
                  {j + 1}. {i.question}
               </div>
               <div className="answer">
                  {" "}
                  <strong style={{ color: "orange " }}>
                     Solution:
                     <br />
                  </strong>{" "}
                  {i.answer}
               </div>
            </div>
         ))}
      </div>
   );
}

export default Answer;
