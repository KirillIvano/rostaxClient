import React from 'react';
import styles from './styles.less';
import MapFrame from './../MapFrame';
import ContactsContent from '../ContactsContent';

class Contacts extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            frameWidth: '100%',
        };
    }

    setCurrentScreenWidth = () => {
        const screenWidth = window.innerWidth;

        this.setState({
            frameWidth: screenWidth < 700 ? '100%' : '50%',
        });
    }

    componentDidMount() {
        this.setCurrentScreenWidth();
        window.addEventListener('resize', this.setCurrentScreenWidth);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.setCurrentScreenWidth);
    }

    render() {
        return (
            <div className={styles.contentSection}>
                <MapFrame width={this.state.frameWidth} />
                <ContactsContent />
            </div>
        );
    }
};

export default Contacts;
