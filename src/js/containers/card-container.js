import React from 'react';

class CardContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
	        <div ref={this.props.cardName} className="card-container card-column">
	        	{this.props.children}
	      	</div>
      	);
    }
}

CardContainer.propTypes = {
  cardName: React.PropTypes.string
}

CardContainer.defaultProps = {
  cardName: 'default-card'
}

export default CardContainer;
