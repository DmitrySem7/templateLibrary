import {Fragment} from "react";
import {CardWithLink} from "../card/defaultCardWith_link";

export const Left_Image_and_Text_Block = ({title,text,link,linkButton,img})=>{
    return(
        <div className="Left_Image_and_Text_Block">
            <div>
                {img ? <img src={img} alt="Картинка"/> : null}
            </div>
            <div className="TextBlock">
                <CardWithLink props = {{title,text,link,linkButton}}/>
            </div>
        </div>
    )
}