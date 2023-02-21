import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import InvoiceForm from './components/InvoiceForm';
import { Component } from 'react';

class App extends Component{
  render() {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <InvoiceForm  />
      </Container>
      Invoice
    </div>
  );
  }
}

export default App;
