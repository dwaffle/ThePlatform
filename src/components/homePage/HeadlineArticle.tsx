import { useEffect, useState } from "react";
import { Button, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { IArticle } from "../../../services/crud-server/src/models/article";
import api from "../../api";


export default function HeadlineArticle(props: {}){

    const [articles, setArticles] = useState<IArticle[]>([]);
    const history = useHistory();
   
    function onclickart(title :string) {
        return function () {
            history.push(`/articles/${title}`);
        };
      }

    useEffect(() => {
        api.article.get().then((response) => {
          setArticles(response.data);
        });
      }, []);
    
   
    return ( <>

        
        <div className="HeadlineArticle">
            <h1> HeadlineArticle </h1>
          
                { articles.slice(8, 10).map((_article) => {

                   return (
                    <div className = "divStyle">

                    <div>
                    <p>
                        <img
                            width={90}
                            height={90}
                            className="imgStyle rounded-circle"
                            src= {_article.art_image}
                            alt="Generic placeholder"
                            />
                        
                        <h2>{ _article.art_title }</h2>

                        { (_article.description).slice(0,60) }

                        <br/><Button variant="outline-primary" onClick = {onclickart(_article.art_title)}>See More</Button>
                    </p>
                </div>
                </div>
                   )



                })}
                
          

               
        </div>

    </>);
}
