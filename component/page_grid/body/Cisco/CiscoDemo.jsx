import {TitleAndText} from "../../../standard_component/TextBlock/TitleAndText";
import {VideoPlayer} from "../../../video_player/defaultVideoPlayer";
import {ciscoDemo} from "../../../../page_build/model/cisco/object_input/header_input";

export const CiscoDemo = ({ciscoDemo})=>{
    let {title,text,url}=ciscoDemo;
    return(
        <div>
            <TitleAndText props = {{title,text}}/>
            <VideoPlayer props = {{url}} />
        </div>
    )
}