import React,{Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';

class jumbotron extends Component{
    render(){
         return (
            <div>
                <Jumbotron>
                     <h1>Hello, world!</h1>
                     <p>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                     <p>
                     <Button color="primary">Learn More</Button>
                     </p>
                </Jumbotron>
            </div>
      );
    }
};

export default jumbotron;