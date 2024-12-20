import React, {useEffect, useState} from "react";
import axios from 'axios'
import Erro from "../components/Erro";
import '../styles/MainComponent.css'


function MainComponent(){
    const [url, setUrl] = useState("");
    const [inputUrl, setInputUrl] = useState("");
    const [allArticle, setAllArticle] = useState([]);
    const [resumo, setResumo] = useState("");
    const [error, setError] = useState("");

    useEffect(()=>{
        const resumir = async () =>{
            if(!url) return;
            setError("");
            setResumo("");
            
            const options = {
                method: 'GET',
                url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
                params: {
                  url: url,
                  lang: 'en',
                  engine: '2'
                },
                headers: {
                  'x-rapidapi-key': '25eaa79cf5msh7b47eeb379c58dap1bc831jsn737c8fda3fd5',
                  'x-rapidapi-host': 'article-extractor-and-summarizer.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  console.log(response.data);
                  if (response.status >= 200 && response.status < 300){
                    setResumo(response.data.summary);
                    setAllArticle(prev => (prev.includes(url) ? prev : [url, ...prev]));

                  }
              } catch (error) {
                    setError(error.message || "Erro")
                    console.error(error);
              }
        };
        resumir();

    },[url])

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (inputUrl) setUrl(inputUrl);
        
    };

    return(
        <div className="div">
            <form className="form" onSubmit={handleSubmit}>
                <input type="url" placeholder="Colar Link do artigo"  value={inputUrl} onChange={(e)=> setInputUrl(e.target.value)}/>
                <button type="submit">Enter</button>
            </form>
            <div>
                {allArticle.map((item, index) =>(
                    <div 
                        key={`-${index}`}
                        className="history-item">
                        <div>
                            <button onClick={() => setUrl(item)}>Colar</button>
                        </div>
                        <div>
                            <p className="">{item}</p>
                        </div>
                    </div>
                ))}
            </div>
            {resumo && (
                <div className="summary-box">
                    <h3>Este é o resultado do <span>Resumo</span></h3>
                    <p>{resumo}</p>
                </div>
            )
                
            }

            {error && <Erro err={error}/>}
            
        </div>
    )


}

export default MainComponent;