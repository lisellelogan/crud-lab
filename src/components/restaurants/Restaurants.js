import React, { Component } from 'react';
import Restaurant from './Restaurant';

class Restaurants extends Component {

  render() {
    const {deleteRestaurant, restaurants} = this.props;
    const restaurantList = restaurants.map(
      restaurant => <Restaurant key={restaurant.id} restaurant={restaurant} deleteRestaurant={deleteRestaurant}/>
      )

    return(
      <ul>
        { restaurantList }
      </ul>
    );
    
  }
};

export default Restaurants;