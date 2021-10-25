import React, {useStae, useState} from 'react'
import {Data} from './AccordionData';


const Accordion = () => {

  const [clicked, setClicked] = useState('')
  const toggle = index =>{
    if(clicked === index){
      return setClicked(null)
    }

    setClicked(index)
  }

    return (
       
       <div className='accordion'>
         {Data.map((item, index) => {
           return(
             <div className='accordion-content'>
            <div className='heading' onClick={() => toggle(index)} key={index}> <a href='https://careerkarma.com/blog/javascript-front-end-or-back-end/#:~:text=Backend%20developers%20use%20a%20type,user%20requests%2C%20amongst%20other%20things.' target='_blank'>{item.question}</a>
             <span>{clicked === index ? <i class="fas fa-times"></i> : <i class="fas fa-caret-down"></i>}</span>
             </div>
           
              {clicked === index ? (
                  <div className='para'> <p>{item.answer}</p> </div>
              ) : null}
               
             </div>
           )
         })}
       </div>
    );
  }

  

  export default Accordion;