export const Breadcrumbs = ({breadcrumbs})=>{
    return(
        <div>
            {breadcrumbs.join(' > ')}
        </div>
    )
}