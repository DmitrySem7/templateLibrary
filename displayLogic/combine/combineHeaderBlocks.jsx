import {DisplaySwitch} from "../displaySwitches/default_switch";
import {TitleAndText} from "../../component/standard_component/TextBlock/TitleAndText";

export const combineHeaderBlocks = ({typeContent,title,text,blocks})=>{
    if((title!=null)||(text!=null)){
        return [<TitleAndText props = {{title,text}}/>,DisplaySwitch({typeContent,blocks})]
    }else{
        return DisplaySwitch({typeContent,blocks});
    }
}