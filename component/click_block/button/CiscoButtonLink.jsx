
export const CiscoButtonLink = ({text,func,logo}) =>{
    return(
        <div>
            <button onClick={func}>
                {text}
            </button>
            {logo && "logo есть" ? logo : null}
        </div>

    )
}