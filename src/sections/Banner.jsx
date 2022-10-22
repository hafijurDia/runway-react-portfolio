import React from "react";
import {Link} from 'react-scroll'
import Typed from 'react-typed'


function Banner() {

  const typedStrings = [
    'UI/UX Designer.',
    'Developer.',
    'Freelancer.',
  ]

  const options = {
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 50,
    // time before typing starts
    startDelay: 500,
    // backspacing speed
    backSpeed: 60,
    // time before backspacing
    backDelay: 500,
    // loop
    loop: true,
    // false = infinite
    loopCount: 100,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: '|',
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: 'html',
  }



  return (
    <section id="main_banner" className="banner_water_effect background3 overlay_one">
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-md-12 col-lg-12 home-content text-left">
            <div className="mainbanner_content">
              <span className="pb_5 banner_title color_white" style={{marginBottom:"30px",display:"inline-block"}}>
                I Am Hafijur Rahman!
              </span>
              <h1 className="cd-headline clip is-full-width text-uppercase">
                <span className="color_white">I am a &nbsp;{' '} </span>
                <span className="color_default">
                  <b className="is-visible">
                    <Typed strings={typedStrings} {...options} />
                  </b>
                </span>
              </h1>
              <p className="color_white mb_30" style={{marginTop:"30px"}}>
                Libero habitasse sollicitudin aliquet venenatis iaculis placerat
                amet ligula, eleifend nonummy enim in volutpat diam.
              </p>
              <Link className="btn btn-default" to="#">
                Download CV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
 
  );
}

export default Banner;
