import data from "./data.json"
import React from 'react'

export default function Profile() {
  return (
    <div>
      {
        data.map((data)=>{
            return(
                <>
                <h1>My Data</h1>
                    <div className="style" key={data.ID}>
                        <h3> Name : {data.Name}</h3>
                        <strong>Password : {data.Password}</strong>
                        <h5>Image URL : {data.ImageURL}</h5>
                        <h5>Video URL : {data.VideoURL}</h5>
                        <h5>Document URL : {data.DocumentURL}</h5>
                    </div>
                </>
            )
        })
      }
    </div>
  )
}
