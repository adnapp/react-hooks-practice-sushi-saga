import React, {useState} from "react";

function Sushi({sushi, eatSushi}) {
  const { id, name, img_url, price, eaten} = sushi


  function onClickSushi() {
    if (!eaten) {
      eatSushi(sushi)}
      else {
        alert("This is an empty plate!") 
      }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={onClickSushi}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
