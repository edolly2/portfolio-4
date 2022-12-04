import React from 'react'
import styled from 'styled-components'
import Headshot from '../assets/me-headshot.png';
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from 'react-icons/fa';

const CardWrapper = styled.div`
display: flex;
flex-direction: column;
border: 1px solid rgba(119, 119, 119, 0.5);
border-radius: 0.8rem;
padding: 2.4rem;
align-items: center;
gap: 2.4rem;
box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.9);
background-color: rgba(119, 119, 119, 0.3);
backdrop-filter: blur(5px);
/* position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%); */
/* margin-top: 50%; */
/* margin-bottom: 100%; */
`;

const CardImg = styled.img`
width: 18.4rem; 
/* min-width: 12.8rem; */
height: auto;
background-color: rgba(119, 119, 119, 0.7);
border-radius: 50%;
`;

const CardSocialWrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
gap: 1.6rem;
`;

const Line = styled.div`
width: 100%;
height: 2px;
background-color: rgba(119, 119, 119, 0.5);
`;




const Card = () => {
  return (
    <CardWrapper>
      <CardImg src={Headshot} alt='Full Stack Developer, Eric Dollinger' />
      <Line />
      <CardSocialWrapper>
        <FaGithub className='icon' />
        <FaLinkedinIn className='icon' />
        <FaFacebook className='icon' />
        <FaTwitter className='icon' />
      </CardSocialWrapper>
    </CardWrapper >
  )
}

export default Card