export const Breadcrumbs = ({breadcrumbs})=>{
    return(
        <div className="Breadcrumbs">
            {breadcrumbs.join(' > ')}
        </div>
    )
}