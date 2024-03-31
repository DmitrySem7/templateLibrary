import {combineHeaderBlocks} from "../../../displayLogic/combine/combineHeaderBlocks";

export const CiscoMosaic = ({ciscoMosaic})=>{
    return(
        <div className="bodyMosaic">
            {ciscoMosaic.map(item=>combineHeaderBlocks(item))}
        </div>

    )
}