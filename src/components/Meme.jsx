import React from 'react'
import memesData from '../memesData'

function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)
    function getUrl(event) {
        let url
        const index = Math.floor(Math.random() * 100)
        url = allMemeImages.data.memes[index].url
        setMeme(prevMeme=>(
            {
                ...prevMeme,
                randomImage:url
            }))
    }
    function hundleMeme(event) {
        setMeme(prevMeme => {
            return{
                    ...prevMeme,
                    [event.target.name]: event.target.value,
                    [event.target.name]: event.target.value
            }
    })
    }
    console.log(meme)
  return (
    <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name='topText'
                    value={meme.topText}
                    onChange={hundleMeme}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={hundleMeme}
                />
                <button 
                    className="form--button"
                onClick={getUrl}>
                    Get a new meme image 🖼
                </button>

            </div>
       
        <div className="meme">
        <img className = "meme--image" src = {meme.randomImage}/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
  )
}

export default Meme