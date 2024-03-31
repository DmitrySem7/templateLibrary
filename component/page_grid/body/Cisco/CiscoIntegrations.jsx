import {RowOf3UpperImgCards} from "../../../contentBlockGrid/RowOf3UpperImgCards";
import {CiscoTitleAndBreadcrumbs} from "../../../contentBlockGrid/Breadcrumbs/CiscoTitleAndBreadcrumbs";
import {DisplaySwitch} from "../../../../displayLogic/displaySwitches/default_switch";

export const CiscoIntegrations = ({ciscoIntegrations})=>{
    let {typeContent,blocks} = ciscoIntegrations;
    return(
        <>
            <CiscoTitleAndBreadcrumbs {...ciscoIntegrations}/>
            {DisplaySwitch({typeContent,blocks})}
        </>
    )
}