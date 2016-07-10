import React from 'react';

class GenderList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'GenderList';
        this.state = {
					data: [
	        	{ employer: 'BMW Group', Female: 1, Male: 1, difference: 0 },
	        	{ employer: 'Audi', Female: 2, Male: 3, difference: 1 },
	        	{ employer: 'Porsche', Female: 3, Male: 9, difference: 6 },
	        	{ employer: 'Google', Female: 4, Male: 3, difference: 1 },
	        ]        	
        }
    }
    render() {
    		let itemList = this.state.data.map((item, i) => {
    			return(
	        	<div 
	        		key={item.employer} 
	        		className="table-row">
	        		{item.employer}
	        	</div>
  				)
    		});
        return (
        	<div>
        		{itemList}
        	</div>
      	)
    }
}

export default GenderList;
