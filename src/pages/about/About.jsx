import React from 'react'
import galaxyvideo from '../../assets/galaxyvideo.mp4'

 const About = () => {
    return (
        <div>
            <video autoPlay loop muted id='video1' >
                <source src={galaxyvideo} type='video.mp4'/>
            </video>
            hello
        </div>
    )
}
export default About;