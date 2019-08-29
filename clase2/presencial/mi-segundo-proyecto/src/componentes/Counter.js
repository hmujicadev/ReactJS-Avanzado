import React from 'react';
import './Counter.css';

import {increment, decrement, incrementAsync, decrementAsync} from '../state/actions'

import { connect } from 'react-redux'


class Counter extends React.Component {

    state = {
    }

    componentDidMount() {
    
    }

    render() {
        return (
            <div className="Counter">
                <div className="container">
                    <div className="jumbotron my-3">
                        <h1>Contador {this.props.counter} </h1>
                        <div className="my-5"></div>
                        <button className="btn btn-success m5" onClick={this.props.decrement}>-</button> 
                        <button className="btn btn-success" onClick={this.props.increment}>+</button> 
                        <br></br>
                        <button className="btn btn-warning m5" onClick={this.props.decrementAsync}>-</button> 
                        <button className="btn btn-warning" onClick={this.props.incrementAsync}>+</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    counter : state.counter
})
const mapDispatchToProps = dispatch => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    incrementAsync: () => dispatch(incrementAsync()),
    decrementAsync: () => dispatch(decrementAsync())
})

export default connect(mapStateToProps, mapDispatchToProps )(Counter);
