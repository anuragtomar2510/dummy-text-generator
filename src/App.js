import React, {useState, useEffect} from 'react'
import Options from './components/Options'
import Output from './components/Output'
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState(1)
  const [tag, setTag] = useState('p')
  const [includeHTML, setIncludeHTML] = useState('Yes')
  const [paragraphs, setParagraphs] = useState([])

  useEffect(() => {
      
      const url = `https://baconipsum.com/api/?type=all-meat&paras=${inputValue}&start-with-lorem=1`

      fetch(url)
        .then(response => response.json())
        .then(data => setParagraphs(data))

  }, [inputValue])

  return (
    
       <div>
         <div className="container">
           <div className="title">
                <h1>Dummy Text Generator</h1>
           </div>
           <Options 
            paragraphs={paragraphs}
            inputValue={inputValue}
            setInputValue={setInputValue}
            includeHTML={includeHTML}
            setIncludeHTML={setIncludeHTML}
            tag={tag}
            setTag={setTag}
           />

          <Output 
            paragraphs={paragraphs}
            includeHTML={includeHTML} 
            tag={tag}
          />
         </div>
       </div>
    
  )

}

export default App
