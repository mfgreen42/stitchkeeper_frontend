import useAuth  from "../hooks/useAuth"
import { useState } from "react";
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import beeYou from "../../src/pages/Media/Screenshot 2023-03-12 102626.jpg"

import "../../src/pages/AddPatternPage/AddPatternPage.css"

const AddPatternForm = (props) => {

  
    const [pdf, setPdf] = useState("");
    const [patternName, setPatternName] = useState("");
    const [artist, setArtist] = useState("");
    const [date, setDate] = useState("");
    const [embroidery, setEmbroidery] = useState(false);
    const [crossStitch, setCrossStitch] = useState(false);
    const [user, token] = useAuth()
    const navigate = useNavigate();


        function handleDateChange(event) {
          const selectedDate = new Date(event.target.value);
          const formattedDate = selectedDate.toISOString().slice(0,10);
          setDate(formattedDate);
        }


    const addUserPattern = async () => {
      const formData = new FormData();
          formData.append("pattern_pdf", pdf);
          formData.append("pattern_name", patternName);
          formData.append("artist", artist);
          formData.append("date_added", date);
          formData.append("is_embroidery", embroidery);
          formData.append("is_cross_stitch", crossStitch);
        try {
          let response = await axios.post('http://127.0.0.1:8000/api/patterns/user/', formData, {
            headers: {
              Authorization: "Bearer " + token,
              "Content-Type": "multipart/form-data",
            },
          });
          setPdf("");
          setPatternName("");
          setArtist("");
          setDate("");
          setEmbroidery(false);
          setCrossStitch(false);

          navigate("/mypatterns");
        } catch (error) {
        }
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        addUserPattern();
        console.log("pattern added");

      };


  return (
    <>
    <div>
      <h2>Add A New Pattern</h2>
      <p className="p-photo">Upload your patterns here:</p>
    </div>
    <form onSubmit={handleSubmit} className="addpattern-form">
      <img src={beeYou} alt= "beeYou Pattern" className="bee-img"/>
      <ol className="pattern-list">
        <li>
          <label className="addpattern-label">PDF File</label>
          <input className="addpattern-input" type="file" name="pdf" onChange={(event) => setPdf(event.target.files[0])}/>
        </li>

        <li>
          <label className="addpattern-label">Pattern Name</label>
          <input className="addpattern-input" type="text"  name="patternName" onChange={(event) => setPatternName(event.target.value)}/>
        </li>
        <label className="addpattern-label">Artist</label>
        <input className="addpattern-input" type="text" name="artist" onChange={(event) => setArtist(event.target.value)} />
        <li>
          <label className="addpattern-label">Date</label>
          <input  className="addpattern-input"type="date" name="date" onChange={handleDateChange} />
        </li>

        <li>
          <label className="checkbox-label">Embroidery?</label>
          <input className="checkbox-input" type="checkbox"    name="false" onChange={(event) => setEmbroidery(event.target.value)}/>
          <label className="checkbox-label"> or Cross Stitch?</label>
          <input className="checkbox-input" type="checkbox"  name="false" onChange={(event) => setCrossStitch(event.target.value)}/>
        </li>
        <button className="addpattern-button" type="submit">Add Pattern</button>
      </ol>
    </form>
    </>
  );
};

export default AddPatternForm;

