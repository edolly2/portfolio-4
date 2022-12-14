import styled from 'styled-components'

const Btn = styled.button`
padding: 0.8rem;
border-radius: 0.8rem;
width: 12rem;
height: 4rem;
margin: 4.8rem 0;
&:hover {
  cursor: pointer;
  transform: scale(1.1);
}
`;

const Button = ({ color, text }) => {
  return (
    <Btn className={`${color}`}>{text}</Btn>
  )
}

export default Button