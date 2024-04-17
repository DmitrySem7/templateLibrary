export const Breadcrumbs = ({breadcrumbs})=>{
    return(
        <div className="Breadcrumbs">
            {breadcrumbs.map(item=><span>{item}</span>)}
        </div>
    )
}