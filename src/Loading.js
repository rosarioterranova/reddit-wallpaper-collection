import block from "./blocks.svg"
export default function Loading(){
    return <>
        <div className="text-center">
            <h1 className="text-white">Loading</h1>
            <img src={block} />
        </div>
    </>
}