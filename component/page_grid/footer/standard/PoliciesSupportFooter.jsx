import {CiscoALink} from "../../../click_block/a/CiscoALink";
import {Fragment} from "react";

export const PoliciesSupportFooter = (props)=>{
    let {linkA,copyRight} = props.props;
    return(
        <Fragment>
        <div>
            <div>{linkA.map(item=><CiscoALink text={item[0]} func={item[1]}/>)}</div>
        </div>
         <div>
             {copyRight}
         </div>
        </Fragment>
    )
}