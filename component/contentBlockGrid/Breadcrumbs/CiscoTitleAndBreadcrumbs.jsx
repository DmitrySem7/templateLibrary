import {Title} from "../../standard_component/TextBlock/Title";
import {Breadcrumbs} from "../../standard_component/Breadcrumbs/Breadcrumbs";

export const CiscoTitleAndBreadcrumbs = ({title,breadcrumbs})=>{
    return(
        <div>
            <Title text = {title}/>
            <Breadcrumbs breadcrumbs={breadcrumbs}/>
        </div>
    )
}