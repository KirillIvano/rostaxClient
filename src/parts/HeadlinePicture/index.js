import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';
import {Button} from '@/components';
import {Link as ScrollLink} from 'react-scroll';
import {useAppearOnStart} from '@/hooks/useAppearOnStart';

const TextSection = ({children}) => {
    const appearRef = useAppearOnStart();
    return (
        <div ref={appearRef} className={styles.textSection}>
            {children}
        </div>
    );
};

const windowHeight = document.documentElement.clientHeight;

const HeadlinePicture = () => (
    <div style={{height: windowHeight}} className={styles.headlineContent}>
        <div className={classnames(styles.over, styles.top)}></div>
        <div className={classnames(styles.over, styles.bottom)}></div>
        <TextSection>
            <h1 className={styles.naming}>
                ООО ПКФ «РОСТАКС»
            </h1>
            <h2 className={styles.subHeadline}>
                Производим качественную продукцию с 1994 года!
            </h2>
            <ScrollLink
                className={styles.link}
                to={'contacts'}
                duration={1500}
                smooth={true}
                offset={-100}
            >
                <Button>
                    ПОЗВОНИТЕ НАМ!
                </Button>
            </ScrollLink>
        </TextSection>
    </div>
);

export default HeadlinePicture;
