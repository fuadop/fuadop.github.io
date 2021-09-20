import React, { Fragment } from 'react';
import { Emoji } from 'react-apple-emojis';
import { withTheme } from '../utils/themeProvider';

const Desktop = ({ theme }) => {
  return (
    <Fragment>
      <div style={{
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingRight: '115px',
        paddingLeft: '50px'
      }}>
        <h3 style={{
          size: '26px',
          lineHeight: '30.47px',
          fontWeight: '400',
          color: theme.textColor,
          marginTop: '37px'
        }}>
          Hello! <span>
            <Emoji
              name="waving-hand"
              style={{
                width: "45px",
                height: "45px"
              }}
            />
          </span>
        </h3>
        <h3 style={{
          size: '26px',
          width: '886px',
          lineHeight: '30.47px',
          fontWeight: '400',
          color: theme.textColor,
          marginTop: '50px'
        }}>
          I'm <b>Fuad Olatunji</b>, an highly skilled software engineer focused on backend and mobile development
          <span>
            <Emoji
              name="laptop"
              style={{
                width: "45px",
                height: "45px"
              }}
            />
          </span>
        </h3>
        <div className="row">
          <h3
            style={{
              marginTop: '50px',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '18.75px',
              color: theme.textColor,
              marginBottom: '0px',
              padding: '0px'
            }}
          >
            Get in touch
            <span>
              <Emoji
                name="backhand-index-pointing-right"
                style={{
                  width: "24px",
                  height: "24px"
                }}
              />
            </span>
            <span>
              <a
                style={{
                  marginLeft: '15px',
                  textDecoration: 'underline',
                  color: theme.textColor,
                  textDecorationColor: theme.headingColor,
                  textDecorationThickness: '3px',
                  fontSize: '18px',
                  fontWeight: '500',
                  lineHeight: '21.09px',
                  marginTop: '5px',
                  padding: '0px'
                }}
                href="mailto:fuad@fuadolatunji.me"
              >
                fuad@fuadolatunji.me
              </a>
            </span>
          </h3>
        </div>
        <div className="row" style={{
          marginTop: '183px',
        }}>
          <div className="col-4">
            <h3 style={{
              color: theme.headingColor,
              textAlign: 'right',
              fontWeight: '700',
              marginRight: '70px',
              fontSize: '16px',
              lineHeight: '18.75px',
              letterSpacing: '8%'
            }}>
              BACKGROUND
            </h3>
          </div>
          <div className="col-8"> 
            <h3 style={{
              size: '20px',
              fontWeight: '400',
              color: theme.textColor,
            }}>
              I am currently an engineer at 
              <a href="https://textury.org" style={{
                textDecoration: 'none'
              }}>
                {" "} Textury {" "}
              </a>
              building amazing software. I am a 4th year undergraduate
              student of <b>{" "}
                Lagos State University{" "}
              </b>
              studying{" "}
              <b>
                Electronic and Computer Engineering.
              </b>
              <br/><br/>
              When I'm not in front of my computer screen, I'm probably 
              watching movies, reading articles or I'm sleeping.
            </h3>
          </div>
        </div>
        <div className="row" style={{
          marginTop: '200px',
        }}>
          <div className="col-4" style={{
            textAlign: 'right'
          }}>
            <h3 style={{
              color: theme.headingColor,
              fontWeight: '700',
              marginRight: '70px',
              fontSize: '16px',
              lineHeight: '18.75px',
              letterSpacing: '8%',
              marginBottom: '30px',
            }}>
              SKILLS
            </h3>
          </div>
          <div className="col-8">
            <div className="row align-items-center" style={{
              marginLeft: '25px',
            }}>
              <div className="col-6 col-md-4">
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '700',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                  letterSpacing: '8%',
                  marginBottom: '10px',
                }}>
                  LANGUAGES
                </h3>
                <ul className="list-unstyled" style={{
                  color: theme.textColor,
                  fontSize: '16px',
                  lineHeight: '18.75px'
                }}>
                  <li>
                    JavaScript
                  </li>
                  <li>
                    TypeScript
                  </li>
                  <li>
                    Go
                  </li>
                  <li>
                    SQL
                  </li>
                  <li>
                    NOSQL
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '700',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                  letterSpacing: '8%',
                  marginBottom: '10px',
                }}>
                  FRAMEWORKS 
                </h3>
                <ul className="list-unstyled" style={{
                  color: theme.textColor,
                  fontSize: '16px',
                  lineHeight: '18.75px'
                }}>
                  <li>
                    Express JS
                  </li>
                  <li>
                    Node JS
                  </li>
                  <li>
                    React JS
                  </li>
                  <li>
                    React Native
                  </li>
                  <li>
                    Koa
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-4">
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '700',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                  letterSpacing: '8%',
                  marginBottom: '10px',
                }}>
                  TOOLS 
                </h3>
                <ul className="list-unstyled" style={{
                  color: theme.textColor,
                  fontSize: '16px',
                  lineHeight: '18.75px'
                }}>
                  <li>
                    Bash
                  </li>
                  <li>
                    Git & Github
                  </li>
                  <li>
                    Mongo DB
                  </li>
                  <li>
                    MYSQL
                  </li>
                  <li>
                    SQLite 
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default withTheme(Desktop);
