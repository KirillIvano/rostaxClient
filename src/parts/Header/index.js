import React from 'react';
import styles from './styles.less';

import HeaderLogo from './HeaderLogo';
import HeaderNav from './HeaderNav';
import HeaderMenu from './HeaderMenu';
import HeaderPhone from './HeaderPhone';
import Burger from './Burger';

export default class Header extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isMenuOpened: false,
        };
    }

    toggleMenu = () => {
        this.setState({
            isMenuOpened: !this.state.isMenuOpened,
        });
    };

    render () {
        const width = document.documentElement.clientWidth;
        return (
            <React.Fragment>
                <div className={styles.header + ' ' + (this.props.hidden && !this.state.isMenuOpened ? styles.hidden : '')}>
                    {
                        width > 500 ? <HeaderLogo /> : <Burger toggleMenu={this.toggleMenu} />
                    }
                    {
                        width > 500 ? <HeaderNav /> : null
                    }
                    <HeaderPhone showPopup={this.props.showPopup} />
                </div>
                {
                    width > 500 ?
                    null :
                    <HeaderMenu toggleMenu={this.toggleMenu} isOpened={this.state.isMenuOpened} />
                }
            </React.Fragment>
        );
    };
}
