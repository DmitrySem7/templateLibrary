import {CiscoButtonLink} from "../../click_block/button/CiscoButtonLink";
import {CiscoSpanLink} from "../../click_block/span/CiscoSpanLink";


export const CiscoPosterCard = ({ciscoPosterCard})=>{
    return(
        <div className="posterCard">
            <div className="posterImg">
                {ciscoPosterCard.imgBack ? <img src={ciscoPosterCard.imgBack}/> : null}
            </div>
            <div className="posterTextBlock">
                <div className="posterTitle">
                    {ciscoPosterCard.cardTitle}
                </div>
                <div className="posterText">
                    {ciscoPosterCard.cardText}
                </div>
                <div className="posterLinkBlock">
                    <div>{ciscoPosterCard.buttonLink.map(item=><CiscoButtonLink text={item[0]} func={item[1]} logo={item.length>2 ? item[2] : null} />)}</div>
                    <div>{ciscoPosterCard.link.map(item=><CiscoSpanLink text={item[0]} func={item[1]} logo={item.length>2 ? item[2] : null} />)}</div>
                </div>
            </div>
        </div>
    )
}