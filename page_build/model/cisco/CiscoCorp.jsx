import {tophat, masthead, ciscoPosterCard, ciscoQuickTask, ciscoFooter, ciscoMosaic} from './object_input/header_input'
import {CiscoHeaderTophat} from "../../../component/page_grid/header/Cisco/CiscoHeaderTophat";
import {CiscoHeaderMastHeader} from "../../../component/page_grid/header/Cisco/CiscoHeaderMastHeader";
import {CiscoBody} from "../../../component/page_grid/body/Cisco/CiscoBody";
import {CiscoFooter} from "../../../component/page_grid/footer/Cisco/CiscoFooter";
export const ModelCiscoCorp = () =>{

    return (
        <>
        <CiscoHeaderTophat tophat={tophat}/>
        <CiscoHeaderMastHeader MastHeader={masthead}/>
        <CiscoBody ciscoPosterCard={ciscoPosterCard} ciscoMosaic={ciscoMosaic} ciscoQuickTask={ciscoQuickTask}/>
        <CiscoFooter ciscoFooter={ciscoFooter}/>
        </>
    )
}