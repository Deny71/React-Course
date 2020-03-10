import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Auxiliary from '../Auxiliary/Auxiliary'

const withErrorHandler = (WrappedComponent) => {
    return (props) => {
        return (
            <Auxiliary>
                <Modal show>
                    Something didnt work!
                </Modal>
            <WrappedComponent {...props}/>
            </Auxiliary>
        );
    }
}

export default withErrorHandler;