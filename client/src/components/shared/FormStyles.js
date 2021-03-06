
const div = {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: 20,
    }
const loaderOptions = {
        position: 'fixed',
        top: '20%',
        left: '50%',
}
const paper = {
       width: '90%',
       minHeight: 200,
       padding: 30,
       backgroundColor: '#bbb',
    }
const textField = {
        width: "100%",
        flex: '1 0 100%',
        alignSelf: 'center',
        justifyContent: 'center'
    }
const loginField = {
        ...textField,
        marginTop: '10%',
    }
const button = {
        display: 'inline-block',
        width: '100%',
        marginTop: 20,
        marginBottom: 10
    }

const loginButtonLabel = {
      color: 'white',
      fontWeight: 550
}

const styles = {
    div,
    paper,
    loginButtonLabel,
    textField,
    loginField,
    loaderOptions,
    button
}

export default styles
