import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Anton&family=Bungee+Spice&family=Gemunu+Libre:wght@500&display=swap');
*{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

*:focus{
    outline: 0;
}
html,body,#root{
    display:flex;
    align-items:center;
    height: 100%;
}
body{
    background: #171923;
    -webkit-font-smoothing: antialiase;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
}
body,input,buttn{
    font: 14px 'Roboto', sans-serif;
    color: white;
}
input{
    height:50px;
    width:100%;
    border-radius:8px;
    padding: 0 16;
    background:#fff;
    border: 2px solid #519;
    color: #2c2c2c;
}
input::placeholder{
    color:#519;
}
button{
    cursor: pointer;
    height: 50px;
    width: 150px;
    border-radius: 8px;
    font-weight: 500;
    color:#fff;
    border: 0;
    background: #519;
}

`;
