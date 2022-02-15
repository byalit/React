import React, { useState } from 'react';
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

function ShopingList({showPurchaseList}) {

  const [ purchaseList ] = useState(showPurchaseList);
  const [ rerender, setRerender] = useState(false);

  
  const buyClick = (zakup, koszyk, e) => {
    e.preventDefault();
    let indexOfRemove = -1;                             
    for(let i=0; i<Object.keys(koszyk).length; i++){
      if(koszyk[i].id===zakup.id) indexOfRemove = i
    }
    if (indexOfRemove > -1) {
      koszyk.splice(indexOfRemove, 1);
    }
    setRerender(!rerender);
  };


   return (
    <div>
      <header>
        <b><u>Lista zakupów:</u></b>
        <ul className={commonColumnsStyles.AppProd}>
          {purchaseList.map((zakup) => 
          <li onContextMenu={(e)=>buyClick(zakup, purchaseList,e)} >
            {`${zakup.nazwa}`}</li>)}  
        </ul>
      </header>
    </div>
  );
}

export default ShopingList;