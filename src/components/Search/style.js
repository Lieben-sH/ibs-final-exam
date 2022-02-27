import styled from "styled-components";

export const SearchContainer = styled.div`
width: 80%;
/* margin: 3px 195px; */
margin-left: 200px;
/* position: absolute; */
height: 80px;
background-color: white;
.search{
 width: 1100px;
 padding:10px;
 height: 60px;
 display: flex;
 justify-content: space-between;
 .input{
     width:360px;
     height: fit-content;
     padding: 10px;
     display: flex;
     justify-content: space-between;
     background-color: rgb(240, 243, 245);
     border-radius: 10px;
     margin-left: 50px;
     input{
         border:none;
         color:green;
         font-family: sans-serif;
         font-size: 16px;
         padding:5px;
         background-color:rgb(240, 243, 245);
         border-radius: 5px;
     }
     input:active{
         border: none;
     }
     img{
         padding-right: 5px;
         width: 20px;
     }

 }
 .search-right{
     width: 160px;
     display: flex;
     margin-right:30px;
     img{
         width:20px;
         height: 20px;
         margin-top: 10px;
     }
     .my{
         width: 160px;
         height: 55px;
         padding:10px;
         display: flex;
         /* border:1px solid #FAFAFA; */
         border-radius: 8px;
         margin-left: 20px;
         margin-top:-5px;
         p{
           font-family: 'Poppins', sans-serif;
           font-weight: 600;
           color: black;
           font-size: 11px;
           margin-left: 15px;
           /* background-color: black; */
           padding: 6px 10px;
           border-radius: 5px;
           width: 100%;
           &:hover{
               /* background-color: wheat; */
               color: black;
               cursor: pointer;
           }
         }
         .myImg{
             width:32px;
             height: 33px;
             margin-top: 0;
             border-radius: 10px;
         }
     }
 }
}
`;