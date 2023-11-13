import React from "react";
import ReactStars from "react-rating-stars-component";

const Character = ({ character }) => {
  const { images, title, category, description, price, rating } = character;

  return (
    <div className="characters">
      <div className="container-character">
        <div style={containerStyle}>
          <div style={rowStyle}>
            {images.map((image, index) => (
              <div key={index} className={`col-md-${12 / images.length}`}>
                <img
                  style={imageStyle}
                  src={image}
                  alt={`${title} Image ${index + 1}`}
                />
              </div>
            ))}
          </div>

          <br />

          <div style={rowStyle}>
            <div className="col-md-2">
              <h5>{title}</h5>
            </div>
            <div className="col-md-2">
              <span>{category}</span>
            </div>
          </div>

          <br />

          <div style={rowStyle}>
            <div className="col-md-4">
              <p>{description}</p>
            </div>
          </div>

          <br />

          <div style={rowStyle}>
            <div className="col-md-2">
              <h6>${price}</h6>
            </div>
            <div className="col-md-2">
              <ReactStars
                count={5}
                value={rating}
                size={24}
                edit={false}
                activeColor="#ffd700"
              />
            </div>
          </div>

          <div style={rowStyle}>
            <div className="col-md-4">
              <button className="btn btn-success">Comprar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Estilos en línea para mayor claridad
const containerStyle = {
  width: "100%",
  height: "10rem",
  position: "relative",
};

const rowStyle = {
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  borderRadius: "10px",
  padding: "15px",
};

const imageStyle = {
  borderRadius: "100%",
  width: "10rem",
  height: "10rem",
  border: "4px solid #000000",
};

export default Character;
