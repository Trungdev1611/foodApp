import React from 'react';
import './foodDesc.scss';
const FoodDesc = () => {
  return (
    <div className='fooddesc'>
      <div className="desc">
        Although the legendary Double Burger really needs no introduction, please allow us… Tucked in between three soft buns are two all-beef patties, cheddar cheese, ketchup, onion, pickles and iceberg lettuce. Hesburger’s own paprika and cucumber mayonnaise add the crowning touch. Oh baby!
      </div>
      <table className='tabledesc'>
        <tbody  >
          <tr className='tabledesc-row'>
            <td className='tabledesc-cell'><h4 className='tabledesc-cell__heading'>Best Foods</h4><p>28 cm size</p></td>
            <td className='tabledesc-cell'> <h4 className='tabledesc-cell__heading'>24</h4><p>28 cm size</p></td>
            <td className='tabledesc-cell'><h4 className='tabledesc-cell__heading'>728</h4><p>Energy</p> </td>
            <td className='tabledesc-cell'> <h4 className='tabledesc-cell__heading'>1054</h4><p>Calo</p></td>
            <td className='tabledesc-cell'> <h4 className='tabledesc-cell__heading'>68</h4><p>Fat</p></td>
            <td className='tabledesc-cell'> <h4 className='tabledesc-cell__heading'>25</h4><p>Gluxit</p></td>
            <td className='tabledesc-cell'> <h4 className='tabledesc-cell__heading'>548</h4><p>Protein</p></td>
          </tr>
          <tr className='tabledesc-row'>
            <td className='tabledesc-cell'><h4 className='tabledesc-cell__heading'>Ingredients</h4></td>
            <td className='tabledesc-cell'> <p>Egg</p></td>
            <td className='tabledesc-cell'><p>Milk Protein</p> </td>
            <td className='tabledesc-cell'> <p>Sesame</p></td>
            <td className='tabledesc-cell'> <p>Lascote</p></td>
            <td className='tabledesc-cell'> <p>Gluten</p></td>
            <td className='tabledesc-cell'> <p>Mustard</p></td>
          </tr>

        </tbody>
      </table>
    </div>
  )
}

export default FoodDesc