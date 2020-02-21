import React from 'react';
import styles from './styles.less';
import {
    DescriptionRowsMap,
    DescriptionRow,
} from './../DescriptionRows';

const Section = ({
    name,
    children,
}) => (
    <table className={styles.descriptionTable}>
        <caption className={styles.caption}>
            {name}
        </caption>
        <tbody>
            {children}
        </tbody>
    </table>
);

export const DescriptionSection = ({
    name,
    items,
}) => (
    <Section name={name}>
        <DescriptionRowsMap items={items} />
    </Section>
);

export const MainSection = ({
    name,
    shortDescription,
    type,
}) => (
    <Section name={name}>
        <DescriptionRow name={'Применение'} value={shortDescription} />
        <DescriptionRow name={'Тип'} value={type} />
    </Section>
);

export const DescriptionSectionsMap = ({description}) =>
    description.map((section, ind) => <DescriptionSection key={ind} {...section} />);
