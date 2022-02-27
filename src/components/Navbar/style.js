import styled from "styled-components";

export const NavbarWrapper = styled.div`
 width: 16.5%;
 height:100vh;
 background-color: #fff;
 position: fixed;
 .navbar-logo{
     padding:13px;
     p{
         width: 100%;
         color: black;
         font-family: sans-serif;
         font-weight: bold;
         font-size: 27px;
         margin-left: -5px;
         padding: 5px 5px;
         display: flex;
         align-items: center;
         justify-content: center;
         margin-top: 20px;
         cursor: pointer;
     }
 }


 .nav-navbar{
     padding:10px;
     width: 220px;  
     height:100vh;
     .nav{
         list-style: none;
         width: 200px;
         margin: 12px -2px;
             .link{
                 display: flex;
                 text-decoration:none;
                 padding: 10px;
                 img{
                     width:24px;
                     margin-left: 5px;
                     filter: sepia(13%) saturate(294%) hue-rotate(120deg) brightness(500%) contrast(6%) ;
                     /* color: blue; */
                     /* background-color: blue; */
                     
                 }
              
                 p{
                    color: #45A5FF;  
                    margin-left: 14px;
                    margin-top: 4px;
                    font-weight: 900;
                    font-family: 'Poppins',sans-serif;
                 }
         
             }
     
         
     
     }
 }
`;

export const LiBox = styled.li`
   margin-bottom:20px;
   background-color: ${({ active }) => active ? "#EDF6FF" : "transparent"};
   /* filter: sepia(1%) saturate(2094%) hue-rotate(180deg) brightness(100%) contrast(66%); */
`;