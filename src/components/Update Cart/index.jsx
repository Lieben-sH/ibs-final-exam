import React, { useState } from "react";
import axios from "axios";
import UploadImage from "../../assets/bg_no (3).png";
import {
  AddProductWrapper,
  Button,
  ButtonPage,
  CardWrapperDiv,
  CardWrapTwo,
  FlexDiv,
  FormWrapper,
  Input,
  InputCardTwoBox,
  InputCode,
  InputPText,
  InputWrapper,
  Label,
  LabelInput,
  Pap,
  PText,
  Select,
  Textarea,
  TextDiv,
  TextGender,
  TextWorld,
  TitleProduct,
  TotalProduct,
  Video,
} from "./style";
function Add() {
  const [image, setImage] = useState("");

  const [post, setPost] = useState([]);

  const [imageProcess, setImageProcess] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const [submitProcess, setSubmitProcess] = useState({
    loading: false,
    success: false,
    error: false,
  });

  const sendImage = (e) => {
    setImageProcess({
      loading: true,
      success: false,
      error: false,
    });
    e.preventDefault();
    const file = e.target.files[0];

    const form = new FormData();
    form.append("image", file);

    axios
      .post(
        "https://store-management-backend-app.herokuapp.com/api/v1/attachment",
        form
      )
      .then((res) => {
        console.log(res.data);
        setImage(res.data);
        setImageProcess({
          loading: false,
          success: true,
          error: false,
        });
      })
      .catch((err) => {
        console.log("error", err);
        setImageProcess({
          loading: false,
          success: false,
          error: true,
        });
      });
  };

  const submitproduct = (e) => {
    setSubmitProcess({
      loading: true,
      success: false,
      error: false,
    });
    e.preventDefault();
    const { productName, amount, description, category, price } = e.target;
    const post = {
      productName: productName.value,
      amount: amount.value,
      imageId: image,
      description: description.value,
      category: category.value,
      price: price.value,
    };

    axios
      .post(
        "https://store-management-backend-app.herokuapp.com/api/v1/product",
        post
      )
      .then((res) => {
        console.log("succes", res.data);
        setPost("");
        setImage("");
        setSubmitProcess({
          loading: false,
          success: true,
          error: false,
        });
        e.target.reset();
      })
      .catch((err) => {
        setSubmitProcess({
          loading: false,
          success: false,
          error: true,
        });
        console.log("error", err);
      });
  };

  return (
    <>
      <TitleProduct>
        <TextDiv>Create a new product</TextDiv>
      </TitleProduct>
      <AddProductWrapper>
        <FormWrapper onSubmit={submitproduct}>
          <InputWrapper>
            <Input type="text" name="productName" placeholder="Product Name" />
            {/* <Input type="number" name="price" placeholder="Product Price" />  
        <Input type="number" name="amount" placeholder="Product Amount" />  
        <Input type="number" name="category" placeholder="Product Category" />   */}
            <Textarea
              placeholder="Write something awesome..."
              name="description"
            />

            <Label>
              {imageProcess.loading ? (
                "Loading"
              ) : imageProcess.error ? (
                <b>error</b>
              ) : imageProcess.success ? (
                <img
                  src={
                    "https://store-management-backend-app.herokuapp.com/api/v1/attachment/" +
                    image
                  }
                />
              ) : (
                <img src={UploadImage} />
              )}

              <input type="file" onChange={sendImage} />
              <div className="txt">
                <h3>Drop Select Or File</h3>
                <p>
                  Drop Filse here or click <span>browse</span> thorought your
                </p>
              </div>
            </Label>
          </InputWrapper>

          {/* <Button>
            <h4>Create Product</h4>
        </Button> */}
          {/* <br /><br /><br /> */}
        </FormWrapper>

        <div>
          <CardWrapperDiv>
            {/* <input type="range" /> */}
            <InputCode type="password" placeholder="Product Code" />
            <br />
            <br />
            <InputCode type="password" placeholder="Product SKU" />

            <TextGender>Gender</TextGender>
            <FlexDiv>
              <LabelInput>
                <InputPText type="radio" name="gender" />
                <PText>Men</PText>
              </LabelInput>

              <LabelInput>
                <InputPText type="radio" name="gender" />
                <PText>Women</PText>
              </LabelInput>
              <LabelInput>
                <InputPText type="radio" name="gender" />
                <PText>Kids</PText>
              </LabelInput>
            </FlexDiv>
            <Select>
              <option value="T-shirt" selected>T-shirts</option>
              <option value="Jeans">Jeans</option>
              <option value="T-shirt">T-shirts</option>
            </Select>
            <br />
            <br />
            <InputCode type="password" placeholder="Toy Story 3" />
          </CardWrapperDiv>

          <CardWrapTwo>
            <TextWorld>Regular Price</TextWorld>
          <InputCardTwoBox type="password" placeholder="$ 0.00" />
          <TextWorld>Sale Price</TextWorld>
          <InputCardTwoBox type="password" placeholder="$ 0.00" />
          </CardWrapTwo>

          
        </div>
        <div>
            <ButtonPage>Create Product</ButtonPage>
          </div>
      </AddProductWrapper>
      
    </>
  );
}

export default Add;

