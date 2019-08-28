import React, { useRef, useEffect } from 'react';
import traverssmith from '../images/travers-smith.png';

function CanvasArea() {
    const canvasRef = useRef();
    
    useEffect ( ()=> {
        // console.log(canvasRef.curent);
        if (typeof canvasRef.current !=='undefined')
        
        {   
            console.log(canvasRef);
            const canvas = canvasRef.current
            console.log(canvas);
            const ctx = canvas.current.getContext("2d")
            // const img = this.refs.image
            // img.onload = () => {
            // ctx.drawImage(img, 0, 0)
            // ctx.font = "40px Courier"
            // ctx.fillText(this.props.text, 210, 75)
            // console.log(canvasRef.current)}
    }



    },[canvasRef])
    
    return (

        <canvas ref={canvasRef}/>
    )

}

export default CanvasArea