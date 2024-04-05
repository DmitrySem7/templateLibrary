let stateVP = {
    url:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    width:'100%',
    height:'100%',
    playing:'true',
    muted:'true',
    controls:'true'
}

export default function comparisonState({url,width,height,playing,muted,controls}){
    if(!url){
        url = stateVP.url;
    }
    if(!width){
        width = stateVP.width;
    }
    if(!height){
        height = stateVP.height;
    }
    if(!playing){
        playing = stateVP.playing;
    }
    if(!muted){
        muted = stateVP.muted;
    }
    if(!controls){
        controls = stateVP.url;
    }
    return {
        url,width,height,playing,muted,controls
    }
}