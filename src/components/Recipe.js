import React from 'react'

export default function Recipe(props) {//enter props as parameter
    const { //Deconstruct in this structure when there are many variables set equal to props
         name, 
         cookTime, 
         servings, 
         instructions 
    } = props
    
    return (
        <div>
            <div>
            <h3>{name}</h3>
                <div>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            </div>
            <div>
                <span>Cook Time:</span>
                <span>{cookTime}</span>
            </div>
            <div>
                <span>Servings:</span>
                <span>{servings}</span>
            </div>:
            <div>
                <span>Instructions</span>
                <div>
                    {instructions}
                </div>
            </div>
        </div>
    )
}
