import React, { useState } from "react";
import "./Landing.css";
import ProductSideBar from "../Products/ProductSideBar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

const Landing = () => {
  const [text, setText] = useState('Hello')
  return (
    <div className='landing-container'>
      <h1>Verses</h1>
      <p className='subtitle'>a non-gendered closet</p>
      <div className='description'>
        <p>curated clothing in the name of fluidity and freedom.</p>
        <p>the subscription service designed to degender self expression.</p>
      </div>
      <ProductSideBar />
      <CSSTransition
        className='fade-appear'
        in={text}
        timeout={2000}
        className='my-node'
      >
        <Item type='button' onClick={() => setText(false ? true : false)}>
          {text}
        </Item>
      </CSSTransition>
    </div>
  );
};

const Item  =  styled.div`
height: 40px;
width: 40px;
color: blue;
`



export default Landing;
