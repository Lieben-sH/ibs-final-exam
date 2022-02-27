import styled from "styled-components";

export const HomePageWrapper = styled.div`
width: 83.3%;
height: fit-content;
margin-left:225px;
background-color: #FAFAFA;
.wrapper{
        width:100%;
        height:200px;
        padding:10px;
        display:flex;
        justify-content: space-between;
        .mini-card{
            width:23.5%;
            height:140px;
            padding:20px;
            margin-left: 5px;
            line-height: 23px;
            border-radius: 10px;
            background-color:#fff;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            .card-image{
                display: flex;
                justify-content: space-between;
                .img1{
                    background-color: #EEF7FF;
                    border-radius:50%;
                    padding: 10px;
                    margin-top: -8px;
                    img{
                        width:30px;
                        margin-top: 4px;
                       
                    }
                   
                }
                .img2{
                    margin-top: -15px;
                    width:30px;
                    height:30px;
                }
            }
            .price-card{
                font-size: 18px;
                font-weight: bold;
                font-family: "Poppins",sans-serif;
                color:black;
                margin-top: 14px;
            }
            .card-total{
                display: flex;
                justify-content: space-between;

                .bb{
                    display: flex;
                    justify-content: space-between;
                    img{
                        width:20px;
                        height: 20px;
                        filter: invert(54%) sepia(28%) saturate(1078%) hue-rotate(94deg) brightness(93%) contrast(88%);
                        transform: rotate(-30deg);
                    }
                    .src{
                        width:20px;
                        transform: rotate(40deg);
                        height: 20px;
                        filter: invert(33%) sepia(87%) saturate(1432%) hue-rotate(341deg) brightness(104%) contrast(105%);
                    }
                    p{
                        color:blue;
                        font-size: 15px;
                      
                    }
                    .p{
                        color:red;
                        font-size: 15px;
                    }
                    
                    .title-card{
                        font-size: 15px;
                    }
                }
            }
        }
    }
    .middle{
        width:100%;
        display: flex;
        height: 280px;
        justify-content: space-between;
        .apexcharts1{
            padding:10px;
            margin-top:-25px;
            background-color: white;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            border-radius:10px;
            margin-left: 15px;
            width:60%;
            height:330px;
            .title-chart{
                p{
                    color:grey;
                    font-size:17px;
                    font-weight:600;
                    font-family:'Poppins',sans-serif;
                }
                display: flex;
                width:100%;
                justify-content: space-between;
                select{
                    color:grey;
                    padding:5px;
                    border-radius:10px;
                    border:1px solid grey;
                    option{
                        color:grey;
                    }
                }
            }
        }
        .apexcharts1{
            height: calc(100%-50px)
            
        }

        /* .AppChart{
            width: 700px;
            background-color: #67CD90;
        } */


        .apexcharts2{
            padding:10px;
            margin-top:-25px;
            background-color: white;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            border-radius:10px;
            margin-right:10px;
            margin-left: 20px;
            width:35%;
            height:330px;
            .title-chart{
                p{
                    color:grey;
                    font-size:17px;
                    font-weight:600;
                    font-family:'Poppins',sans-serif;
                }
                display: flex;
                width:100%;
                justify-content: space-between;
                select{
                    color:grey;
                    padding:5px;
                    border-radius:10px;
                    border:1px solid grey;
                    option{
                        color:grey;
                        border:1px solid grey;
                        border-radius: 10px;
                    }
                }
            }
        }
    }
    .bottom{
        width:100%;
        height:fit-content;
        padding:20px;
        display: flex;
        justify-content: space-between;
        .table{
            width:675px;
            height:308px;
            padding:10px;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            border-radius:10px;
            background-color: white;
            margin-top: 33px;
            margin-left: -5px;
            p{
                color:black;
                font-weight: bold;
                font-size: 19px;
                margin-left:25px;
                margin-top:10px;
                font-family: sans-serif;
            }
           table{
               width:100%;
           }
            td img{
                width:30px;
                height: 30px;
                
            }
           .bg{
               color: #FFBF40;
               background-color: #FFF8ED;
               border-radius:20px;
               padding: 8px;
               width: 15%;
               display: flex;
               justify-content: center;
               align-items: center;
               &:hover{
                   color: black;
                   background-color: white;
                   border: 1px solid black;
                   cursor: pointer;
               }
           }
           .bg2{
               color:#67CD90;
               border-radius: 20px;
               padding: 8px;
               background-color: #ECFBF2;
               width: 15%;
               display: flex;
               justify-content: center;
               align-items: center;
               &:hover{
                   color: black;
                   background-color: white;
                   border: 1px solid black;
                   cursor: pointer;
               }
           }
           .bg3{
               color: #DB7761;
               border-radius: 20px;
               padding: 8px;
               background-color:#FFEFEB;
               width: 15%;
               display: flex;
               justify-content: center;
               align-items: center;
               &:hover{
                   color: black;
                   background-color: white;
                   border: 1px solid black;
                   cursor: pointer;
               }
           }
            tr,th,td{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom:-5px;
                padding:9px;
                border:none;
                font-size:15px;
                color: #777;
            }
            .text{
                color: #777;
                font-size: 17px;
                /* border: 1px solid blue; */
                /* border-radius: 5px; */
                padding: 5px 5px;
                font-weight: 600;
            }

            .namePage{
                color: #6A727B;
                font-family: sans-serif;
                font-weight: 600;
                font-size: 18px;
                /* margin-right: 10px; */
                margin: 10px 18px;
            }
        }
        .table-footer{
            a{
           margin-top: 20px;
           margin-left: 300px;
           text-decoration:none;
           color:black;
           font-size:normal;
           font-family: 'Poppins';
            }
          a:hover{
              color:#9DA2A8;
          }
          a:focus{
              color:#9DA2A8;
          }
        }
        .charts{
            padding:10px;
            margin-top:30px;
            background-color: white;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
            border-radius:10px;
            margin-left:700px;
            position: absolute;
            width:394px;
            height:310px;
     
        }
       
    }
`;











export const PageWrapper = styled.div`
  width: 100%;
  display: flex;
`;


export const Text = styled.div`
  font-size: 80px;
  font-family: sans-serif;
  font-weight: 900;
  background-color: white;
  color: black;
  margin-top: 120px;
  /* margin-left: 80px; */
  text-shadow: 5px 2px 7px red;
`;

export const Img = styled.img`
  width: 100%;
  margin-top: 220px;
`;

export const Containerone = styled.div`
  display: flex;
  justify-content: space-between;
  justify-content: space-around;
  margin: 70px 50px;
  margin-left: -3px;

`;

export const BoxCard = styled.div`
  width: 270px;
  height: 160px;
  background-color: white;
  border-radius: 10px;
  margin-left: 10px;
  display: flex;
  box-shadow: 5px 2px 7px lightgray;

`;

export const Cards = styled.div``;


export const Image = styled.img`
 width: 70%;
`;

export const ImageDiv = styled.div`
  border-radius: 50px;
  background-color: lightblue;
  width: 50px;
  height: 50px;
  margin: 15px 15px;
  display: flex;
 justify-content: center;
 align-items: center;
`;

export const Dollar = styled.div`
  font-weight: 800;
  font-family: sans-serif;
  margin-left: 15px;
  color: #333;
`;

export const Texts = styled.div`
  margin-left: 15px;
  color: grey;
  font-size: 17px;
  font-weight: 600;
`;

export const Shareimg = styled.img`
  width: 28px;
  height: 28px;
  background-color: grey;
  border-radius: 50px;
`;

export const DivFlex = styled.div`
  display: flex;
  margin-top: auto;
  margin-left: 30px;
  margin-bottom: 10px;
`;
export const P = styled.div`
  font-size: 17px;
  font-weight: 600;
  color: green;
`;

export const Buttons = styled.button`
  background-color: #45A5FF;
  color: #E1FCFF;
  border: 0;
  border-radius: 7px;
  padding: 10px;
  margin-left: 750px;
  margin-top: 10px;
`;

export const Flex = styled.div`
  display: flex;
`;