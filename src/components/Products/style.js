import styled from "styled-components";

export const DataInput = styled.input`
  background-color: #3da0ff;
  color: white;
  font-weight: bold;
  font-family: sans-serif;
  /* border: 0; */
  border: 1px solid #3da0ff;
`;

export const ProductWrapper = styled.div`
  width: 83%;
  height: fit-content;
  margin-left: 240px;
  padding: 10px;

  .productNames {
    width: 50px;
  }
  .text-product {
    width: 197px;
    padding: 5px;
    margin-left: 20px;
    .text {
      color: black;
      font-weight: bold;
      font-size: 26px;
      font-family: "Roboto", sans-serif;
    }
  }

  .textname {
    color: black;
  }
  .df-products {
    width: 1000px;
    height: 50px;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
    .div {
      width: 400px;
      height: 50px;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      margin-left: 5px;
      .cp1 {
        width: 110px;
        height: 20px;
        p {
          font-weight: bold;
          color: black;
          cursor: pointer;
          margin-right: -5px;
          span {
            color: #45a5ff;
            font-weight: bold;
            font-family: "Poppins", sans-serif;
            border-bottom: 1px solid #45a5ff;
          }
        }
      }
      .cp2 {
        color: black;
        cursor: pointer;
        margin-top: 4px;
        /* margin-left: -55px; */
        font-weight: bold;
        margin-left: 8px;
        /* margin-right: -15px; */
        font-family: "Poppins", sans-serif;
        p:hover {
          color: #45a5ff;
        }
      }
      .cp3 {
        color: black;
        cursor: pointer;
        margin-top: 4px;
        margin-left: -30px;
        font-weight: bold;
        margin-left: 18px;
        /* margin-right: -35px; */
        font-family: "Poppins", sans-serif;
        p:hover {
          color: #45a5ff;
        }
      }
      .cp4 {
        color: black;
        cursor: pointer;
        margin-top: 4px;
        margin-left: -20px;
        font-weight: bold;
        margin-left: 8px;
        margin-right: -15px;
        font-family: "Poppins", sans-serif;
        p:hover {
          color: #45a5ff;
        }
      }
    }
    .popup {
      .shopping-cart2 {
        /* width:100px;
                height: 100px; */
        padding: 10px;
        margin-top: -15px;
        margin-left: -120px;
        position: absolute;
        border-radius: 8px;
        background-color: #3da0ff;
        color: black;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
          rgba(0, 0, 0, 0.22) 0px 10px 10px;
        a {
          img {
            width: 35px;
            cursor: pointer;
          }
        }
      }
      .shopping-cart {
        width: 50px;
        height: 46px;
        margin-top: -45px;
        margin-left: 490px;
        padding: 10px;
        border-radius: 8px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
          rgba(0, 0, 0, 0.22) 0px 10px 10px;
        a {
          img {
            width: 30px;
            cursor: pointer;
          }
        }
      }
      .active-modal {
        overflow-y: hidden;
      }
      .modal,
      .overlay {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: fixed;
      }

      .overlay {
        background: rgba(105, 104, 102, 0.603);
      }
      .modal-content {
        position: absolute;
        top: 45%;
        left: 50%;
        transform: translate(-50%, -50%);
        line-height: 1.4;
        background: white;
        padding: 14px 28px;
        border-radius: 3px;
        margin: 32px 10px;
        width: 1000px;
        height: 650px;
      }

      .close-modal {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 5px 8px;
        border: none;
        cursor: pointer;
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }

  .product {
    width: 100%;
    /* margin-left: 35px; */
    /* height:500vh; */
    padding: 10px;
    /* overflow-x: hidden; */
    table {
      width: 100% !important;
      /* padding:6px; */
      /* color: black; */
      background-color: light;
      tr,
      th,
      td {
        border-bottom: 1px solid grey;
        /* border-bottom:1px solid #F5F5; */
        /* width: 100px; */
        /* margin-left: 90px; */
        width: 15px;
        height: 20px;
        padding: 5px;
        color: black;
        /* font-weight: 900; */
        text-align: center;
        font-family: "Poppins", sans-serif;
        /* border-collapse: collapse; */
        line-break: anywhere;
        img {
          width: 50px;
          height: 40px;
          /* background-color: grey; */
        }
      }

      .add {
        img {
          width: 30px;
          height: 30px;
        }

        margin-top: 5px;
        margin-left: 10px;
      }
    }
  }

  .top {
    width: 100%;
    padding: 10px;
    display: flex;

    .btn-left {
      width: 150px;
      height: 40px;
      display: flex;
      justify-content: space-evenly;
      button {
        padding: 10px;
        border: none;
        color: black;
        background-color: white;
        border-radius: 10px;
        box-shadow: rgba(0, 0, 0, 0.3) 0px 14px 28px,
          rgba(0, 0, 0, 0.22) 0px 10px 10px;
      }
    }
  }
`;

export const ProductNames = styled.td`
  width: 100px;
`;

export const TD = styled.td`
  width: 100px;
  p {
    width: 100px;
  }
`;

export const Background = styled.div`
  .up {
    background-color: white;
    padding: 13px 15px;
    position: fixed;
    color: red;
    border: 2px solid red;
    font-weight: 900;
    right: 10px;
    border-radius: 50%;
    bottom: 10px;
    text-decoration: none;
    width: 55px;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .up:hover {
    background-color: wheat;
    padding: 13px 15px;
    position: fixed;
    right: 10px;
    color: blue;
    border-radius: 50%;
    bottom: 10px;
    border: 2px solid blue;
  }
`;

export const THH = styled.th`
  width: 100px;
`;

export const Loading = styled.div `
 .loading {
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-left:100px; */
  border-radius: 100%;
  margin-left: 400px;
  div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background-color: #45A5FF;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 50%;
    padding-bottom: 10px;
    animation: .5s linear 1s infinite alternate anima;
    &:nth-child(1) {
      animation-delay: 0.7s;
      background-color: blue;
    }
    &:nth-child(2) {
      animation-delay: 0.6s;
      background-color: blue;
    }

    &:nth-child(3) {
      animation-delay: 0.5s;
      background-color: blue;
    }

    &:nth-child(4) {
      animation-delay: 0.4s;
      background-color: blue;

    }

    &:nth-child(5) {
      animation-delay: 0.3s;
      background-color: blue;

    }

    &:nth-child(6) {
      animation-delay: 0.2s;
      background-color: blue;

    }
    &:nth-child(7) {
      animation-delay: 0.1s;
      background-color: blue;

    }
  }
}

@keyframes anima {
  to {
    opacity: 0.3;
    transform: translate3d(1, -2rem, 0);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    
  }
}
`;

export const Button = styled.button`
  width: 100px;
  background-color: #45A5FF;
  border: 0;
  color: white;
  font-weight: 900;
  font-size: 18px;
  text-shadow: 2px 3px 5px black;
`;