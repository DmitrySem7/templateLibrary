import {CiscoSpanLink} from "../click_block/span/CiscoSpanLink";
import {Fragment} from "react";
import {CiscoButtonLink} from "../click_block/button/CiscoButtonLink.jsx";

export const CardWithLink = (props) =>{
    let {preTitle,title,text,link,linkButton} = props.props;
    return(
        <div>
            <div className="PreTitle">
                {preTitle ? preTitle : null}
            </div>
            <div className="Title">
                {title}
            </div>
            <div className="Text">
                {text}
            </div>
            <div className="Link">
                {linkButton ? <CiscoButtonLink text={linkButton[0]} func={linkButton[0]}/> : null}
                {link ? <CiscoSpanLink text={link[0]} func={link[1]}/> : null}
            </div>
        </div>
    )
}