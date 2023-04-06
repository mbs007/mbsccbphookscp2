// Style your elements here
import styled from 'styled-components'

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#24263c, #383a4e);
  background-size: cover;
  height: 100vh;
`

export const InnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #475569;
  background-size: cover;
  border-radius: 15px;
  box-shadow: 5px 5px 3px 3px #434451;
  width: 250px;
  padding: 15px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const Head = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bolder;
  color: #f8fafc;
`

export const Para = styled.p`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`

export const PwdInput = styled.input`
  width: 90%;
  margin: auto;
  padding: 15px;
  background-color: #edeeff;
  outline: none;
  border: none;
`
export const ErrMsg = styled.p`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  color: #ef4444;
`
