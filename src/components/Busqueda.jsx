import { useState } from "react";
import { Form, Button, Image, Col } from "react-bootstrap";
import logo from "../assets/imagenes/bazarr.jpg";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/items?search=${searchQuery}`);
  };

  return (
    <Form>
      <Image src={logo} fluid style={{ width: "7rem", height: "4rem" }} />
      <h1>Bazar Online</h1>
      <br />
      <Form.Control
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Buscar productos..."
        className="form-control"
      />
      <hr />
      <Col xs="auto">
        <Button variant="outline-info" onClick={handleSearch}>
          Buscar
        </Button>
      </Col>
    </Form>
  );
};

export default SearchBox;
