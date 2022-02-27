import React, { useEffect, useState } from "react";
import CartIcon from "../../assets/Card3.png";
import Plus from "../../assets/plus3.jfif";
import {
  ProductWrapper,
  LoadingPage,
  DataInput,
  ProductNames,
  TD,
  Background,
  THH,
  Loading,
  Button,
} from "./style";
import { getProductAction } from "../../redux/modules/GetProduct/getProdcuct.Action";
import { useDispatch, useSelector } from "react-redux";
import Add from "../Update Cart";
import { addToCart } from "../../redux/modules/cart/Cart.Action";

function ProductPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const product = useSelector((state) => state.getProduct);
  const { loading, success, error, data } = product;

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };
  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  useEffect(() => {
    dispatch(getProductAction());
  }, []);

  return (
    <>
      <ProductWrapper>
        {loading && (
        <Loading>
          <div className="loading">

            <div></div>
            <div></div>
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
        <div className="text-product">
          <h3 className="text">Products</h3>
        </div>
        <div className="df-products">
          <div className="div">
            <div className="cp1">
              <p>
                <span>All Product</span>
              </p>
            </div>
            <div className="cp2">
              <p className="textname">Completed</p>
            </div>
            <div className="cp3">
              <p className="textname">Panding</p>
            </div>
            <div className="cp4">
              <p className="textname">Cancel</p>
            </div>
          </div>
          <div className="popup">
            <div className="shopping-cart2">
              {/* <a>
                <img src={Plus}  />
              </a> */}
              {/* <DataInput type="date" onClick={toggleModal} /> */}
              <Button onClick={toggleModal} > Product</Button>
            </div>
            {modal && (
              <div className="modal">
                <div className="overlay" onClick={toggleModal}></div>
                <div className="modal-content">
                  <Add />

                  <button className="close-modal" onClick={toggleModal}>
                    {" "}
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1828/1828747.png"
                      alt="hh"
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="product">
          {success && "Success"}
          {error && "Error"}
          <table>
            <tr>
              <th>#</th>
              <th>Product ID</th>
              <th>Photo</th>
              <th>Product Name</th>
              <THH>Address</THH>
              <th>Data</th>
              <th>Price</th>
              <th>Buy</th>
            </tr>

            {product.data
              .filter((v, i) => !cart.some((value) => value.id === v.id))
              .map(
                (
                  { id, productName, price, imageId, description, category },
                  index
                ) => (
                  <tr key={id}>
                    <td>{index + 1}</td>
                    <td>{id}</td>
                    <td>
                      <img
                        src={`https://store-management-backend-app.herokuapp.com/api/v1/attachment/${imageId}`}
                      />
                    </td>
                    <TD>
                      <p>{productName}</p>
                    </TD>
                    <td>{description}</td>
                    <td>{category}</td>
                    <td>{price}</td>
                    <td>
                      <img
                        src={CartIcon}
                        className="add"
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id,
                              imageId,
                              productName,
                              chosen: 1,
                              price,
                            })
                          )
                        }
                      />
                    </td>
                  </tr>
                )
              )}
          </table>
        </div>

        <Background>
          <a href="#" class="up">
            {/* <i class="fas fa-chevron-up"></i>/ */}
            ⬆
          </a>
        </Background>
      </ProductWrapper>
    </>
  );
}

export default ProductPage;
