import {CiscoSpanLink} from "../../../click_block/span/CiscoSpanLink";

export const CiscoHeaderTophat = ({tophat})=>{
    return(
        <div className="header1">
            <div className="header1LinkSpan">{tophat.link.map(item=><CiscoSpanLink text={item[0]} func={item[1]} />)}</div>
        </div>
    )
}