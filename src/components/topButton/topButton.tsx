import { useEffect } from 'react';
import './style.scss';
// import { ImArrowUp } from 'react-icons/im';
import { ImCircleUp } from 'react-icons/im';

export default function TopButton(props: {}) {

    

    function scrollFunction() {
        var mybutton:any = document.getElementById("myBtnToTop");
        
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                  
                mybutton.style.display = "block";

                } else {
                    mybutton.style.display = "none";                    
                }


    }

    // When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {

     // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    
  }, [window.scrollY]);
  

    return(<>

    {/* <button  onClick={()=>{ topFunction() }} id="myBtnToTop" title="Go to top"><ImArrowUp/></button> */}
    <button  onClick={()=>{ topFunction() }} id="myBtnToTop" title="Go to top"><ImCircleUp/></button>

        
    </>);

}
  

