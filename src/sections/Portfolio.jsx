import React,{useState, useEffect} from "react";
import { PortfolioData } from "../data/PortfolioData";
import { motion, useAnimation, AnimatePresence } from 'framer-motion'



function Portfolio() {
  const [portfolio, setPortfolio] = useState(PortfolioData)
  
  const filterItem = (portfolioItem) => {
    const updatedPort = PortfolioData.filter((curPortfolio) => {
      return curPortfolio.category === portfolioItem
    })
    setPortfolio(updatedPort);
  }

  return (
    <section id="portfolio" className="py_80 bg_secondery full_row">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
              <h2 className="title text-uppercase">
                <span className="line_double mx-auto color_default">portfolio</span>
                Recent Projects
              </h2>
              <span className="sub_title">
                Interdum a etiam sagittis vehicula porta. Massa felis eros quam
                blandit nulla dolor habitant. Ullamcorper quis ornare et proin
                pellentesque.
              </span>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <div className="my_portfolio" id="tab-panel">
              {/* <!--Filter--> */}
              <div className="row">
                <div className="col-md-12">
                  <div className="filters mb_30 w-100 text-center">
                    <ul className="filter-tabs mx-auto d-inline-block">
                    <li
                        className="active filter"
                        onClick={() => setPortfolio(PortfolioData)}
                      >
                        All
                      </li>
                      <li
                        className="filter"
                        onClick={() => filterItem('webDesign')}
                      >
                       Web Desing
                      </li>
                      <li
                        className="filter"
                        onClick={() => filterItem('webDevelopment')}
                      >
                        Web Development
                      </li>
                      <li
                        className="filter"
                        onClick={() => filterItem('wordpress')}
                      >
                        Wordpress
                      </li>
                      <li
                        className="filter"
                        onClick={() => filterItem('branding')}
                      >
                        Branding
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </div>

              <div className="filter-list">
                <div className="portfolio-items">
                  <div className="row">

                    {
                      portfolio.map((elem) => {
                        const {id, largeImg, category} = elem;
                        return (
                          <motion.div className="column mb_30 col-md-4 col-lg-4" key={id}
                              layout
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{duration:0.5}}
                              >
                          <div>
                          <div className="default-portfolio-item">
                          
                            <a
                              href={largeImg}
                              data-fancybox="gallery"
                            >
                                <img src={largeImg} alt="image" />

                              <div className="overlay-box">
                                <span>
                                  <i className="fa fa-eye" aria-hidden="true"></i>
                                </span>
                                <div className="tag">
                                  <ul>
                                    <li>Web Development,</li>
                                    <li>wordpress</li>
                                  </ul>
                                </div>
                              </div>
                            </a>
                    
                          </div>
                        </div>
                        </motion.div>
                        )

                      })
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
