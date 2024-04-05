import {TitleAndText} from "../../../standard_component/TextBlock/TitleAndText";
import {VideoPlayer} from "../../../video_player/defaultVideoPlayer";
import {ciscoDemo} from "../../../../page_build/model/cisco/object_input/header_input";

export const CiscoDemo = ({ciscoDemo})=>{
    let {title,text,url}=ciscoDemo;
    let width = '900px';
    let height = '550px'
    return(
        <div className="media">
            <TitleAndText props = {{title,text}}/>
            <VideoPlayer props = {{url,width,height}} />
        </div>
    )
}