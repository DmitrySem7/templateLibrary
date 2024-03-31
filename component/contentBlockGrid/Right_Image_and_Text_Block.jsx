import {CardWithLink} from "../card/defaultCardWith_link";
import {Fragment} from "react";

export const Right_Image_and_Text_Block = ({title,text,link,img})=>{
    return(
        <div>
            <div>
                <CardWithLink props = {{title,text,link}}/>
            </div>
            <div>
                {img ? <img src={img} alt="Картинка"/> : null}
            </div>
        </div>
    )
}