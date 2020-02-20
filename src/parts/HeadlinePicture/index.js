import React from 'react';
import classnames from 'classnames';

import styles from './styles.less';
import {Button} from '@/components/Button';
import {Link as ScrollLink} from 'react-scroll';

const TextSection = ({children}) => (
    <div className={styles.textSection}>
        {children}
    </div>
);

const windowHeight = document.documentElement.clientHeight;

export const HeadlinePicture = () => (
    <div style={{height: windowHeight}} className={styles.headlineContent}>
        <div className={classnames(styles.over, styles.top)}></div>
        <div className={classnames(styles.over, styles.bottom)}></div>
        <TextSection>
                ООО ПКФ «РОСТАКС» работает на рынке лакокрасочной продукции с 1994 года!
            <ScrollLink
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
