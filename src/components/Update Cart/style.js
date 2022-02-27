import styled from "styled-components";

export const TitleProduct = styled.div`
width:fit-content;
padding:8px;
border:none;
color:black;
font-weight:bold;
// border:2px solid black;
margin-left:10px;
// border-radius: 6px;
cursor: pointer;
// &:hover{
//   background-color: wheat;
//   color: red;
// }
`;
export const AddProductWrapper = styled.div`
  width:800px;
  height:600px;
  padding:10px;
  display:flex;
   /* background-color: red; */
  /* background: linear-gradient(107.81deg, #0047FF -0.31%, #EC00E2 100%); */
`;

export const FormWrapper = styled.form`
  width: 620px;
  border-radius: 10px;
  padding: 10px;
  /* margin-left: -30px; */
  height:520px;
  background-color: white;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px; */
  height: 520px;

`;
export const Input = styled.input`
  width: 100%;
  height:50px;
  padding: 10px;
  margin: 10px 0;
  border-radius:5px;
  border:1px solid silver;
  margin: 7px;
  color: black;
`;
export const UploadImage = styled.div`
border:1px solid black;
`;
export const Textarea = styled.textarea`
  margin: 7px;
  width: 100%;
  height:150px;
  padding: 10px;
  // margin-bottom: 50px;
  /* margin: 10px 0; */
  border-radius:5px;
  border:1px solid silver;
  font-family: sans-serif;
  color: black;
`;
export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top:-60px;
  border:1px solid silver;
  border-radius:10px;
  /* background-color: black;  */
  color: black;
  cursor: pointer;
   h4{
     color:black;
     font-weight:bold;
     font-family:'PT',sans-serif;
     
   }
   &:hover{
    background-color: white;
     border: 2px solid black;
     color: black;
   }
`;

export const Label = styled.label`
  /* background-color: #0e1538; */
  margin: 7px;
  height: 200px;
  padding: 20px;
  display:flex;
  border-radius: 10px;
  background-color: #F4F6F8;
  border: 3px dotted #E0E4E8;
  
  input{
   display: none;
   padding: 10px;
   border:none;

   }

   .txt{
     width:340px;
     height:fit-content;
     padding:10px;
     line-height:23px;
     h3{
       font-size:20px;
       color:black;
       font-weight: bold;
       font-family:'Poppins',sans-serif;
       margin-left: -10px;
       margin-top: 38px;
     }
     p{
       width: 800px;
       font-size:15px;
       color:black;
       font-weight:bold;
       /* background-color: red; */
       padding: 15px 10px;
       border-radius: 7px;
       margin-left: -20px;
       span{
         color:red;
         border-bottom:1px solid red;
         font-weight:900;
       }
     }
   }
   img{
     width:170px;
     height:170px;
     width: fit-content;
     display: block;
     margin: auto;
   }
   .img{
     width:25%;
   }


`;
export const InputWrapper=styled.div`
  width:600px;
  height:480px;
  padding:5px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: red;
  box-shadow: 5px 7px 7px lightgrey;
  border: 1px solid lightgrey;
  border-radius: 15px;
`;

// export const Video = styled.video`
//   width: 50%;
// `;

export const TextDiv = styled.div`
  font-size: 20px;
  font-family: sans-serif;
  font-weight: bold;
  color: black;
`;

export const CardWrapperDiv = styled.div`
  padding: 10px 40px;
  box-shadow: 5px 7px 7px lightgrey;
  width: 300px;
  height: 338px;
  border-radius: 15px;
  border: 1px solid lightgrey;
  margin-top: 10px;
  margin-left: 10px;
`;

export const CardWrapTwo = styled.div`
   box-shadow: 5px 7px 7px lightgrey;
   width: 300px;
   height: 200px;
   border: 1px solid lightgrey;
   margin-top: 10px;
   border-radius: 15px;
   margin-left: 10px;
`;

export const InputCode = styled.input`
  padding: 10px 20px;
  border: 1px solid grey;
  border-radius: 5px;
  width: 220px;
  margin-right: 10px;
  color: grey;
  font-weight: bold;
`;

export const LabelInput = styled.label`
  color: black;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 17px;
  margin: 7px;
  display: flex;
`;

export const PText = styled.p`
  margin: 4px;
  color: black;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const InputPText = styled.input`
  margin-top: 10px;
`;

export const TextGender = styled.p`
  color: black;
  font-weight: bold;
  font-family: sans-serif;
  font-size: 18px;
  margin-top: 10px;
`;

export const Select = styled.select`
  color: grey;
  font-weight: bold;
  padding: 10px;
  width: 220px;
  border-radius: 5px;
  border: 1px solid grey;
  margin-top: 5px;
  option{
    color: white;
    background-color: black;
  }
`;

export const InputCardTwoBox = styled.input`
  margin: 10px;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid grey;
  color: grey;
  margin-left: 40px;
  width: 220px;
`;

export const TextWorld = styled.p`
  font-size: 15px;
  font-weight: bold;
  color: #333;
  margin-left: 40px;
`;

export const ButtonPage = styled.button`
  color: greenyellow;
  background-color: #13b441;
  border: 0;
  padding: 15px;
  border-radius: 15px;
  width: 600px;
  margin-left: 22px;
  margin-top: 510px;
  font-family: sans-serif;
  font-weight: bold;
  margin-left: -920px;
  cursor: pointer;
  &:hover{
    background-color: greenyellow;
    color: #13b441;
  }
`;

