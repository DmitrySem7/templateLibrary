
export const CiscoALink = ({text,func,icon})=>{
    return(
        <a className="aLink" href={func}>
                {icon ? <img alt="link_img" src={icon}/> : null}
            <div>
                {text}
            </div>
        </a>
    )
}