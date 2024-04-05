import {CardWithLink} from "../card/defaultCardWith_link";
import {Fragment} from "react";

export const Right_Image_and_Text_Block = ({title,text,link,linkButton,img})=>{
    return(
        <div className="Right_Image_and_Text_Block">
            <div>
                <CardWithLink props = {{title,text,link,linkButton}}/>
            </div>
            <div>
                {img ? <img src={img} alt="Картинка"/> : null}
            </div>
        </div>
    )
}