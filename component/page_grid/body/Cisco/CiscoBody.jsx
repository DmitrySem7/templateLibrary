import {CiscoPosterCard} from "../../../card/CiscoPosterCard/CiscoPosterCard";
import {CiscoQuickTasks} from "../../../quick_icons_link/CiscoQuickTasks";
import {CiscoMosaic} from "../../MosaicContent/CiscoMosaic";
import {ciscoDemo, ciscoIntegrations} from "../../../../page_build/model/cisco/object_input/header_input";
import {CiscoDemo} from "./CiscoDemo";
import {CiscoIntegrations} from "./CiscoIntegrations";


export const CiscoBody = ({ciscoPosterCard,ciscoQuickTask,ciscoMosaic})=>{
    return(
        <div>
            <CiscoPosterCard ciscoPosterCard={ciscoPosterCard}/>
            <CiscoQuickTasks ciscoQuickTask={ciscoQuickTask}/>
            <CiscoMosaic ciscoMosaic={ciscoMosaic}/>
            <CiscoDemo ciscoDemo={ciscoDemo}/>
            <CiscoIntegrations ciscoIntegrations={ciscoIntegrations}/>
        </div>
    )
}