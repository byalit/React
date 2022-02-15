import React , { useState } from 'react';
import ProductsList from './components/ProductsList/ProductsList';
import ShopingList from './components/ShopingList/ShopingList';
import styles from './App.module.scss';
import produkty from "./common/consts/produkty";


let list =  [];

function App() {
  const [resultsToDisplay] = useState(produkty);
  const [showListDisplay, setListDisplay] = useState(list);
  const [rerender, setRerender] = useState(false);        

  
  const sendDataToParent = (item) => { 
    let iloscWKoszyku = showListDisplay.length
    let maxid = 0;
    for(let i = 0; i < iloscWKoszyku; i++){
      const a = showListDisplay[i].id;
      if(a >= maxid) maxid= a + 1; 
    }
    
    showListDisplay.push({id: maxid, nazwa: item.nazwa, podkreslony: false});
    setListDisplay(showListDisplay);
    setRerender(!rerender);
  };


  return (
    <div className={styles.appWrapper}>
      <div className={styles.columnsWrapper}>
        <ProductsList showProductsToDisplay={resultsToDisplay} sendDataToParent={sendDataToParent}/>
        </div>
      <div className={styles.columnsWrapper1}>
        <ShopingList showPurchaseList={showListDisplay}/>
      </div>
     </div>
    
  );
}

export default App;
