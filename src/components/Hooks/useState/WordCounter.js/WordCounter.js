import React from 'react'
import { useState } from 'react'
import './WordCounter.css'

function WordCounter() {

    const [text , setText] = useState('');

    

    function handleChange(e) {
        setText(e.target.value)
    }

    const countWords = () => {
        
       const words = text.trim().split(/\s+/);
       if (text.trim() === '') {
        return 0;
       }
       return words.length;
    }

  return (
    <div className="word-counter-container">
    <h1 className="title">WordCounter</h1>
    <textarea className="text-area" onChange={handleChange} />
    <br/><br/>
    <p className="word-count"> Current Word Count: {countWords()}</p>
    </div>
  )
}

export default WordCounter


/* Main logic lies here 

const countWords = () => {
        
       const words = text.trim().split(/\s+/);
       if (text.trim() === '') {
        return 0;
       }
       return words.length;
    }
    
    here countWords = () => {...} is an arrow function
    words is a variable which stores value of text.trim().split(/\s+/)
    text is a variable which stores string value from useState. Initial value is ''.
    trim() method removes whitespaces from before and after the text.
    split() method splits the words based on a specified seperator.
    /\s+/ is a regex where // is start and end of regex and \s is short for whitespaces and + says
     that previous value i.e \s will be used for every occurance.

     if statement says if text.trim() === ''
     then return 0 because if we dont do this, then it returns 1 because
     if the text variable contains only a single space character " ", the split(/\s+/) 
     operation will split the string at that space, resulting in an array with one empty string element ([""]). 
     Thus, the words.length will be 1 by default or if the text area is empty.   
     If textarea is not empty then it will return words.length
    */