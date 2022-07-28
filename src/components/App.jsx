import "../styles/App.css";
import dat from "../data.json";
import reply from "../assests/icon-reply.svg";
import { useState } from "react";
function App() {
  const [data, setData] = useState(dat);
  return (
    <div className="App">
      {data.map((item) => {
        return (
          <div className="comments-component">
            <div className="user-comment-container">
              <div className="button-counter-container"></div>
              <div className="comment-section-container">
                <div className="comment-section-header">
                  <div className="first-part">
                    <img src={item.profilePicture} />
                    <p className="username">{item.name}</p>
                    <p className="posted-time">{item.posted}</p>
                  </div>
                  <div className="second-part">
                    <button className="reply"><img src={reply} /></button>
                  </div>
                </div>
                <div className="comment-section-content">
                  <p>{item.content}</p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
