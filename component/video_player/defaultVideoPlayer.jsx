import ReactPlayer from "react-player";

export const VideoPlayer = (props)=>{
    debugger;
    let {url} = props.props;
    return(
        <div>
            <ReactPlayer width={'100%'} height='100%'
                         url={url}
                         playing={true}
                         muted={true}
                         controls={true}
            />
        </div>
    )
}