import React from 'react';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

import styles from './styles.less';
import {SmallPreloader} from '@/components/SmallPreloader';
import {Color} from '@/components/Color';
import {BackButton} from '@/components/BackButton';

const GET_COLORS = gql`
    {
        colorSections {
            name 
            colors{
                name,
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
    const {data, loading, error} = useQuery(GET_COLORS);

    if (loading) {
        return (
            <div className={styles.colors}>
                <SmallPreloader />
            </div>
        );
    }

    if (error) {
        return null;
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
