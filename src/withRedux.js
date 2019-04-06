import React, { Component } from 'react';
import { store } from './store';

export const withRedux = (DecoratedComponent) => {
    return class extends Component {
        state = {}

        componentDidMount() {
            this.setState(store.getState());

            this.subscription = store.subscribe(state => {
                this.setState(store.getState());
            })
        }

        componentWillUnmount() {
            this.subscription();
        }
        
        render() {
            return <DecoratedComponent state={this.state} />
        }
    }
}
