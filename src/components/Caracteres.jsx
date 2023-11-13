import React from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate } from "react-router-dom";

const Characters = ({ characters }) => {
  const navigate = useNavigate();

  const navigateToDetails = (index) => {
    navigate(`/items/id=${index}`);
  };

  return (
    <div className="characters">
      <div className="container-characters">
        {characters.map((character, index) => (
          <div
            className="character-container"
            key={index}
            onClick={() => navigateToDetails(index + 1)}
          >
            <div>
              <img
                style={imageStyle}
                src={character.thumbnail}
                alt={character.title}
              />
            </div>
            <div>
              <div className="row">
                <div className="d-flex justify-content-start">
                  <h5>{character.title}</h5>
                </div>
                <div className="d-flex justify-content-end">
                  <span>{character.category}</span>
                </div>
              </div>
              <br />
              <div className="row">
                <p>
                  <span>{character.description}</span>
                </p>
              </div>
              <br />
              <div className="row">
                <div className="d-flex justify-content-start">
                  <h6>${character.price}</h6>
                </div>
                <div className="d-flex justify-content-end">
                  <ReactStars
                    count={5}
                    value={character.rating}
                    size={24}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const imageStyle = {
  borderRadius: "100%",
  width: "10rem",
  height: "10rem",
  border: "4px solid #000000",
};

export default Characters;
