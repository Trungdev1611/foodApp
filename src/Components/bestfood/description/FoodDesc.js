import React from 'react';
import './foodDesc.scss';
const FoodDesc = () => {
  return (
    <div className='fooddesc'>
      <div className="desc">
        Although the legendary Double Burger really needs no introduction, please allow us… Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!
      </div>
      <table className='tabledesc'>
        <tbody>
          <tr>
            <td><h4>Best Foods</h4><p>28 cm size</p></td>
            <td> <h4>24</h4><p>28 cm size</p></td>
            <td><h4>728</h4><p>Energy</p> </td>
            <td> <h4>1054</h4><p>Calo</p></td>
            <td> <h4>68</h4><p>Fat</p></td>
            <td> <h4>25</h4><p>Gluxit</p></td>
            <td> <h4>548</h4><p>Protein</p></td>
          </tr>
          <tr>
            <td><h4>Ingredients</h4></td>
            <td> <p>Egg</p></td>
            <td><p>Milk Protein</p> </td>
            <td> <p>Sesame</p></td>
            <td> <p>Lascote</p></td>
            <td> <p>Gluten</p></td>
            <td> <p>Mustard</p></td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default FoodDesc