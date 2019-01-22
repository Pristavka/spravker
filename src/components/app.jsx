// @flow
import React, { Component, StrictMode } from 'react';
import { connect } from 'react-redux';
import { getAllCompaniesFromApiAction } from 'actions';

import styles from './app.scss';

type Props = {
    getAllCompaniesFromApi: () => void
}

@connect(null, {
    getAllCompaniesFromApi: getAllCompaniesFromApiAction
})
export default class App extends Component<Props> {
    componentDidMount() {
        const { getAllCompaniesFromApi } = this.props;
        getAllCompaniesFromApi();
    }

    render() {
        return (
            <StrictMode>
                <div className={styles.wrapper}>
                    <h1>Hello Siarhei Prystauka!!!</h1>
                </div>
            </StrictMode>
        );
    }
}
