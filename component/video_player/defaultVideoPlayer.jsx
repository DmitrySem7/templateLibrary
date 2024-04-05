import ReactPlayer from "react-player";
import comparisonState from "./defaultState.js";

export const VideoPlayer = (props)=>{
    debugger;
    let {url,width,height,playing,muted,controls}=comparisonState(props.props);
    return(
        <div className="ReactPlayerBlock">
            <ReactPlayer width={width} height={height}
                         url={url}
                         playing={playing}
                         muted={muted}
                         controls={controls}
            />
        </div>
    )
}