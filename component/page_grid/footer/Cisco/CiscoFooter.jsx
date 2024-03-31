import {PoliciesSupportFooter} from "../standard/PoliciesSupportFooter";
import {ContactFooter} from "../standard/ContactFooter";
import {ciscoFooter} from "../../../../page_build/model/cisco/object_input/header_input";

export const CiscoFooter = ({ciscoFooter}) =>{

    return(
    <footer>
        <ContactFooter props={ciscoFooter.contactFooter}/>
        <PoliciesSupportFooter props={ciscoFooter.policiesSupportFooter}/>
    </footer>
    )
}