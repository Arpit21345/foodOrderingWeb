import "./Add.css";
import { useState } from "react";
import { assets } from "../../assets/assets";
const Add = () => {
  const [image, setImage] = useState(false);
  
  return (
    <div className="add">
      <form className="flex-col">
        <div className="add-img-upload flex-col">
          <p>Upload Image </p>
          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>
        <div className="add-product-name flex-col">
          <p>Product name</p>
          <input type="text" name="name" placeholder="Type Here" />
        </div>
        <div className="add-product-description flex-col">
          <p>Product name</p>
          <textarea
            name="description"
            rows="6"
            placeholder="Write content here"
          />
        </div>
        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Product category</p>
            <select name="category">
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="PureVeg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="add-price flex-col">
            <p>Product price</p>
            <input type="Number" name='price' placeholder="$20" />
          </div>
        </div>
        <button type='submit' className="add-btn">ADD</button>
      </form>
    </div>
  );
};

export default Add;
