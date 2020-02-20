import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Header} from './parts/Header';
import {Contacts} from './parts/Contacts';
import {Footer} from './parts/Footer';
import {Popup} from './components/Popup';

import {Preloader} from './components/Preloader';
import styles from './mainStyle.less';

import {usePopupState} from './hooks/usePopupState';
import client from './gc';
import {ApolloProvider} from '@apollo/react-hooks';
import {Main} from './pages/Main';
// import ProductPage from './pages/ProductType/';

const App = () => {
    const {popupState, invokePopup} = usePopupState();

    return (
        <div className={styles.root}>
            <Header
                hidden={false}
                showPopup={invokePopup}
            />
            <React.Suspense fallback={<Preloader />}>
                <Switch>
                    <Route exact path="/" component={Main} />
                    <Route path="/product_types" component={React.lazy(() => import('./pages/ProductTypes'))} />
                    {/*<Route path="/product_details/:productId" component={React.lazy(() => import('./pages/ProductDetails'))} />
					<Route path="/product_type/:id" component={ProductPage} />
                    <Route path="/colors" component={Colors} /> */}
                </Switch>
            </React.Suspense>
            <Contacts />
            <Footer />
            <Popup {...popupState} />
        </div>
    );
};

ReactDOM.render(
    <BrowserRouter>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
