import React, { useEffect, useState } from 'react';
import { EmojiProvider, Emoji } from 'react-apple-emojis'
import emojiData from 'react-apple-emojis/lib/data.json'
import { ThemeProvider, useTheme } from './utils/themeProvider';
import Switch from 'react-switch';
import { BiSun, BiMoon } from 'react-icons/bi';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiMail, FiLinkedin, FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi';
import useWindowSize from './hooks/useWindowSize';

const defaultThemes = {
  dark: {
    textColor: '#F4F4F4',
    headingColor: '#1979DC',
    iconsColor: '#FFFFFF',
    backgroundColor: '#14141D', 
  },
  light: {
    textColor: '#656464',
    headingColor: '#1979DC',
    iconsColor: '#000000',
    backgroundColor: '#FFFFFF',
  }
};

const App = () => {
  const [theme, setTheme] = useState(defaultThemes.light);
  const [checked, setChecked] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (checked) {
      setTheme(defaultThemes.dark)
    } else {
      setTheme(defaultThemes.light)
    }
  }, [checked]);

  return (
    <ThemeProvider theme={theme}>
      <EmojiProvider data={emojiData}>
        <div className="container-fluid" style={{
          paddingTop: width < 800 ? '30px' : '50px',
          backgroundColor: theme.backgroundColor,
          width: '100vw',
        }}>
          <div className="container-fluid">
            <div className="d-flex justify-content-end align-items-center" style={{
              marginLeft: '20px'
            }}>
              <div className="d-flex justify-content-center align-items-center">
                <div className="mb-2">
                  <BiSun 
                    size="24px"
                    color={theme.iconsColor}
                  />  
                </div>
                <div className="mx-2">
                  <Switch
                    onChange={(checked) => setChecked(checked)}
                    checked={checked}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={28}
                    width={51.33}
                    offColor="#808080"
                    handleDiameter={21}
                  /> 
                </div>
                <div className="mb-2">
                  <BiMoon 
                    size="24px"
                    color={theme.iconsColor}
                  />
                </div>
              </div>
            </div>
            <div style={{
              marginRight: 'auto',
              marginLeft: 'auto',
              paddingRight: '50px',
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
                <div className="col-12 col-md-2">
                  <h3
                    style={{
                      marginTop: '50px',
                      fontWeight: '400',
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
                  </h3>
                </div>
                <div className="col-12 col-md-10 text-left">
                  <h3>
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
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div style={{
            marginTop: '122px',
            paddingRight: '35px',
            paddingLeft: '35px',
          }}>
            <h3 style={{
              color: theme.headingColor,
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '18.75px',
              letterSpacing: '8%'
            }}>
              BACKGROUND
            </h3>
            <div style={{
              marginTop: '40px'
            }}>
              <h3 style={{
                size: '16px',
                fontWeight: '400',
                color: theme.textColor,
                paddingLeft: '60px'
              }}>
                I am currently an engineer at 
                <a>
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
            <div style={{
              marginTop: '80px',
              paddingRight: '35px',
              paddingLeft: '35px',
            }}>
              <h3 style={{
                color: theme.headingColor,
                fontWeight: '700',
                fontSize: '16px',
                lineHeight: '18.75px',
                letterSpacing: '8%',
                marginBottom: '30px',
              }}>
                SKILLS
              </h3>
              <div className="row align-items-center" style={{
                marginLeft: '25px'
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
          <div style={{
            marginTop: '80px',
            paddingRight: '35px',
            paddingLeft: '35px',
          }}>
            <h3 style={{
              color: theme.headingColor,
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '18.75px',
              letterSpacing: '8%',
              marginBottom: '30px',
            }}>
              EXPERIENCE
            </h3>
            <div className="row justify-content-center align-items-center" style={{
              marginLeft: '25px'
            }}>
              <div className="col-12">
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '300',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                }}>
                  <b style={{
                    fontWeight: '900'
                  }}>
                    Zsolutions limited.{" "} 
                  </b>
                  Lagos, Nigeria
                </h3>
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '300',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                }}>
                  July 2021 - Present
                </h3>
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                }}>
                  Software Engineer <br/> (Backend)
                </h3>
              </div>
              <div className="col-12" style={{
                marginTop: '25px'
              }}>
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '300',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                }}>
                  <b style={{
                    fontWeight: '900'
                  }}>
                    Ligosmart.{" "} 
                  </b>
                  Lagos, Nigeria
                </h3>
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '300',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                }}>
                  March 2021 - September 2021
                </h3>
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                }}>
                  Software Engineer <br/> (Mobile, Backend)
                </h3>
              </div>
              <div className="col-12" style={{
                marginTop: '25px'
              }}>
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '300',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                }}>
                  <b style={{
                    fontWeight: '900'
                  }}>
                    Innovation Associates Nig. Ltd.{" "} 
                  </b>
                  Lagos, Nigeria
                </h3>
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '300',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                }}>
                  December 2020 - August 2021
                </h3>
                <h3 style={{
                  color: theme.textColor,
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '18.75px',
                }}>
                  Software Engineer <br/> (Mobile, Frontend, Backend)
                </h3>
              </div>
              <a href="https://drive.google.com/file/d/1NPRv5GiwcKVDaIf_lssLQaV0EnGLlPQV/view?usp=sharing" target="_blank" rel="noreferrer" style={{
                textDecoration: 'none'
              }}>
                <div className="d-flex align-items-center" style={{
                  marginTop: '60px'
                }}>
                  <h3 style={{
                    marginRight: '16px',
                    color: theme.textColor,
                    fontWeight: '700',
                    fontSize: '16px',
                    lineHeight: '18.75px',
                  }}>
                    View My Resume
                  </h3>
                  <div className="mb-2">
                    <AiOutlineArrowRight
                      size="24px"
                      color={theme.headingColor}
                    />                
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div style={{
            marginTop: '80px',
            paddingRight: '35px',
            paddingLeft: '35px',
          }}>
            <h3 style={{
              color: theme.headingColor,
              fontWeight: '700',
              fontSize: '16px',
              lineHeight: '18.75px',
              letterSpacing: '8%',
              marginBottom: '30px',
            }}>
              FEATURED PROJECTS
            </h3>
          </div>
          <div>
            <ul className="list-unstyled d-flex justify-content-center align-items-center">
              <li
                style={{
                  marginRight: '11px',
                  marginLeft: '11px',
                }}
              >
                <a href="mailto:fuad@fuadolatunji.me">
                  <FiMail
                    size="16px"
                    color={theme.headingColor}
                  />
                </a>
              </li>
              <li
                style={{
                  marginRight: '11px',
                  marginLeft: '11px',
                }}
              >
                <a href="https://linkedin.com/in/fuadop" target="_blank" rel="noreferrer">
                  <FiLinkedin
                    size="16px"
                    color={theme.headingColor}
                  />
                </a>
              </li>
              <li
                style={{
                  marginRight: '11px',
                  marginLeft: '11px',
                }}
              >
                <a href="https://github.com/fuadop" target="_blank" rel="noreferrer">
                  <FiGithub
                    size="16px"
                    color={theme.headingColor}
                  />
                </a>
              </li>
              <li
                style={{
                  marginRight: '11px',
                  marginLeft: '11px',
                }}
              >
                <a href="https://twitter.com/fuadop2" target="_blank" rel="noreferrer">
                  <FiTwitter
                    size="16px"
                    color={theme.headingColor}
                  
                  />
                </a>
              </li>
              <li
                style={{
                  marginRight: '11px',
                  marginLeft: '11px',
                }}
              >
                <a href="https://instagram.com/fuado_p" target="_blank" rel="noreferrer">
                  <FiInstagram
                    size="16px"
                    color={theme.headingColor}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </EmojiProvider>
    </ThemeProvider>
  );
}

export default App;
