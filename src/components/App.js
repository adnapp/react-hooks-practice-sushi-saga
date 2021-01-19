import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";
var plate = []

function App() {

  const [allSushi, setAllSushi] = useState([])
  const [sushiIndex, setSushiIndex] = useState(0)
  const [wallet, setWallet] = useState(100)

  useEffect(() => {
    fetch(API)
    .then(response => response.json())
    .then(data => setAllSushi(data))
  },[])

  function eatSushi(eatenSushi){
    if (wallet >= eatenSushi.price ) {
      setWallet(wallet-eatenSushi.price)
    const updatedSushis = allSushi.map((sushi) => {
      if (eatenSushi.id === sushi.id) return {...sushi, eaten: true}
      return sushi
    })
    setAllSushi(updatedSushis)
  }
  else {
    alert("Need more money")
  }

  }

  function handleMore(){
    setSushiIndex(sushiIndex+4)
  }


  function handleAddMoney(amount){
    setWallet(wallet+amount)
  }

  const selectedSushi = allSushi.slice(sushiIndex, sushiIndex+4)

  const eatenSushis = allSushi.filter((t) => t.eaten)
  
  return (
    <div className="app">
      <SushiContainer 
        allSushi = {selectedSushi}
        handleMore={handleMore}
        eatSushi = {eatSushi} 
        />
      <Table 
        plates={eatenSushis}
        wallet={wallet}
        handleAddMoney={handleAddMoney}
      />
    </div>
  );
}

export default App;
