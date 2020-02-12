import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import logo from "../img/logo_svg.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

const Footer = () => {
  return (
    <FooterContainer className='footer '>
      <div className='content has-text-centered'>
        <img src={logo} alt='Kaldi' style={{ width: "10em", height: "auto", filter: "brightness(7)" }} />
      </div>
      <Divider />
      <div className='content'>
        <div className='container'>
          <div className='columns'>
            <div className='column is-3'>
              <section className='menu'>
                <ul className='menu-list'>
                  <li>
                    <Link to='/' className='navbar-item'>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className='navbar-item' to='/about'>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className='navbar-item' to='/products'>
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link className='navbar-item' to='/contact/examples'>
                      Form Examples
                    </Link>
                  </li>
                  <li>
                    <a className='navbar-item' href='/admin/' target='_blank' rel='noopener noreferrer'>
                      Admin
                    </a>
                  </li>
                </ul>
              </section>
            </div>
            <div className='column is-3'>
              <section>
                <ul className='menu-list'>
                  <li>
                    <Link className='navbar-item' to='/blog'>
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className='navbar-item' to='/contact'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className='column is-3'>
              <section>
                <ul className='menu-list'>
                  <li>
                    <Link className='navbar-item' to='/blog'>
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className='navbar-item' to='/contact'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className='column is-3'>
              <section>
                <ul className='menu-list'>
                  <li>
                    <Link className='navbar-item' to='/blog'>
                      Latest Stories
                    </Link>
                  </li>
                  <li>
                    <Link className='navbar-item' to='/contact'>
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      <FooterBar>
        <div className='social'>
          <a title='facebook' href='https://facebook.com'>
            <img src={facebook} alt='Facebook' style={{ width: "1em", height: "1em" }} />
          </a>
          <a title='twitter' href='https://twitter.com'>
            <img className='fas fa-lg' src={twitter} alt='Twitter' style={{ width: "1em", height: "1em" }} />
          </a>
          <a title='instagram' href='https://instagram.com'>
            <img src={instagram} alt='Instagram' style={{ width: "1em", height: "1em" }} />
          </a>
          <a title='vimeo' href='https://vimeo.com'>
            <img src={vimeo} alt='Vimeo' style={{ width: "1em", height: "1em" }} />
          </a>
        </div>
      </FooterBar>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  min-height: 30vh;
  background: linear-gradient(180deg, #0a3947 0%, #0097ac 100%);
  background-blend-mode: multiply;
  padding: 12rem 0rem 5rem 0rem;
  clip-path: polygon(0 0, 100% 30%, 100% 100%, 0% 100%);
`;

const FooterBar = styled.div`
  background: rgba(0, 0, 0, 0.3);
  height: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: white;
  text-transform: uppercase;
  font-weight: 600;
`;

const Divider = styled.hr`
  height: 1px;
  background: #ffffff33;
  width: 85vw;
  margin: auto;
  border: none;
`;

export default Footer;
