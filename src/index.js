import React from 'react';
import ReactDOM from 'react-dom';
import {Header} from './parts/Header';
import Contacts from './parts/Contacts';
import Footer from './parts/Footer';
// import Popup from './components/Popup';
// import Preloader from './components/Preloader';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import styles from './mainStyle.less';
// import {Provider} from 'react-redux';

// import client from './gc';

import {Main} from './pages/Main';
// import ProductPage from './pages/ProductType/';

const App = () => {
    // isPopupVisible: false,
    // popupContent: '',
    // isPopupPositive: true,
    // isHeaderHidden: false,

    // componentWillUnmount() {
    // 	window.removeEventListener('scroll', this.scrollCallback);
    // }

    // showPopup = (isPositive=true, text='') => {
    // 	this.setState({
    // 		isPopupVisible: true,
    // 		popupContent: text,
    // 		isPopupPositive: isPositive,
    // 	});
    // }

    // closePopup = () => {
    // 	this.setState({
    // 		isPopupVisible: false,
    // 	});
    // };

    return (
        <div className={styles.root}>
            <Header
                hidden={false}
                // showPopup={() => {}}
            />
            <React.Suspense fallback={<Preloader />}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    {/*<Route path="/product_types" component={React.lazy(() => import('./pages/ProductTypes'))} />
					<Route path="/product_details/:productId" component={React.lazy(() => import('./pages/ProductDetails'))} />
					<Route path="/product_type/:id" component={ProductPage} />
                    <Route path="/colors" component={Colors} /> */}
                </Switch>
            </React.Suspense>
            <Contacts />
            <Footer />
            {/* <Popup {...{popupContent, isPopupPositive, isPopupVisible, closePopup}} /> */}
        </div>
    );
};

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'),
);
