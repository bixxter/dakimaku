import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h2 className="white-text dokiFont">Dakimaku</h2>
              <p className="grey-text text-lighten-4">
                <p>Our adress: Rozybakiev 227</p>
                <p>Shop location address - Rozybakiev 227</p>
                <p>Shop contacts</p>
                <p>E-mails</p>
                <p>Gmail: ​dakimaku.almaty@gmail.com</p>
                <p>Mail.ru: dakimaku.almaty@mail.ru</p>
                <p>Phone numbers</p>
                <p>+7 707 899 898 34 - Delivery stuff</p>
                <p>+7 707 999 989 43 - Technical issues solve stuff</p>
              </p>
            </div>
            <div className="col l4 s12">
              <h5 className="white-text">Links</h5>
              <ul>
                <li><a className="grey-text text-lighten-3" href="#!">Instagram : @dakimaku.almaty</a></li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                  VK:  @dakimaku.almaty
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                    Facebook
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="#!">
                  Telegram :  @dakimaku.almaty
                  </a>
                </li>
                <li>
                  <a className="grey-text text-lighten-3" href="mailto:dakimaku.almaty@gmail.com">dakimaku.almaty@gmail.com</a>
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
