import {CiscoALink} from "../click_block/a/CiscoALink";

export const CiscoQuickTasks = ({ciscoQuickTask})=>{
    return(
        <div className="quickTasks">
            {ciscoQuickTask.linkA.map(item=><div><CiscoALink text={item[1]} icon={item[0]} func={item[2]}/></div>)}
        </div>
    )
}