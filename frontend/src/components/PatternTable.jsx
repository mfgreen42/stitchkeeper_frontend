//This component maps over patterns and displays them in a table on MyPatterns page


import { useState, useEffect } from "react";
import DeletePattern from "./DeletePattern";
import noProbllama from "../../../frontend/src/pages/Media/noProbllama.jpg";
import axios from "axios";
import useAuth from "../hooks/useAuth";


const PatternTable = () => {
  const [patterns, setPatterns] = useState([]);
  const [ user, token] = useAuth()

  useEffect(() => {
    const fetchPatterns = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/api/patterns/",{
        headers: {
          Authorization: "Bearer " +token,
        },
      });
        setPatterns(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPatterns();
  }, [token]);

  return (
    <div>
      <div className="my-pattern-bar">
        <h2>My Patterns</h2>
      </div>
      <div className="table-container">
        <div>
          <img src={noProbllama} alt="noProblamma" />
        </div>
        <table>
          <thead>
            <tr>
              <th>Pattern ID</th>
              <th>Pattern Name</th>
              <th>Artist</th>
              <th>Date Uploaded</th>
              <th>Embroidery or</th>
              <th>Cross Stitch</th>
              <th>Completed</th>
              <th>Date Finished</th>
              <th>My Favorite</th>
              <th>Photo</th>
            </tr>
          </thead>
          <tbody>
            {patterns.map((pattern) => {
              return (
                <tr key={pattern.id}>
                  <td>{pattern.id}</td>
                  <td>{pattern.pattern_name}</td>
                  <td>{pattern.artist}</td>
                  <td>{pattern.date_added}</td>
                  <td>{pattern.is_embroidery ? "🧵" : ""}</td>
                  <td>{pattern.is_cross_stitch ? "🧵" : ""}</td>
                  <td>
                    {pattern.photos.map((photo) => (
                      <div key={photo.pattern}>
                        {photo.completed ? "✅" : "❌"}
                      </div>
                    ))}
                  </td>
                  <td>
                    {pattern.photos.map((photo) => (
                      <div key={photo.pattern}>{photo.date_finished}</div>
                    ))}
                  </td>
                  <td>
                    {pattern.photos.map((photo) => (
                      <div key={photo.pattern}>
                        {photo.is_favorite ? "❤️" : ""}
                      </div>
                    ))}
                  </td>
                  <td>
                    {pattern.photos.map((photo) => (
                      <div key={photo.pattern}>
                        <img
                          className="table-img"
                          src={`http://localhost:8000${photo.photo_img}`}
                          alt={pattern.pattern_name}
                        />
                      </div>
                    ))}
                  </td>
                  <td>
                    <DeletePattern
                      patternNumber={pattern.id}
                      patterns={patterns}
                      setPatterns={setPatterns}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatternTable;


