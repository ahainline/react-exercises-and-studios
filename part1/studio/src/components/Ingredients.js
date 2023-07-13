import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
    const ingredients = [
        '1 cup salted butter',
        '1 and 2/3 cups granulated sugar',
        '2 large eggs',
        '2 teaspoons vanilla extract',
        '3 and 1/2 cups all-purpose flour'
    ];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientsList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    )
}