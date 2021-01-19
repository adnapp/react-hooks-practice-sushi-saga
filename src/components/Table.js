import React, {useState} from "react";

function Table({ plates = [] , wallet, handleAddMoney}) {

  const [walletAdd, setWalletAdd] = useState("")


  // renders an empty plate for every element in the array
  const emptyPlates = plates.map((_, index) => (
    <div className="empty-plate" style={{ top: -7 * index }} />
  ));


  function onChangeMoney(e){
    setWalletAdd(e.target.value)
  }


  function handleSubmit(event){
    event.preventDefault();
    handleAddMoney(parseInt(walletAdd))
  }

  return (
    <>
      <h1 className="remaining">
        You have: ${wallet} remaining!
      </h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          onChange={onChangeMoney} 
          value={walletAdd}>

        </input>
        <button type="submit"></button>
      </form>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
