import {CardsWithUpperImg} from "../card/CardsWithUpperImg";



export const RowOf3UpperImgCards = (props)=>{
    const countries = [];
    for (let population in props) {
        if (props.hasOwnProperty(population)) {
            countries.push(props[population])
        }
    }
    return(
        <div className="containerRowOf3UpperImgCards">
            { countries.map(item=><CardsWithUpperImg props = {{...item}}/>)}
            {/*{props.map(item=><CardsWithUpperImg props = {{...test}}/>)}*/}
{/*            <CardsWithUpperImg {...props}/>
            <CardsWithUpperImg {...props}/>
            <CardsWithUpperImg {...props}/>*/}
        </div>
    )
}