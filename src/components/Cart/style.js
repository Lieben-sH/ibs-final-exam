import styled from "styled-components";

export const CartWrapper=styled.div`
  width:84%;
  height:90vh;
  padding:10px;
  margin-left:225px;
  background-color:#F1F1F1;
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
  .table-cart{
    width:63%;
    height:fit-content;
    border-radius:10px;
    box-shadow: rgba(0, 0, 0, 0.30) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color:white;
    padding:10px;
    margin-left:40px;

  }
  .price-cart{
    width:23%;
    height:380px;
    margin-right:10px;
    border-radius:10px;
    display:block;
    margin-left:770px;
    box-shadow: rgba(0, 0, 0, 0.30) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
    background-color:white;
    padding:15px;
    z-index:999;
    position:fixed;
    .txt-cart{
      display:flex;
      justify-content:space-between;
      h1{
      font-weight:700;
      font-family:'Poppins',sans-serif;
      color:black;
      margin-left:20px;
    }
    .out{
      color:red;
      font-weight:500;
      font-family:'Poppins',sans-serif;
      text-decoration:none;

    }
    }

    .sub{
      margin-top:30px;
      margin-left:-10px;
      line-height:28px;
      p{
        color:black;
        font-weight:600;
        font-family:'PT',sans-serif;
      }
    }
  }
`;

export const Text = styled.p`
  font-size: 16px;
  font-family: sans-serif;
  font-weight: bold;
  color: red;
  margin-left: -10px;
`;

export const TextareaName = styled.textarea`
  margin-left: -10px;
  border: 1px solid red;
  border-radius: 3px;
`;

export const InputName = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid blue;
  margin-left: -10px;
  width: 298px;
  color: blue;
  font-family: sans-serif;
  font-weight: bold;

  ::placeholder{
    color: blue;
  }
`;

export const Clean =styled.div`
        width: 100%;
        display:flex;
        margin-top:50px;
    .btn-left{
        width:150px;
        height:40px;
        display:flex;
        justify-content:space-evenly;
        margin-left: 137px;
        margin-top: -25px;
        button{
            padding:10px;
            border:none;
            color:lightblue;
            width: 200px;
            margin-left: 5px;
            background-color:blue;
            border-radius:10px;
            margin-top: -5px;
            cursor: grab;
            &:hover{
              background-color: green;
              color: greenyellow;
            }
          }
    }
`;

export const Table = styled.table`
  width: 100%;
  &,th,td{
      border:1px solid white;
      text-align: center;
      color: black;
      padding: 7px;
      img{
        width:40px;
        height:40px;
      }
  }
  .update{
    border: none;
    padding:4px;
    color:black;
    font-size: 18px;
    background-color:none;
  }
  .delete{
    border: none;
    padding:4px;
    color:black;
    font-size: 20px;
    background-color:none;
  }
  .actiondelete{
    border: 1px solid black;
    color: black;
    padding: 6px;
    background-color:none;
  }
`;
export const Button = styled.button`
  padding: 10px;
  color: white;
  font-size: 16px;
`;