import styled from 'styled-components'

export const LoginContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#212121' : 'transparent')};
`

export const LoginForm = styled.form`
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 20px 15px 35px 15px;
  background-color: ${props => (props.isDark ? '#0f0f0f' : 'white')};
  box-shadow: ${props =>
    props.isDark ? 'none' : 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'};

  @media (min-width: 768px) {
    padding: 40px;
    padding-bottom: 45px;
  }
`

export const WebsiteLogo = styled.img`
  width: 150px;
  margin: 20px;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    width: 200px;
    margin: 40px;
    margin-top: 10px;
  }
`

export const InputLabel = styled.label`
  align-self: flex-start;
  font-size: 12px;
  font-family: Roboto;
  font-weight: bold;
  color: ${props => (props.isDark ? '#fff' : '#858e9b')};
  margin-bottom: 6px;
`

export const UserValue = styled.span`
  color: red;
`

export const InputField = styled.input`
  width: 100%;
  border: solid 1px #abb1b9;
  border-radius: 3px;
  padding: 10px 15px;
  font-size: 14px;
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  color: ${props => (props.isDark ? '#fff' : 'black')};
`

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: -10px;
  margin-bottom: 26px;
`

export const CheckboxLabel = styled.label`
  font-size: 14px;
  font-family: Roboto;
  color: ${props => (props.isDark ? '#fff' : '#1c1519')};
  margin-left: 2px;
`

export const LoginButton = styled.button`
  width: 100%;
  background-color: #2082f2;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 14px;
  font-family: Roboto;
  font-weight: 500;
  margin-bottom: 5px;
  cursor: pointer;
`

export const ErrorMessage = styled.p`
  color: red;
  margin: 0;
  font-size: 12px;
  align-self: flex-start;
`
