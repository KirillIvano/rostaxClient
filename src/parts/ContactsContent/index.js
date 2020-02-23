import React from 'react';
import styles from './styles.less';
import {Element} from 'react-scroll';

const ContactsContent = () => (
    <Element name={'contacts'}>
        <div className={styles.content}>
            <h1>
                КОНТАКТЫ
            </h1>
            <h2 className={styles.important}>
                ПОЗВОНИТЕ НАМ!
            </h2>
            <ul>
                <li>
                    8(499) 550-23-53
                </li>
                <li>
                    8(495) 972-28-24
                </li>
                <li>
                    8(495) 778-13-93
                </li>
            </ul>
            <h2 className={styles.important}>
                НАПИШИТЕ!
            </h2>
            <ul>
                <li>
                    rostax@mail.ru
                </li>
            </ul>
            <h2 className={styles.important}>
                ИЛИ ПРИХОДИТЕ!
            </h2>
            <ul>
                <li>
                    Московская обл., г. Реутов, ул. Никольская, д.3
                </li>
                <li>
                    Мы работаем ежедневно с 8:00 до 17:00
                </li>
                <li>
                    Перерыв с 12-00 до 13-00.
                </li>
                <li>
                    Выходные суббота, воскресенье.
                </li>
            </ul>
        </div>
    </Element>
);

export default ContactsContent;
