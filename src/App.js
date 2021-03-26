import {useState, useEffect} from "react"
import "./App.css"
import Gallery from "./Gallery"
import Message from "./Message"
import Loading from "./Loading"

export default function App() {
  
  const [data, setData] = useState(null)
  const [imagesData, setImagesData] = useState([])
  const [afterID, setafterID] = useState("")

  async function getData(){
    const res = await fetch(`https://www.reddit.com/r/wallpapers.json?after=${afterID}`)
    const dataRes = await res.json()
    setData(dataRes.data)
    setImagesData(imagesData.concat(dataRes.data.children.map(el => {
      let preview = el.data.preview?.images[0].resolutions.slice(-2)[0].url
      preview = preview?.replaceAll("&amp;","&")
      let url = el.data.url
      return {url, preview}
  })))
    console.log("done")
  }

  useEffect(getData,[afterID])

  return <>
    <h1 className="text-center text-white my-3">Reddit Wallpaper Collection</h1>
    <Message message={<>
      <span>Images from </span>
      <a href="https://www.reddit.com/r/wallpapers/">Reddit Wallpapers</a>
      <span>. Please click to the images to display at full resolution. Website made in React.js by <a href="https://rosarioterranova.github.io/">Rosario Terranova</a></span>
    </>}/>
    {data==null? <Loading /> :
    <>
      <Gallery images={imagesData}/>
      <div className="text-center">
        <button className="btn btn-danger btn-lg my-3" onClick={()=>setafterID(data.after)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-right-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.854 5.146a.5.5 0 1 0-.708.708L9.243 9.95H6.475a.5.5 0 1 0 0 1h3.975a.5.5 0 0 0 .5-.5V6.475a.5.5 0 1 0-1 0v2.768L5.854 5.146z"/>
        </svg> More</button>
      </div>
      </>
    }
    
  </>
}
