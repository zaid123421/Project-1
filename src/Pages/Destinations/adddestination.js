import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useContext } from 'react';
import axios from "axios";
import { User } from "../Context";


export default function AddDestination(){
// useState
const [images, setImages] = useState([]);
const [form, setForm] = useState({
  name: "",
});

// useRef
const openImage = useRef(null);

// useNavigate
const nav = useNavigate();

// useContext
const userInfo = useContext(User);

// handling
function handleOpenImage() {
  openImage.current.click();
}

// Mapping
  const imagesShow = images.map((img, key) => (
  <div className = "image-container">
    <img src = {URL.createObjectURL(img)} alt = "Test" />
  </div>
  ));

// handleSubmit
  async function Submit(e){
  const data = new FormData();
  data.append("name", form.name);
  for (let i = 0; i < images.length; i++) {
    data.append('images[]', images[i]);
  }
  try{
    let res = await axios.post('http://localhost:3000/web/add_destenation',{
      name: form.name,
      images: data.getAll("images[]")
      // body: data
    },
    {
      headers: {
        Authorization: "Bearer " + userInfo.auth.userToken,
      }
    }
  );
    console.log(data.get('name'));
    console.log(data.getAll("images[]"));
    nav('/home/destinations');
  } catch(err){
    console.log(data.get("name"));
    console.log(data.getAll("images[]"));
  }
}

// handleChange
  function handleChange(e){
    setForm({ ...form, [e.target.name]: e.target.value});
  }

  return(
    <>
      <div>
        <NavLink to = "/home/destinations">
          <i className="fa-solid fa-angle-left arrow-left"></i>
        </NavLink>
        <h1 className = "fw-500 ml-25">Add A New Destination</h1>
        <p className = "ml-25 mt-20 fs-18">add the destination's details:</p>
        <div className = "add-destination-details">
          <div>
            <div className = "mb-15">
              <label htmlFor = "name" className = "fw-500">Name</label>
              <input
                id = "name"
                type = "text"
                name = "name"
                placeholder="Add Destination's Name"
                value = {form.name}
                onChange = {handleChange}/>
            </div>
            {/* <div>
              <label htmlFor = "location" className = "fw-500">Location</label>
              <input id = "location" type = "text" placeholder = "Add Destination's Location"></input>
            </div> */}
          </div>
          <div className = "images-card">
            <h3 className = "fw-500 mb-20 mt-10 fs-16">Upload Destination's Photos</h3>
            <input
              ref = {openImage}
              hidden
              type = "file"
              onChange = {(e) => setImages([...e.target.files])}
              multiple />
            <div className = "cards-input" onClick= {handleOpenImage}>
              <img className="upload-image" src = {require('../../images/upload.png')} alt = "Upload Here"></img>
              <p className="">Upload Images</p>
            </div>
            <div className = "images-container">{imagesShow}</div> 
          </div>
          {/* <div>
            <label htmlFor = "description" className = "fw-500">Description</label>
            <textarea id = "description" type = "textarea" placeholder = "Type Some Words About The Destination..."></textarea>
          </div> */}
        </div>
        <button onClick = {Submit} className = "add-destination">Add Destination</button>
      </div>
    </>
  );
}