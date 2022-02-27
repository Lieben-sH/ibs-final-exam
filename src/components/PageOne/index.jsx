import React from "react";
import dots from "../../assets/image/dots.png";
import User from "../../assets/image/user.png";
import Arrow from "../../assets/image/right-arrow.png";
import Money from "../../assets/image/save-money.png";
import ShCart from "../../assets/image/shopping-cart-2.png";
import dollar from "../../assets/image/dollar-bills-stack.png";
import { Buttons, Flex, HomePageWrapper } from "./style";
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts'



import {
  PageWrapper,
  Container,
  Video,
  Videos,
  Text,
  Img,
  BoxCard,
  Containerone,
  Cards,
  Image,
  ImageDiv,
  Dollar,
  Texts,
  Shareimg,
  DivFlex,
  P,
} from "./style";
// import people from "./people.json"
// import PersonCard from '../../components/personCard';
import videos from "../../assets/video.mp4";
import videos2 from "../../assets/video2.mp4";
import order from "../../assets/order.png";
import share from "../../assets/share.png";
import expenses from "../../assets/expenses.png";
import visitors from "../../assets/visitors.png";
import coupon from "../../assets/coupon.png";
import Donut from "../chart.js";
import App from "../TwoChart";




function HomePage() {
  const series1 = [
    {
      name: "desktop",
      data: [20, 70, 50, 70, 40, 100, 150],
    },
  ];
  const series2 = [
    {
      name: "mobile",
      data: [20, 65, 80, 90, 120, 85, 150, 180, 230],
    }
  ];

  const option3 = {
    labels: ["desktop", "mobile", "tablet",],
    title: {
      text: "Visit Customer",
      style: {
        fontSize: "18px",
        fontWeight: "600",
        color: "#535B65",
      },
    },
    style: {
      margin: "10px 20px",
    },
    colors: ["#4049FE", "#FFBF40", "#34DEFF",],
    theme: {
      mode: "light",
    },
    dataLabels: {
      enabled: false,
    },
  };

  const option2 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "string",
      category: ["Sun", "Mon", "Tue", 40, 50, 60, 70],
    },
    title: {
      text: "Analytics",
      style: {
        fotnSize: 30,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };
  const option1 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "number",
      category: [20, 50, 30, 40, 50, 60, 70],
    },
    title: {
      text: "Sales overview",
      style: {
        fotnSize: 30,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };

  return (
    <HomePageWrapper>
      {/* <Flex>
        <br />
        <Buttons> Download report</Buttons>
      </Flex> */}
      <PageWrapper>
          <Containerone>
            <BoxCard>
              <Cards>
              <ImageDiv>  <Image src={coupon} alt="" /></ImageDiv>
              <Dollar>$25,255.00</Dollar>
              <Texts>Today Sales</Texts>
              </Cards>
              <DivFlex>
              <Shareimg src={share} alt="" />
              <P>+35%</P>
              </DivFlex>
            </BoxCard>

            <BoxCard>
              <Cards>
              <ImageDiv>  <Image src={expenses} alt="" /></ImageDiv>
              <Dollar>$1255.00</Dollar>
              <Texts>Today Expenses</Texts>
              </Cards>
              <DivFlex>
              <Shareimg src={share} alt="" />
              <P>+10%</P>
              </DivFlex>
            </BoxCard>
            <BoxCard>
              <Cards>
              <ImageDiv>  <Image src={visitors} alt="" /></ImageDiv>
              <Dollar>5355</Dollar>
              <Texts>Today Visitors</Texts>
              </Cards>
              <DivFlex>
              <Shareimg src={share} alt="" />
              <P>+15%</P>
              </DivFlex>
            </BoxCard>
            <BoxCard>
              <Cards>
              <ImageDiv>  <Image src={order} alt="" /></ImageDiv>
              <Dollar>500</Dollar>
              <Texts>Today Orders</Texts>
              </Cards>
              <DivFlex>
              <Shareimg src={share} alt="" />
              <P>+17%</P>
              </DivFlex>
            </BoxCard>
           
          </Containerone>
        </PageWrapper>

      <div className="middle">
        <div className="apexcharts1">
         
          <Chart
            style={{ margin: "auto",  padding:"10px 5px" }}
            options={option1}
            series={series1}
            type="bar"
            width={650}
            height="310"
          />
          {/* <div className="AppChart">
          <App/>
          </div> */}
        </div>
        <div className="apexcharts2">
          <Chart
            style={{ margin: "10px -10px auto", backgroundColor:"white", padding:"10px 5px" }}
            options={option2}
            series={series2}
            type="area"
            width={380}
            height="270"
            title="Analtics"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="table">
          <p className="namePage">Recent Orders</p>
          <table>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Data</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>#fd2104</td>
              <td>
                <img
                  src="https://cdn.pixabay.com/photo/2020/07/15/18/29/sneakers-5408659_960_720.png"
                  alt="nike"
                />
               <p className="text"> Nike Air Max </p>
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg">Complete</td>
            </tr>
            <tr>
              <td>#02fd17</td>
              <td>
                <img
                  src="https://cdn.pixabay.com/photo/2013/07/13/12/17/headphone-159569_960_720.png"
                  alt="headphone"
                />
              <p className="text"> Headphone </p>
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg2">Pending</td>
            </tr>
            <tr>
              <td>#0602f7</td>
              <td>
                <img
                  src="	https://cdn.pixabay.com/photo/2013/07/12/18/39/smartphone-153650_960_720.png"
                  alt="iphon"
                />
               <p className="text"> Iphone Pro </p>
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg3">Canceled</td>
            </tr>
          </table>

          <div className="table-footer">
          </div>
        </div>
        <br />
        <div className="charts">
          <Chart
            type="donut"
            width="360"
            series={[70, 20, 20]}
            options={option3}
            style={{
              margin: "30px 5px 0px 0px",
              height: "250px",
              backgroundColor: "white",
            }}
          ></Chart>
           {/* <Donut/> */}
         
        </div>

        
      </div>
    </HomePageWrapper>
  );
}

export default HomePage;
