import {CiscoSpanLink} from "../../../click_block/span/CiscoSpanLink";
import {CiscoButtonLink} from "../../../click_block/button/CiscoButtonLink";

export const CiscoHeaderMastHeader = ({MastHeader})=>{
    return(
        <div className="header2">
            <div className="header2Inside1">
                <div>
                    <img src={MastHeader.logo} alt="logo"/>
                </div>
                <div className="header2LinkButton">
                    {MastHeader.buttonLink.map(item=><CiscoButtonLink text={item[0]} func={item[1]} logo={item.length>2 ? item[2] : null} />)}
                </div>
            </div>
            <div className="header2Inside2">
                <div className="header2LinkSpan">{MastHeader.link.map(item=><CiscoSpanLink text={item[0]} func={item[1]} logo={item.length>2 ? item[2] : null} />)}</div>
            </div>
        </div>
    )
}