export const TitleAndText = (props)=>{
    let {title,text} = props.props;
    return(
        <>
            {title ? <div className="Title">{title}</div> : null}
            {text ? <div className="Text">{text}</div> : null}
        </>
    )
}