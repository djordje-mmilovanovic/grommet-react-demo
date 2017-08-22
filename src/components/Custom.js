import React from "react";
import WorldMap from 'grommet/components/WorldMap';

export default class MyForm extends React.Component {
  render(){
    return(
      <div className='backgroundColor'>
      <WorldMap series={[{
        "continent": "NorthAmerica",
        "label": "North America",
        "colorIndex": "graph-1",
        }, {
        "continent": "SouthAmerica",
        "label": "South America",
        "colorIndex": "accent-2",
        }, {
        "continent": "Europe",
        "label": "Europe",
        "colorIndex": "unset",
        }, {
        "continent": "Africa",
        "label": "Africa",
        "colorIndex": "graph-2",
        }, {
        "continent": "Asia",
        "label": "Asia",
        "colorIndex": "graph-3",
        // "onClick": "..."
        }, {
        "continent": "Australia",
        "label": "Australia",
        "colorIndex": "graph-4",
        // "onClick": "..."
        }]}
      colorIndex='' />
      </div>

    );
  }
}
