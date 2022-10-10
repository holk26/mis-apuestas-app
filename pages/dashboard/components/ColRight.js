import Dashboard from './Dashboard';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Estadisticas from './Estadisticas'
const ColRight = () => {
 

    return(
        <>
              <Tabs
                defaultActiveKey="dashboard"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="dashboard" title="Tablero">
                    <Dashboard />
                </Tab>
                <Tab eventKey="statistics" title="Estadisticas">
                    <Estadisticas />
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <div>contact</div>
                </Tab>  
                </Tabs>  
        
        </>
    );
}

export default ColRight;