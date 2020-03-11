import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Auxiliary from '../Auxiliary/Auxiliary'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state ={
            error:null
        }
        componentDidMount () {
            axios.interceptors.response.use(null, error => {
                this.setState({error: error})
            })
        }
        render () {
            return (
                <Auxiliary>
                <Modal show>
                    Something didnt work!
                </Modal>
            <WrappedComponent {...this.props}/>
            </Auxiliary>
        );
        }
        }
   
    }


export default withErrorHandler;