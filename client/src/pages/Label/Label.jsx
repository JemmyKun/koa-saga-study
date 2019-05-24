import React, { Component } from 'react';
import './label.scss';
import AddLabel from './AddLabel';
import LabelListView from './LabelListView';
import { connect } from 'react-redux';
import { ADD_LABEL, DELETE_LABEL, GET_LABEL_LIST, UPDATE_LABEL_TITLE, UPDATE_LABEL_STATUS }
    from '../../actions/actionTypes';
import { getSagaType } from '../../utils/sagaType';

class Label extends Component {
    componentDidMount() {
        let type = getSagaType(GET_LABEL_LIST);
        this.props.dispatch({ type });
    }
    render() {
        let { labelReducer, dispatch } = this.props;
        return (
            <div className="label-container">
                <AddLabel />
                <LabelListView labelReducer={labelReducer} dispatch={dispatch} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    labelReducer: state.labelReducer
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    dispatch: action => dispatch(action)
})

export default connect(mapStateToProps, mapDispatchToProps)(Label);