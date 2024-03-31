import {CiscoSpanLink} from "../click_block/span/CiscoSpanLink";
import {Fragment} from "react";

export const CardWithLink = (props) =>{
    let {preTitle,title,text,link} = props.props;
    return(
        <Fragment>
            <div>
                {preTitle ? preTitle : null}
            </div>
            <div>
                {title}
            </div>
            <div>
                {text}
            </div>
            <div>
                <CiscoSpanLink text={link[0]} func={link[1]}/>
            </div>
        </Fragment>
    )
}