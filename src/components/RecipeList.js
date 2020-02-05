import React from 'react'
import Recipe from './Recipe'

export default function RecipeList({recipes}) {//DECONSTRUCTED 
    return (
        //Render JSX
        <div>
            {recipes.map(recipe => {
                return <Recipe 
                key={recipe.id} 
                {...recipe}/>//always add key to each value
            })}
        </div>

        // <>
        // <Recipe/>

        // <Recipe/>
            
        // </>

    )
}
