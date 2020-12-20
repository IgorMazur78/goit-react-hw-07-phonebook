import React from "react";
import Form from "./Component/Form/formEditor";
import {connect} from "react-redux"
import ListContact from "./Component/ContactList/ListContact";
import Filter from "./Component/Filter/Filter";
import operationContact from "./redux/operationContacts";
import contactSelector from "./redux/contactSelector"



function App ({isLoadingContacts}){

  // componentDidMount(){
    
  //   this.props.onFetchContact()
  // }
  
  
    return (
      <div className="App">
        {isLoadingContacts && <h1>LOADING ...</h1>}
        <Form />
        <Filter />
        <ListContact />
      </div>
    );

  
  
}
const mapStateToProps = state => ({
isLoadingContacts: contactSelector.getLoading(state),
})

const mapDispatchToProps = {
  onFetchContact: operationContact.fetchContacts,
  
};



export default connect(mapStateToProps,mapDispatchToProps)(App);
