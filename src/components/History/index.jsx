import React, { useEffect, useState } from "react";
// import CartIcon from "../../assets/image/shopping-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { getHistoryAction } from "../../redux/modules/history/HistoryAction";
import { Loading } from "../Products/style";
import { Card1, HistoryPage, LoadingPage, Text, Background } from "./style";

function History() {
  const dispatch = useDispatch();
  const productL = useSelector((state) => state.productList);
  const {loading, success, error,} = productL;
  useEffect(() => {
    dispatch(getHistoryAction());
  }, []);
  return (
    <HistoryPage>
    
    {loading && (
        <Loading>
          <div className="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Loading>
      )}
      {success && "Success"}
      {error && "Error"}
      {productL?.data?.map(({ id, productList },index) => (
        <Card1 key={id}>
         <div className="top">
         <p>{index +1}</p>
          {/* <img src={CartIcon} /> */}
         </div>
          <table>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
            
            {productList.map(
              ({ amount, product: {id, productName, price } },index) => (
                <>
                  <tr>
                    <td>{index +1}</td>
                    <td>{productName}</td>
                    <td>{amount}</td>
                    <td>${price}</td>
                    <td>${amount*price}</td>
                  </tr>
                </>
                
                
              )
            )}
          </table>
        </Card1>
      ))}

    <Background>
          <a href="#" class="up">
            {/* <i class="fas fa-chevron-up"></i>/ */}
            ⬆
          </a>
        </Background>
    </HistoryPage>
  );
}

export default History;
