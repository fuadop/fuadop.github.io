import React, { useEffect, useState } from 'react';
import { EmojiProvider } from 'react-apple-emojis'
import emojiData from 'react-apple-emojis/lib/data.json'
import { ThemeProvider } from './utils/themeProvider';
import Switch from 'react-switch';
import { BiSun, BiMoon } from 'react-icons/bi';
import useWindowSize from './hooks/useWindowSize';
import Mobile from './screens/mobile';
import Desktop from './screens/desktop';


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
          height: '100%',
          paddingBottom: '2px',
          overflowX: 'hidden'
        }}>
          <div className="container-fluid" style={{
            width: '100%',
            overflowX: 'hidden'
          }}>
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
            {
              width < 800 ? 
              <Mobile/>
              : <Desktop/>
            }
          </div>
        </div>
      </EmojiProvider>
    </ThemeProvider>
  );
}

export default App;
