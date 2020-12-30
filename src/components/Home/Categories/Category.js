import FormFileInput from "react-bootstrap/esm/FormFileInput";
import React, { Component } from "react";
import oranges from "../images/oranges.jpg";
import minute5_logo from "../images/minute5_logo.png";
import "./Category.css";
import { Container } from "react-bootstrap";
import Image from "react-bootstrap/Image";

class Category extends Component {
  render() {
    const categories = [
      {
        description: "Fruits",
        img: `${minute5_logo}`,
      },
      {
        description: "Vegetables",
        img: `${oranges}`,
      },
      {
        description: "Cerals",
        img: `${oranges}`,
      },
      {
        description: "Legumes",
        img: `${oranges}`,
      },
    ];
    return (
      <div className="items">
        {categories.map((foo) => (
          <Container>
            <div className="item">
              <img className="round-image" src={foo.img} alt={foo.description} width="100px"/>
                <h3>{foo.description}</h3>
              
            </div>
          </Container>
        ))}
      </div>
    );
  }
}
export default Category;
