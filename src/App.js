import React, {Component} from  "react";
import Form from "./Component/Form/formEditor";
import {connect} from "react-redux"
import ListContact from "./Component/ContactList/ListContact";
import Filter from "./Component/Filter/Filter";
import operationContact from "./redux/operationContacts";
import contactSelector from "./redux/contactSelector"



class App extends Component{

  componentDidMount(){
    
    this.props.onFetchContact()
  }
  render(){
    return (
      <div className="App">
        {this.props.isLoadingContacts && <h1>LOADING ...</h1>}
        <Form />
        <Filter />
        <ListContact />
      </div>
    );

  }
  
    

  
  
}
const mapStateToProps = state => ({
isLoadingContacts: contactSelector.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
  onFetchContact:() => dispatch(operationContact.fetchContacts()) ,
});



export default connect(mapStateToProps,mapDispatchToProps)(App);
