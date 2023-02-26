// import React, {useState} from 'react'
export default function About(props) {
    let mystyle={
        color: props.mode === 'dark'?'white':'#080944',
        backgroundColor: props.mode=== 'dark'?'#080944':'white',
        border: '2px solid',
        borderColor: props.mode==='dark'?'white':'#080944',
    }
    let style2={
        border: 'none', 
        color: props.mode === 'dark'?'white':'#080944',
    }
        // const[mystyle, setMystyle]=useState({
        //     color: 'black',
        //     backgroundColor: 'white'
        //     })
            // const[btnText,setBtnText]=useState('Enable dark mode')
            //     const toggleStyle = ()=>{
            //     if(mystyle.color === 'black'){
            //         setMystyle({
            //             color: 'white',
            //             backgroundColor: 'black',
            //             border:'1px solid white'
            //         })
            //         setBtnText('Enable light mode')
            //     }
            //     else{
            //         setMystyle({
            //             color: 'black',
            //             backgroundColor: 'white',
            //             border:'1px solid black'
            //         })
            //         setBtnText('Enable dark mode')
            //     }
            // }
            return (
    <div className='container' style={mystyle,style2}>
            <h1 className='my-2' >About us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
    <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button className="accordion-button" style={mystyle}type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        Accordion Item #1
        </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
        <div className="accordion-body" style={mystyle}>
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        Accordion Item #2
        </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
        <div className="accordion-body" style={mystyle}>
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        Accordion Item #3
        </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
        <div className="accordion-body" style={mystyle}>
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
        </div>
    </div>
    </div>
    {/* <div className='my-3' >
    <button className="btn btn-primary " onClick={toggleStyle} >{btnText}</button>
    </div> */}
    </div>
        </div>
    )
}
