import {CiscoALink} from "../../../click_block/a/CiscoALink";

export const ContactFooter = (props)=>{
    let {linkA,social_link} = props.props;
    return(
        <div className="containerContactFooter">
            <div className="ListAT">{linkA.map(item=><CiscoALink text={item[0]} func={item[1]} icon={item[2]}/>)}</div>
            <div className="ListASL">{social_link.map(item=><a href={item[1]}><img alt="social_link" src={item[0]}/></a>)}</div>
        </div>
    )
}