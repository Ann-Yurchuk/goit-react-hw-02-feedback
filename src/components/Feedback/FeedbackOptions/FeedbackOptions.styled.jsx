import styled from '@emotion/styled';

export const FeedbackOptionsContainer = styled.div`
display: flex;
justify-content: space-between;
width: 600px;
background-color: yellow;
border-radius: 15px;
box-shadow: 0 0 40px 40px #F137A6 inset, 0 0 0 0 #F137A6;
padding: 20px;`

export const Button = styled.button`
cursor: pointer;
display: inline-block;
width: 150px;
height: 50px;
padding: 15px;
margin: 10px 20px;
border-radius: 15px;
color: yellow;
border: 1px solid rgb(230, 228, 223);
box-shadow: 0 0 40px 40px #F137A6 inset, 0 0 0 0 #F137A6;
font-family: 'Montserrat', sans-serif;
font-weight: bold;
letter-spacing: 2px;
text-decoration: none;

&:hover {
color: gray;
box-shadow: rgb(0 0 0 / 10%) 0px 3px 3px -2px,
        rgb(0 0 0 / 7%) 0px 3px 4px 0px,
        rgb(0 0 0 / 177%) 0px 1px 8px 0px;
}
`