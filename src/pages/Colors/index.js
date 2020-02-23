import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import styles from './styles.less';
import {
    SmallPreloader,
    Color,
    ErrorView,
    BackButton,
} from '@/components';
import {useScrollTop} from '@/hooks/useScrollTop';

const GET_COLORS = gql`
    {
        colorSections {
            name 
            colors{
                nam,
                code
            }
        }
    }
`;

export const ColorSection = ({
    name,
    colors,
}) => (
    <div className={styles.colorSection}>
        <p className={styles.sectionName}>
            {name}
        </p>
        {
            colors.map(color => <Color key={color.code} {...color} />)
        }
    </div>
);

const Colors = () => {
    useScrollTop();
    const {data, loading, error} = useQuery(GET_COLORS);

    if (loading) {
        return (
            <div className={styles.colorsPage}>
                <SmallPreloader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={styles.colorsPage}>
                <ErrorView
                    text={'Что - то сломалось. Пожалуйста, позвоните и' +
                          ' задайте все вопросы нам лично, или приходите позже!'}
                />
            </div>
        );
    }

    const {colorSections} = data;

    return(
        <>
            <div className={styles.colorsPage}>
                {
                    colorSections.map(section => <ColorSection key={section.name} {...section} />)
                }
            </div>
            <BackButton url={'/'} />
        </>
    );
};

export default Colors;
