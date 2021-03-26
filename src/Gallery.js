import "./Gallery.css"

export default function Gallery(props){
    return <>
        <div className="row">
            {
                props.images?.map(el => (
                    el.preview? (
                    <div className="col-12 col-lg-3 p-0" key={el.preview}>
                        <a href={el.url} target="_blank"><img className="wallpaper" src={el.preview} /></a>
                    </div>)
                    : null
                ))
            }
        </div>
    </>
}