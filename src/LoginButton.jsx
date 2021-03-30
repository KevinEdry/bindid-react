import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as BindIDSVG} from './images/bindid.svg';

export default class LoginButton extends Component{
    constructor(props){
        super(props);
    }

    handleClick = () => {
        const {
            options,
            onError,
            onCompleted
        } = this.props;

        window.XmBindId.authenticate(options).then(res => {
            onCompleted(res);
        }, err => {
            onError(err);
        })
    }

    render(){
        let loading = false;
        const {
            style,
            className,
            children
        } = this.props;

        const defaultStyle = {
            cursor: 'pointer',
            width: '100%',
            maxWidth: '250px',
            fontSize: '14px',
            fontWeight: '600',
            color: '#1c2745',
            borderRadius: '4px',
            boxShadow: '0 2px 8px 0 rgb(28 39 69 / 8%), 0 -2px 8px 0 rgb(28 39 69 / 8%)',
            border: 'solid 1px rgba(28, 39, 69, 0.37)',
            backgroundColor: '#ffffff',
            minHeight: '32px',
            lineHeight: '2.30769231',
            padding: '0 12px',
        }

        const defaultButton = () =>{
            return (
                <React.Fragment>
                    <BindIDSVG style={{
                        marginRight: '5px',
                        marginBottom: '-4px',
                    }}/>
                    <div style={{display:'inline'}}>Login with BindID</div>
                </React.Fragment>
            )
        }

        return(
            <button className={className} style={style ? style : defaultStyle} onClick={this.handleClick} disabled={loading}>
                { children || defaultButton() }
            </button>
        )
    }
}

LoginButton.propTypes = {
    options: PropTypes.shape({
        redirectUri: PropTypes.string.isRequired,
        scope: PropTypes.array,
        verifications: PropTypes.array,
        otherLoginOptions: PropTypes.exact({
            title: PropTypes.string.isRequireds,
            url: PropTypes.string.isRequired
        }),
        customMessage: PropTypes.string
    }).isRequired,
    onCompleted: PropTypes.func,
    onError: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any,
}