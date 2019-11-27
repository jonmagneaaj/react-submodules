import React,{useState} from 'react'
import mtv from '../files/mtv'
import LocalJSONSubModule from './LocalJSONSubModule'
import './LocalJSONModule.css'

const LocalJSONModule = () =>{
    const [videos, setVideos] = useState(mtv.videos)

    const filterVideos = (e) =>{
        setVideos(
        mtv.videos.filter(
            video => video.song.toLowerCase().includes(e.target.value)
        )
        )
    }

    return(
        <div className='submodule local-json'>
            <h2>This module uses data from a local JSON file</h2>
            <input type='text' placeholder='type to filter videos' onInput={filterVideos}/>
            <p>And the videos on the first MTV broadcast was:</p>
            <div className='videos'>
            {
            videos.map(
                video => <LocalJSONSubModule 
                        song={video.song}
                        artist={video.artist}
                        number={video.number}
                        appearance={video.appearance}
                />
                )
            }
            </div>
        </div>
    )
}


export default LocalJSONModule