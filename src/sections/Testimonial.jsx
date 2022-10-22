import React from "react";
import OwlCarousel from "react-owl-carousel";

const options = {
  responsive: {
      0: {
          items: 1,
      },
      400: {
          items: 1,
      },
      600: {
          items: 1,
      },
      700: {
          items: 1,
      },
      1000: {
          items: 2,

      }
  },
}

function Testimonial() {
  return (
    <section id="testimonial" className="py_80 full_row bg_white">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="section_title_1 text-center mx-auto pb_60 wow animated slideInUp">
              <h2 className="title text-uppercase">
                <span className="line_double mx-auto color_default">
                  testimonial
                </span>
                What Client Say’s
              </h2>
              <span className="sub_title">
                Interdum a etiam sagittis vehicula porta. Massa felis eros quam
                blandit nulla dolor habitant. Ullamcorper quis ornare et proin
                pellentesque.
              </span>
            </div>
          </div>
          <div className="col-md-12 col-lg-12">
            <OwlCarousel
              className="owl-theme"
              loop
              margin={10}
              autoplay
              nav
              {...options}
            >
              <div className="member_feedback p_30 color_secondery">
                <div className="client_img">
                  <img src="images/testimonial/01.jpg" alt="image" />
                </div>
                <div className="star d-inline-block mt_30 color_default">
                  <ul>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                  </ul>
                </div>
                <h5 className="color_primary mb_15">Aisha Lexi</h5>
                <p>
                  Sem duis platea erat feugiat vivamus nascetur sapien tortor.
                  Sollic dictum ultric. Aliquam inceptos bibendum fringilla
                  sodales. Molest lacin urna per aenean commodo sociosqu.
                </p>
              </div>
              <div className="member_feedback p_30 color_secondery">
                <div className="client_img">
                  <img src="images/testimonial/02.jpg" alt="image" />
                </div>
                <div className="star d-inline-block mt_30 color_default">
                  <ul>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                  </ul>
                </div>
                <h5 className="color_primary mb_15">Kiara Paige</h5>
                <p>
                  Sem duis platea erat feugiat vivamus nascetur sapien tortor.
                  Sollic dictum ultric. Aliquam inceptos bibendum fringilla
                  sodales. Molest lacin urna per aenean commodo sociosqu.
                </p>
              </div>
              <div className="member_feedback p_30 color_secondery">
                <div className="client_img">
                  <img src="images/testimonial/03.jpg" alt="image" />
                </div>
                <div className="star d-inline-block mt_30 color_default">
                  <ul>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                  </ul>
                </div>
                <h5 className="color_primary mb_15">Lucas Noah</h5>
                <p>
                  Sem duis platea erat feugiat vivamus nascetur sapien tortor.
                  Sollic dictum ultric. Aliquam inceptos bibendum fringilla
                  sodales. Molest lacin urna per aenean commodo sociosqu.
                </p>
              </div>
              <div className="member_feedback p_30 color_secondery">
                <div className="client_img">
                  <img src="images/testimonial/04.jpg" alt="image" />
                </div>
                <div className="star d-inline-block mt_30 color_default">
                  <ul>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                    <li>
                      <i className="fa fa-star" aria-hidden="true"></i>
                    </li>
                  </ul>
                </div>
                <h5 className="color_primary mb_15">Grace Ruby</h5>
                <p>
                  Sem duis platea erat feugiat vivamus nascetur sapien tortor.
                  Sollic dictum ultric. Aliquam inceptos bibendum fringilla
                  sodales. Molest lacin urna per aenean commodo sociosqu.
                </p>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
