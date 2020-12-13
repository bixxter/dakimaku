import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="white-text dokiFont">Dokimaku</h5>
              <p className="grey-text text-lighten-4">
                Here you can find more information about us.
              </p>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="white-text">Social networks</h5>
              <ul>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    VK
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">© 2020 Peepipoopu inc.</div>
        </div>
      </footer>
    );
  }
}
