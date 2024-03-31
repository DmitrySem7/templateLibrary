import {CiscoSpanLink} from "../click_block/span/CiscoSpanLink";

export const CardsWithUpperImg = (props)=>{
    let {title,text,link,img} = props.props;
    return(
        <div className="cardsWithUpperImg">
            <div>
                {img ? <img src={img} alt="Верхняя Картинка"/> : null}
            </div>
            <div className="cardTextContainer">
                <div className="cardTitle">{title}</div>
                <div className="cardText">{text}</div>
                <div className="cardSpanLink"><CiscoSpanLink text={link[0]} func={link[1]}/></div>
            </div>
        </div>
    )
}