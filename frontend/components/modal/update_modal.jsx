import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import EditPostContainer from '../song/edit_song_container'
import { withRouter } from 'react-router-dom'

function updateModal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal) {
        case 'editpost':
            component = <EditPostContainer />;
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background-edit" onClick={closeModal}>
            <div onClick={closeModal} className="close-x">X</div>
            <div className="modal-child-edit" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(updateModal));
