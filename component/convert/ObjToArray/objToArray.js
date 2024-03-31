export function objToArray(props){
    const countries = [];
    for (let population in props) {
        if (props.hasOwnProperty(population)) {
            countries.push(props[population])
        }
    }
    return countries;
}
