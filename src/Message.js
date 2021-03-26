export default function Message(props){
    return <>
        <div className="alert alert-danger mx-5 text-center" role="alert">
            {props.message}
        </div>
    </>
}