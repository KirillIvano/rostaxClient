import React from 'react';
import {Link as ScrollLink} from 'react-scroll';
import {Link} from 'react-router-dom';
import styles from './styles.less';

const NavItems = () => (
    <React.Fragment>
        <Link to={'/'}>
            <div className={styles.navItem}>
                ГЛАВНАЯ
            </div>
        </Link>
        <Link to={'/product_types'}>
            <div className={styles.navItem}>
                ПРОДУКТЫ
            </div>
        </Link>
        <Link to={'/colors'}>
            <div className={styles.navItem}>
                КОЛЕРОВКА
            </div>
        </Link>
        <div className={styles.navItem}>
            <ScrollLink
                to={'contacts'}
                duration={1500}
                smooth={true}
                offset={-100}
            >
                КОНТАКТЫ
            </ScrollLink>
        </div>
    </React.Fragment>
);

export default NavItems;
