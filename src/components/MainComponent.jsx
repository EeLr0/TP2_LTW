import React, {useEffect, useState} from "react";
import axios from 'axios'
import Erro from "../components/Erro";
import '../styles/MainComponent.css'


function MainComponent(){
    const [url, setUrl] = useState("");
    //const [article, setArticle] = useState("");
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
                    setAllArticle([url, ...allArticle]);

                  }
              } catch (error) {
                    setError(error)
                    console.error(error);
              }
        };
        resumir();

    },[url])

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(url) setUrl(url);
    };

    return(
        <div className="div">
            <form className="form" onSubmit={handleSubmit}>
                <input type="url" placeholder="Colar Link do artigo"  value={url} onChange={(e)=> setUrl(e.target.value)}/>
                <button>Enter</button>
            </form>
            <div>
                {allArticle.map((item, index) =>(
                    <div 
                        key={`-${index}`}>
                        <div onClick={() => setUrl(item)}>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <p>{item}</p>
                        </div>
                    </div>
                ))}
            </div>
            {resumo &&
                <div>
                    <h3>Este é o resultado do <span>Resumo</span></h3>
                    <p>{resumo}</p>
                </div>
            }

            {error && <Erro err={error}/>}
            
        </div>
    )


}

export default MainComponent;