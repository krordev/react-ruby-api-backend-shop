import React, { Component } from 'react';
import Ingredient from './Ingredient'
import { connect } from 'react-redux'
import { fetchIngredients, updateSmoothieIngredients } from '../../actions/smoothieActions.js'


class SmoothieCreator extends Component {
    
    state = { smoothieIngredients: [] }

    componentDidMount() {
        this.props.fetchIngredients()
    }

    renderIngredients = () => {
        return this.props.ingredients.map((ingredient) => (
            <div key={ingredient.id} >
                <label htmlFor={ingredient.id} ><Ingredient ingredient={ingredient} key={ingredient.id} /></label>
                <input type="checkbox" id={ingredient.id} value={ingredient.id} name={ingredient.id} onChange={this.handleSelectionChange} /><br></br>
            </div>
        ))
    }

    handleSelectionChange = (e) => {
        let addedIng = this.props.ingredients.find( ing => `${ing.id}` === e.target.value )
        console.log('added', addedIng)
        this.setState( prevState => ({
            smoothieIngredients: [...prevState.smoothieIngredients, addedIng]
        }));
        this.props.updateSmoothieIngredients(addedIng)
    }
  
    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   this.props.addRestaurant(this.state.text)
    //   this.setState({ text: ''})
    // }

    render() {
        return (
            <div>
                <form onSubmit={(e)=> this.handleSubmit(e)}>
                    <h3>Select Ingredients:</h3>
                    {this.renderIngredients()}

                    <input type="submit" value="Add Smoothie to Cart!" />
                </form>
            </div>
        );
    }
}

export default SmoothieCreator;