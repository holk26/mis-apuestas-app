import Dashboard from './Dashboard';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

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
                    <div>Statistics</div>
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                    <Dashboard />
                </Tab>  
                </Tabs>  
        
        </>
    );
}

export default ColRight;