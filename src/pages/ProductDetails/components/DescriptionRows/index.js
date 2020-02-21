import React from 'react';
import styles from './styles.less';

export const DescriptionRow = ({
    name,
    value,
}) => (
    <tr className={styles.row}>
        <td className={styles.key}>
            {name}
        </td>
        <td className={styles.value}>
            {value}
        </td>
    </tr>
);

export const DescriptionRowsMap = ({items}) =>
    items.map(({propName, propValue}) => <DescriptionRow name={propName} value={propValue} />);
