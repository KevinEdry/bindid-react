import React, { Component } from 'react';
import canUseDOM from 'can-use-dom';
import PropTypes from 'prop-types';

import BindIDInstance from './BindID';
import BindIDContext from './BindIDContext';

let api = null;

export default class BindID extends Component{
    static defaultProps = {
        wait: false,
        apiCompat: 'latest',
        disableStateValidation: false,
        children: undefined
    }
    constructor(props){
        super(props);

        if(!this.props.clientId){
            throw new Error('[BindID] You need to set a clientId.');
        }
        
        this.state = {
            isReady: false,
        }
    }

    componentDidMount(){
        const { wait } = this.props;
        if(!wait){
            this.handleInit();
        }
    }

    handleInit = async () =>{
        // do not run if SSR
        if (!canUseDOM) {
            throw new Error('[BindID] You can not use BindID without DOM');
        }

        const { isReady } = this.state;
        if (isReady) {
          return api;
        }

        if(!api) {
            const {
                clientId,
                apiCompat,
                disableStateValidation,
                wait
            } = this.props;

            api = new BindIDInstance({
                clientId,
                apiCompat,
                disableStateValidation,
                wait
            });
        }

        await api.init();

        if (!this.state.isReady) {
          this.setState({
            isReady: true,
          });
        }
    
        return api;
    }

    render(){
        const { children } = this.props;
        const { isReady, error } = this.state;
        const { handleInit } = this;

        const value = {
            isReady,
            error,
            handleInit,
            api
        };

        return (
            <BindIDContext.Provider value={value}>
                {children}
            </BindIDContext.Provider>
        )
    }
}

BindID.propTypes = {
    clientId: PropTypes.string.isRequired,
    apiCompat: PropTypes.oneOf(['latest', 'api-level-1']),
    disableStateValidation: PropTypes.bool,
    children: PropTypes.element
}