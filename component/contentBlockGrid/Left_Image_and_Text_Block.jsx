import {Fragment} from "react";
import {CardWithLink} from "../card/defaultCardWith_link";

export const Left_Image_and_Text_Block = ({title,text,link,img})=>{
    return(
        <div>
            <div>
                {img ? <img src={img} alt="Картинка"/> : null}
            </div>
            <div>
                <CardWithLink props = {{title,text,link}}/>
            </div>
        </div>
    )
}