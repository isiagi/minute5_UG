import FormFileInput from 'react-bootstrap/esm/FormFileInput';
import React,{Component} from "react";
import oranges from "../images/oranges.jpg"
import "./Category.css"


class Category extends Component{
    
    render(){
        const categories = [{
            description: "Fruits",
            img:  `${oranges}`
        },
            {
                description: "Vegetables",
                img: `${oranges}`
            },
            {
                description: "Cerals",
                img:  `${oranges}`
            }
     ]
        return(
            <div className="items">
           { categories.map(foo =>(
               
               
                   <div className="item">
                        
                       <img src={foo.img} alt={foo.description} width="100px"/>
                       <h3>{foo.description}</h3>
                     <div/>
                   </div>
               )
           )
        }
            </div>
        )
    }
}
export default Category;