import React from 'react';

class GenderList extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'GenderList';
        this.state = {
            desc: true,
            data: [{
                employer: 'BMW Group',
                female: 1,
                male: 1,
                difference: 0
            }, {
                employer: 'Audi',
                female: 2,
                male: 3,
                difference: 1
            }, {
                employer: 'Volkswagen',
                female: 5,
                male: 4,
                difference: 1
            }, {
                employer: 'Porsche',
                female: 3,
                male: 9,
                difference: 6
            }, {
                employer: 'Google',
                female: 4,
                male: 3,
                difference: 1
            }, {
                employer: 'Sony',
                female: 32,
                male: 25,
                difference: 7
            }, ]
        }
        this.toggleSort = this.toggleSort.bind(this)
    }
    componentDidUpdate() {
        console.log('sorted!')
    }
    processSort() {
        console.log(this.state.desc)
        let sorted;
        switch (this.state.desc) {
            case false:
                sorted = this.state.data.sort((a, b) => {
                    return a.female > b.female
                })
                this.setState({
                    data: sorted
                })
                console.log('asc')
                break;
            case true:
                sorted = this.state.data.sort((a, b) => {
                    return a.female < b.female
                })
                this.setState({
                    data: sorted
                })
                console.log('desc')
                break;
        }
    }
    toggleSort(e) {
        this.setState({
            desc: !this.state.desc
        })
        this.processSort();
    }
    render() {
        let itemList = this.state.data.map((item, i) => {
            return ( < tr key = {
                    item.employer
                }
                className = "table-row" >
                < td > {
                    item.employer
                } < /td>
		        		<td>{item.female}</td >
                < td > {
                    item.male
                } < /td>	        		
		        		<td> </td >
                < td > {
                    item.male
                } < /td>	        		
    	        	</tr >
            )
        });
        return ( < table >
                < tbody >
                < tr >
                < th > Employer < /th>
            			<th>Female 
            				<span 
            					className="glyphicon glyphicon-chevron-down"
                                data-filter="female"
            					onClick={this.toggleSort}></span >
                < /th>
            			<th>Male</th >
                < th > < /th>
            			<th>Difference</th >
                < /tr>
            		{itemList}
                </tbody >
                < /table>
      	)
    }
}

export default GenderList;