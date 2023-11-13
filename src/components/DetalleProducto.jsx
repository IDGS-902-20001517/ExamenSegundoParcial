import { useCallback, useEffect, useState } from "react";
import { products } from "../assets/products.json";
import imagenNotFound from "../assets/imagenes/no-image.jpg";
import bazar from "../assets/imagenes/bazarr.jpg";
import { Form, FormControl, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Character from "./Caracter";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const partes = id.split("=");
  //Definimos un state para almacenar los datos de los characters.
  const [character, setCharacter] = useState(null);
  const [search, setSearch] = useState(partes[1]);

  //Agregamos una funcion para hacer una peticion a jsonPlaceHolder
  const getUsuarios = useCallback(async () => {
    try {
      const dataArray = Object.values(products);
      console.log(dataArray);

      // Buscar el producto por ID
      const result = dataArray.find(
        (item) => item.id === parseInt(partes[1], 10)
      );

      console.log(result);

      if (result) {
        setCharacter(result);
      } else {
        setCharacter(null);
      }
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  const handleSubmit = (e) => {
    // Evitamos el comportamiento normal del Submit
    e.preventDefault();
    // Obtenemos el valor del input.
    const text = e.target[0].value;
    setSearch(text);

    // Redirigir a la ruta items con el parámetro search
    navigate(`/items?search=${text}`);
  };

  useEffect(() => {
    getUsuarios();
  }, [search, getUsuarios]);

  return (
    <div className="App">
      <header className="App-header">
        {character ? (
          <>
            <Container>
              <Row>
                <Image
                  src={bazar}
                  fluid
                  style={{ width: "7rem", height: "4rem" }}
                />
                <Form onSubmit={handleSubmit} style={{ width: "auto" }}>
                  <br></br>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </Form>
              </Row>
            </Container>
            <p style={{ fontFamily: "-moz-initial" }}></p>
            <Character character={character} />
          </>
        ) : (
          <>
            <Container>
              <Row>
                <Image
                  src={bazar}
                  fluid
                  style={{ width: "7rem", height: "4rem" }}
                />
                <Form onSubmit={handleSubmit} style={{ width: "auto" }}>
                  <br></br>
                  <FormControl
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={handleSubmit}
                  />
                </Form>
              </Row>
            </Container>
            <p style={{ fontFamily: "-moz-initial" }}></p>
            <img
              src={imagenNotFound}
              alt="Sin resultados"
              className="img-home"
            />
          </>
        )}
      </header>
    </div>
  );
};

export default ProductDetail;
