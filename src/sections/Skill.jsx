import React, { useEffect } from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'


function Skill() {

    const [htmlProgess, setHtmlProgess] = React.useState(0);
    const [cssProgess, setCssProgess] = React.useState(0);
    const [jqueryProgess, setJqueryProgess] = React.useState(0);
    const [phpProgess, setPhpProgess] = React.useState(0);
    const [wordpressProgess, setWordpressProgess] = React.useState(0);

    const [ref, inView] = useInView()
    const controls = useAnimation()
 
  useEffect(() => {
    const timer = setInterval(() => {
        setHtmlProgess(() => {
        if (inView) {
            const value1 = 90
            return value1
          }
      });
      setCssProgess(() => {
        if (inView) {
            const value1 = 95
            return value1
          }
      });
      setJqueryProgess(() => {
        if (inView) {
            const value1 = 85
            return value1
          }
      });
      setPhpProgess(() => {
        if (inView) {
            const value1 = 90
            return value1
          }
      });
      setWordpressProgess(() => {
        if (inView) {
            const value1 = 90
            return value1
          }
      });

    }, 499);
 
    return () => {
      clearInterval(timer);
    };
  }, [inView]);

  return (
    <section id="skill" className="py_80 bg_secondery full_row">
      <div className="container">
        <div className="row">

          <div className="col-md-12 col-lg-12">
            <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
              <h2 className="title text-uppercase">
                <span className="line_double mx-auto color_default">skill</span>
                Design skill
              </h2>
              <span className="sub_title">
                Interdum a etiam sagittis vehicula porta. Massa felis eros quam
                blandit nulla dolor habitant. Ullamcorper quis ornare et proin
                pellentesque.
              </span>
            </div>
          </div>
        </div>
        <div className="my_skill">
          <div className="row">
            <div className="col-md-12 col-lg-6">
              <div className="about_myskill color_secondery wow animated slideInLeft">
                <h2 className="color_primary">
                  Some talk about my professional design skill
                </h2>
                <p className="pt_15">
                  At mattis condimentum leo cubilia dictumst purus cubilia nisl
                  quisque lacus ultricies proin massa fermentum placerat
                  sociosqu ornare felis ultricies taciti mauris. Tempor mi, cum
                  a condimentum commodo bibendum risus mauris natoque molestie
                  tellus. In iaculis ad augue gravida posuere.
                </p>
                <p className="pt_15">
                  Lectus neque fames lacinia magnis primis. Dictumst torquent
                  dictumst. Bibendum et rutrum feugiat fames interdum purus
                  feugiat praesent Nunc vivamus habitant nam ultricies est.
                  Massa amet cubilia, vitae nonummy nisl. Rutrum mus velit
                  vivamus sapien est.
                </p>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="skill-progress wow animated slideInRight">
                <div className="prgs-bar fact-counter">
                  <span>HTML</span>
                  <div className="skill-percent">
                  <CountUp
                  duration={4}
                  start={0} 
                  end={90} 
                  useEasing={true}
                  enableScrollSpy={true}
                  />%
                </div>
                <motion.div
                    ref={ref}
                    variants={htmlProgess}
                    initial='hidden'
                    animate={controls}
                    >
                  <ProgressBar variant="warning" animated now={htmlProgess} />
                  </motion.div>
                </div>
                <div className="prgs-bar fact-counter">
                  <span>CSS</span>
                  <div className="skill-percent">
                  <CountUp
                  duration={4}
                  start={0} 
                  end={95} 
                  useEasing={true}
                  enableScrollSpy={true}
                  />%
                </div>
                  <ProgressBar variant="warning" animated now={cssProgess} />
                </div>
                <div className="prgs-bar fact-counter">
                  <span>JQuery</span>
                  <div className="skill-percent">
                  <CountUp
                  duration={4}
                  start={0} 
                  end={85} 
                  useEasing={true}
                  enableScrollSpy={true}
                  />%
                </div>
                  <ProgressBar variant="warning" animated now={jqueryProgess} />
                </div>
                <div className="prgs-bar fact-counter">
                  <span>PHP</span>
                  <div className="skill-percent">
                  <CountUp
                  duration={4}
                  start={0} 
                  end={90} 
                  useEasing={true}
                  enableScrollSpy={true}
                  />%
                </div>
                  <ProgressBar variant="warning" animated now={phpProgess} />
                </div>
                <div className="prgs-bar fact-counter">
                  <span>Wordpress</span>
                  <div className="skill-percent">
                  <CountUp
                  duration={4}
                  start={0} 
                  end={90} 
                  useEasing={true}
                  enableScrollSpy={true}
                  />%
                </div>
                  <ProgressBar variant="warning" animated now={wordpressProgess} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
