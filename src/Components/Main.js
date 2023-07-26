import 'split-pane-react/esm/themes/default.css'
import { Col, Container, Row } from 'react-bootstrap';
import Host from '../Pages/Host';
import Server from '../Pages/Server';

function Main () {


    return (
      <Container>
        <Row>
           <Col md={4} className='p-0'>
          <Host/>
          </Col>
           <Col md={4} className='p-0'>
          <Server/>
          </Col>
           <Col md={4} className='p-0'>
          s
          </Col>
        </Row>
      </Container>
    );
};

export default Main