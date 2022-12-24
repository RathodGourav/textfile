import React from 'react';


export default function Contect() {
  return (
    <>
      <div className='container-fluid'>

        <div className="row">
          <h2>Contect Us </h2>

          <div className="row container-fluid " >
            <div className="col contecticon " >
              <a href="mailto:rathodji12226@gmail.com">
                <i className="fa-regular fa-envelope cIcon"></i>
              </a>
            </div>
            <div className="col contecticon " >
              <a href='https://bit.ly/3Uxdoeg'>
                <i className="fa-brands fa-whatsapp cIcon"></i>
              </a>
            </div>
            <div className="col contecticon " >
              <a href="https://bit.ly/3BgMMHx">
                <i className="fa-brands fa-instagram cIcon"></i>
              </a>
            </div>
            <div className="col contecticon " >
              <a href="https://bit.ly/3VWEqg9">
                <i className="fab fa-linkedin-in cIcon"></i>
              </a>
            </div>
            <div className="col contecticon " >
              <a href="https://goo.gl/maps/9EWAFd2pErwgfEqMA">
                <i className="fa-solid fa-location-dot cIcon"></i>
              </a>
            </div>
            <div className="col contecticon " >
              <a href="tel:+91 8626003760">
                <i className="fa-sharp fa-solid fa-phone cIcon"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
<hr />
        </div>
        
        <div className="row copyright">
          <p>copyright @ GR. Made with <i className="fas fa-heart"></i> by Gourav Rathod</p>
        </div>
      </div>

    </>
  )
}

