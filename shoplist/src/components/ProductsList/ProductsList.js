import React from "react";
import commonColumnsStyles from "../../common/styles/Columns.module.scss";

class ProductsList extends React.Component{

  render() {
    const { showProductsToDisplay } = this.props;
    return (
      <div>
        <header>
        <div>
          <b><u>Lista produktów:</u></b>
          <ul className={commonColumnsStyles.AppList}>
            {showProductsToDisplay.map((item) => <li onClick={() => {this.props.sendDataToParent(item);}}  key={item.nazwa}> {`${item.nazwa}`} </li>)}   
          </ul>
        </div>
        </header>
      </div>
    );
  }
}

export default ProductsList;