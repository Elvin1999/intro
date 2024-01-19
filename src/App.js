import { Container, Row ,Col} from 'reactstrap';
import './App.css';
import CategoryList from './CategoryList';
import Func from './Func';
import Navi from './Navi';
import ProductList from './ProductList';
import ToDo from './ToDo';

// function App() {
//   return (
//     <div className="App">
//       <Navi></Navi>
//       <h3>Hello React App</h3>
//       <div style={{display:"flex"}}>
//         <CategoryList total="10" myinfo="SpecialCategory" ></CategoryList>
//         <ProductList ></ProductList>
//       </div>
//       <Func></Func>
//     </div>
//   );
// }



function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Navi></Navi>
          <Func></Func>
        </Row>
        <Row>
          <Col xs="3">
            <CategoryList title="Category List Component"></CategoryList>
          </Col>
          <Col xs="9">
            <ProductList title="Product List Component"></ProductList>
            <ToDo></ToDo>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App;
