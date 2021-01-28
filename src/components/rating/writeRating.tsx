import React from "react";
import Rating from "react-rating";
import { useHistory } from "react-router";


export default function writeRating(props: {}) {

    return (
        <div>
            <h3>writeRating</h3>
            
            {console.log("history",useHistory)}
              {/* {console.log("slug",rate) } */}
  
        </div>
      );
}
