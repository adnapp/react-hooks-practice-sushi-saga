import React from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({allSushi, handleMore, eatSushi}) {

  const sushiObj = allSushi.map((sushi) => {
    return <Sushi 
      key={sushi.id}
      sushi={sushi}
      eatSushi={eatSushi}
    />
  })


  return (
    <div className="belt">
      {sushiObj}
      <MoreButton handleMore={handleMore}/>
    </div>
  );
}

export default SushiContainer;
