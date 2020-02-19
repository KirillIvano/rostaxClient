import React from 'react';
import styles from './styles.less';
import Button from '@/components/Button';
import {Link as ScrollLink} from 'react-scroll';

const TextSection = (props) => (
    <div className={styles.textSection}>
        {props.children}
    </div>
);

const windowHeight = document.documentElement.clientHeight;

const HeadlineContent = () => {
    return (
        <div style={{height: windowHeight}} className={styles.headlineContent}>
            <div className={styles.over + ' ' + styles.top}></div>
            <div className={styles.over + ' ' + styles.bottom}></div>
            <TextSection>
                ООО ПКФ «РОСТАКС» работает на рынке лакокрасочной продукции с 1994 года!
                <ScrollLink
                    to={'contacts'}
                    duration={1500}
                    smooth={true}
                    offset={-100}
                >
                    <Button>ПОЗВОНИТЕ НАМ!</Button>
                </ScrollLink>
            </TextSection>
        </div> 

    );
};

export default HeadlineContent;
