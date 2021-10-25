import React, {useState} from 'react';
import './App.css';
import Header from './Header';
import Accordion from './Main';
import NewsLetter from './newsletter';
import Cards from './Cards';
function App(){

    return(
   <div className='container'>
      <div>
        <Header />
       <div className='first-page'>
         <div className='course-about'>
            <h2>Hi there,</h2>
            <h1 className='welcome'>Welcome to <mark>KEY<mark>2</mark>IQ</mark></h1>
            <p>New to Node.js, No worries.</p>
            <h3>Lets get Started with our complete Node.js course</h3>
            <a href='#'>Get Started</a>
         </div>
        
         <Accordion />
         
        </div>
     </div>
      <h3 className='cards-heading'>Recommended for you</h3>
     <div className='cards-container'>
     <Cards title='This is the sign you have been looking for ' headPara1='Lets change the future together'
       name='Harry | Social Media Expert' bodyPara1='Culture' bodyTitle='13 Things to do when you are bored - Boredom busters for teens!'
       bodyPara2='2 months ago | 3 min read' />
      <Cards title='Social Commerce - Making money just through Social Media' headPara1='Lets change the future together'
       name='James | Social Media Expert' bodyPara1='FamSays' bodyTitle='Social Commerce - Making money just through Social Media!'
       bodyPara2='2 months ago | 3 min read' />
       <Cards title='Its time for teens to open shop on Instagram' headPara1='Lets work together to promote you online business'
       name='Anny | Social Media Expert' bodyPara1='FamSays' bodyTitle='Social Commerce - Making money just through Social Media!'
       bodyPara2='6 months ago | 5 min read' />

     </div> 
    
     <NewsLetter />
    <div className='icons'>
    <div className='bird'>
    <i class="fab fa-twitter fa-3x"></i>
  </div>  
    
    <div className='fam-pay'>
      <h5>FamPay Team</h5>
      <div className='join-us'>
      <i class="fab fa-facebook-square fa-2x"></i>
      <i class="fab fa-firefox fa-2x"></i>
      <i class="fab fa-twitter fa-2x"></i>
      <i class="fab fa-instagram-square fa-2x"></i>
      <i class="fab fa-whatsapp-square fa-2x"></i>
      </div>
     </div>
    </div>
    <hr className='line' />

  </div>
    )
  }




export default App;


