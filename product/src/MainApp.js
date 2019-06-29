import * as React from 'react';
import { Route, HashRouter as Router} from 'react-router-dom';
import App from './App';
import Details from './Details';

class MainApp extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.onInit("Main Product component initialized");
    }

    render() {
        return (
            <div>                
                <Router>
                    <div>
                        <Route exact path="/product" component={App} />
                        <Route path="/product/details" component={Details} />
                    </div>
                </Router>
            </div>
        );
    }

}
export default MainApp;