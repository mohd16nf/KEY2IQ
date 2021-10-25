import React from 'react'

function Cards(props) {
    return (
      
        
            <div className='card'>
                <a href='#' className='bird1'><i class="fab fa-twitter"></i></a> 
                <div className='card-head'>
                  <img className='headImg' src='https://www.aspiretrainingteam.co.uk/wp-content/uploads/2020/06/display-screen-equipment.jpg'></img>
                    <div className='head-text'>
                        <hr />
                        <h5>{props.title}</h5>
                        <p>{props.headPara1}</p>
                        <p className='name'>{props.name}</p>
                    </div>
            
                </div>
             <div className='card-body'>
                    <p>{props.bodyPara1}</p>
                    <h4>{props.bodyTitle}</h4>
                    <p className='lastUpdate'>{props.bodyPara2}</p>
                </div>
            </div>
           
     
    );
  }

 
  export default Cards;