import { useCallback, useEffect, useState } from "react";
import { products } from "../assets/products.json";
import { useSearchParams } from "react-router-dom";
import imagenNotFound from "../assets/imagenes/no-image.jpg";
import bazar from "../assets/imagenes/bazarr.jpg";
import Characters from "./Caracteres";
import { Form, FormControl, Container, Image, Row } from "react-bootstrap";

const ProductList = () => {
  const [params] = useSearchParams();

  const searchTerm = params.get("search");
  const [characters, setCharacters] = useState(null);
  const [search, setSearch] = useState(searchTerm);

  const getCharacters = useCallback(() => {
    try {
      const dataArray = Object.values(products);
      const searchRegex = new RegExp(search, "i");

      const results = dataArray.filter((item) => searchRegex.test(item.title));

      setCharacters(results.length > 0 ? results : null);
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    setSearch(text);
  };

  useEffect(() => {
    getCharacters();
  }, [search, getCharacters]);

  return (
    <div className="centered-div">
      <div className="App">
        <header className="App-header">
          <Container>
            <Row>
              <Image
                src={bazar}
                fluid
                style={{ width: "7rem", height: "4rem" }}
              />
              <Form onSubmit={handleSubmit} style={{ width: "auto" }}>
                <br />
                <FormControl
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={handleSubmit}
                />
              </Form>
            </Row>
          </Container>
          {characters ? (
            <Characters characters={characters} />
          ) : (
            <img
              src={imagenNotFound}
              alt="Sin resultados"
              className="img-home"
            />
          )}
        </header>
      </div>
    </div>
  );
};

export default ProductList;
