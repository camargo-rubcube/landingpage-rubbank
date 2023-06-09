import styled from 'styled-components'

export const BodyHome = styled.div`
    width: 100%;
    z-index:0;
    display: flex;
    height: 750px;
    background-image: linear-gradient(to right, #312C86, #121827);

    @media (max-width: 500px){
        padding-top:3%;
    }

    @media (min-width:800px) and (max-width:1100px) {
        height: 700px;
     
    }

    @media (max-width:500px) {
        justify-content:center;
        height: 568px;
    }

    @media (max-width:350px) {
        justify-content:center;
        height: 490px;
        margin-top:-15%;
        padding-top: 5%;
    }

    @media (min-width:380px) and (max-width:400px) {
        padding-bottom: 8%;
    }

    @media (min-width:501px) and (max-width:900px) {
        justify-content:center;
        height: 768px;
    }

    @media(min-width:355px) and (max-width:365px){
        height: 540px;
    }
 
`

export const BodyTexts = styled.div`

    position: relative;
    margin-left: -8%;
    margin-top: -5%;
   

    @media (min-width:1900px) and (max-width:2090px){
        margin-left: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width:500px){
        margin-left: -18% !important;
        margin-top: -2% !important;
        margin:0 auto ;
    }

    @media (min-width:500px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

   

`

export const Title = styled.div`
    display: flex;

    @media(min-width:320px) and (max-width:400px){
        margin-top:5%;
        margin-left:-10%;
    }

    @media(min-width:400px) and (max-width:450px){
        margin-top:-5%;
        margin-left:-10%;
    }

    @media(min-width:450px) and (max-width:550px){
        margin-top:-5%;
        margin-left:-10%;
    }

    @media(min-width:550px) and (max-width:1000px){
        margin-top:5%;
        margin-left:15%;
    }

    @media(min-width:1000px) and (max-width:1100px){
        margin-top:5%;
        /* margin-left:10%; */
    }

    @media(min-width:1100px) and (max-width:1600px){
        margin-top:-2%;
        /* margin-left:8%; */
    }

    @media (min-width:2000px){
        margin-left:30%;
    }

    @media (min-width:1900px) and (max-width:1990px){
        margin-left:0%;
    }

    @media (min-width:380px) and (max-width:400px) {
        margin-top: -2%;
        margin-left: -15%;
    }

    @media (min-width:355px) and (max-width:365px){
        margin-top: -8%;
        margin-left: -12%;
    }
`

export const Rub = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 195px;
    color: white;

    @media (min-width:320px) and (max-width:500px) {
        font-size: 55px;
    }

    @media (min-width:400px) and (max-width:500px){
        font-size: 65px;
    }

    @media (min-width:500px) and (max-width:800px) {
        font-size: 100px;
    }


    @media (min-width:800px) and (max-width:1100px) {
            font-size: 130px;
    }

    @media (min-width:2000px){
        font-size: 250px;
    }

    @media (min-width:380px) and (max-width:400px) {
        font-size: 70px;
    }

    @media (min-width:355px) and (max-width:365px){
        font-size: 70px;
    }

    

`

export const Bank = styled.h1`
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 195px;
    color: white;

    @media (min-width:320px) and (max-width:400px) {
        font-size: 55px;
    }

    @media (min-width:400px) and (max-width:500px){
        font-size: 65px;
    }

    @media (min-width:500px) and (max-width:800px) {
        font-size: 100px;
    }

    @media (min-width:800px) and (max-width:1100px) {
        font-size: 130px;
    }

    @media (min-width:2000px){
        font-size: 250px;
    }

    @media (min-width:380px) and (max-width:400px) {
        font-size: 70px;
    }

    @media (min-width:355px) and (max-width:365px){
        font-size: 70px;
    }



`

export const Subtitle = styled.p`

    margin-top: -13%;
    text-align: center;
    //margin-left: 15%;
    width: 70%;
    color: white;
    font-weight: 400;
    font-size: 45px;
    position: relative;


    @media (min-width:320px) and (max-width:400px) {
        font-size: 20px !important;
        width: 80%;
        margin-left: 0% !important;
        margin-top: 125% !important;
        margin:0 auto;
        position: absolute;
    }



    @media (min-width:1000px) and (max-width:1100px) {
        margin-top: -8%;
        text-align: center;
        /* margin-left: 15%; */
        width: 70%;
        color: white;
        font-weight: 400;
        font-size: 32px;
        position: relative;
    }

    @media (min-width:550px) and (max-width:1000px) {
        margin-top: 70%;
        text-align: center;
        margin-left: 0%;
        width: 70%;
        color: white;
        font-weight: 400;
        font-size: 32px;
        position: absolute;
    }

    @media (min-width:500px) and (max-width:550px) {
        margin-top: 100%;
        text-align: center;
        margin:0 auto;
        margin-top: 100%;
        width: 80%;
        color: white;
        font-weight: 400;
        font-size: 30px;
        position: absolute;
    }


    @media (min-width:400px) and (max-width:450px) {
        font-size: 20px !important;
        width: 80%;
        margin-top: 110% !important;
        margin:0 auto;
        position: absolute;
    }

    @media (min-width:450px) and (max-width:500px) {
        font-size: 20px !important;
        width: 70%;
        margin-top: 100% !important;
        margin:0 auto;
        position: absolute;
    }

    @media (min-width:2000px){
        font-size: 60px;
        margin-left:35%
    }

    @media (min-width:1900px) and (max-width:1990px){
        margin-left:0%;
    }

    

`

export const Icons = styled.div`

    margin-top: -2%;
    margin-left: 35%;
    position: relative;

    @media (min-width:375px) and (max-width:400px) {
        margin-top: 10%;
        margin-left: 35%;
        position: relative;
    }

    @media (min-width:500px) and (max-width:800px) {
        margin-top: -10%;
        margin-left: 35%;
        position: relative;
    }

    @media(min-width:400px)and(max-width:500px){
        margin-top: 0%;
        margin-left: 35%;
        position: relative;
    }

    @media (min-width:2000px){
        display:none;
    }

    @media(min-width:355px) and (max-width:365px){
        margin-left: 40%;
    }
    
`

export const Topic = styled.div`
    margin-bottom: -2%;
    display: flex;
    flex-wrap: wrap;
    color: white;   
`

export const SmallIcon = styled.img`

    margin-top: 4%;
    height: 8%;
    width: 8%;

    @media (min-width:500px) and (max-width:1000px) {
        margin-top: 6%;
        height: 12%;
        width: 12%;
    }
    
    @media (min-width:1000px) and (max-width:1100px) {
        margin-top: 6%;
        height: 10%;
        width: 10%;
    }

    @media (max-width:500px) {
        margin-top: 6%;
        height: 15%;
        width: 15%;
    }
`

export const TextIcon = styled.p`

    font-family: 'Inter', sans-serif;
    font-weight: 300;
    font-size: 30px;
    margin-left: 5%;

    @media (min-width:500px) and (max-width:600px) {
    font-size: 20px;
     margin-left: 5%;
    }

    @media(min-width:600px)and(max-width:1000px){
        font-size: 22px;
    }

    @media (min-width:320px) and (max-width:499px) {
    font-size: 15px;
    margin-left: 5%;
    }

`