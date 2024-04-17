import {CardWithLink} from "../card/defaultCardWith_link";
import {objToArray} from "../convert/ObjToArray/objToArray";

export const RowOf3TextCardWithLink = (props)=>{
    let array = objToArray(props);
    console.log(array)
    return(
        <div className="containerRowOf3TextCardWithLink">
            {array.map(item=><CardWithLink props={item}/>)}
        </div>
    )
}