function createTextAction(text){
    return {
        type: "text/changed",
        text
    };
}

function createViewAction(){
    return {
        type: "viewMode/changed",
    };
}

function mapStateTextToProps(state) {
    return {text: state.text};
}

function mapStateViewToProps(state) {
    return {viewMode: state.viewMode};
}

function mapDispatchTextToProps(dispatch) {
    return {
        changeText: (event) => dispatch(createTextAction(event.target.value))
    };
}

function mapDispatchViewToProps(dispatch) {
    return {
        changeView: () => dispatch(createViewAction())
    };
}


export { mapStateTextToProps, mapStateViewToProps,
         mapDispatchTextToProps, mapDispatchViewToProps };