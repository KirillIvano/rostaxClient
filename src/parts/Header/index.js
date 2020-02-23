import React, {useState} from 'react';
import classnames from 'classnames';

import styles from './styles.less';
import {
    HeaderLogo,
    HeaderMenu,
    HeaderNav,
    HeaderPhone,
    HeaderBurger,
} from './components';

const Header = ({
    showPopup,
}) => {
    const [isMenuOpened, setMenuState] = useState(false);

    const toggleMenu = () => setMenuState(isOpened => !isOpened);
    const width = document.documentElement.clientWidth;

    return (
        <>
            <div className={
                classnames(
                    styles.header,
                    {
                        [styles.hidden]: !isMenuOpened,
                    },
                )
            }>
                {
                    width > 500 ?
                        <>
                            <HeaderLogo />
                            <HeaderNav />
                        </> :
                        <HeaderBurger toggleMenu={toggleMenu} />
                }
                <HeaderPhone showPopup={showPopup} />
            </div>

            {
                width > 500 ?
                    null :
                    <HeaderMenu
                        toggleMenu={toggleMenu}
                        isOpened={isMenuOpened}
                    />
            }
        </>
    );
};

export default Header;
