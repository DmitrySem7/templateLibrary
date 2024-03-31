

export const CiscoSpanLink = ({text,func,logo})=>{
    return(
        <span onClick={func}>
            {text}
            {logo && "logo есть" ? <img src={logo} alt="logo"/> : null}
        </span>
    )
}