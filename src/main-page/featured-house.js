import React from "react";
import House from '../house/house.js'
const FeaturedHouse = props => {
  if (props.house) 
    return (
      <div>
        <div className="row featuredHouse">
          <h3 className="col-md-12 text-center">Featured House</h3>
        </div>
        <House house={props.house}/>
      </div>
    )
    return (
        <div>No featured house at this moment</div>
    );
};

export default FeaturedHouse;
