import React from "react"
import StyledButton  from "./index.style"


export default function DownloadButton(){
    return(
        <StyledButton onClick={redirecionar}>Baixe agora!</StyledButton>
    )
}

function redirecionar() {
    window.open("https://www.apple.com/br/app-store/")
}