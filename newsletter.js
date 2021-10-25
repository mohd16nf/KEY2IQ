import React from 'react'

function NewsLetter() {
    return (
      
        <div className='news-letter'>
            <div className='text'>
                <h4>Subscribe to our newsletter</h4>
                <p>Get the latest posts delivered right to your inbox</p>
            </div>
            <div className='input-box'>
                <input type='text' placeholder='Your email address'></input>
                <button>Subscribe</button>
            </div>
        </div>
    );
  }

  export default NewsLetter;