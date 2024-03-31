import {Right_Image_and_Text_Block} from "../../component/contentBlockGrid/Right_Image_and_Text_Block";
import {Left_Image_and_Text_Block} from "../../component/contentBlockGrid/Left_Image_and_Text_Block";
import {RowOf3UpperImgCards} from "../../component/contentBlockGrid/RowOf3UpperImgCards";
import {RowOf3TextCardWithLink} from "../../component/contentBlockGrid/RowOf3TextCardWithLink";

const DisplaySwitch = ({typeContent,blocks})=>{
    switch (typeContent){
        case 'Right_Image_and_Text_Block.jsx':
            return blocks.map(item=> <Right_Image_and_Text_Block {...item}/>);
        case 'Left_Image_and_Text_Block':
            return blocks.map(item=> <Left_Image_and_Text_Block {...item}/>);
        case 'RowOf3UpperImgCards':
            return blocks.map(item=> <RowOf3UpperImgCards {...item}/>);
        case 'ThreeGridTextCard':
            return blocks.map(item=> <RowOf3TextCardWithLink {...item}/>);
        default:
            return null;
    }
}

export {DisplaySwitch};