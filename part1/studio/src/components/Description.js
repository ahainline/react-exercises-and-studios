import React from 'react';
import styles from './Description.module.css';

function RecipeAuthor() {
    const authorLink = 'https://thefoodcharlatan.com/';
    const authorPhoto = 'https://thefoodcharlatan.com/wp-content/uploads/2023/01/headshot-2023.jpg';
    const authorName = 'Karen at The Food Charlatan';
  return (
    <div className = {styles.recipeAuthorBlock}>
        <img src={authorPhoto} alt='Photo of Karen' className={styles.authorPhoto} />
        <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>The Food Charlatan</a>
        </div>
    </div>
  );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>The BEST Cinnamon Cookie Recipe</h1>
                    <p>These soft Cinnamon Roll Cookies are a cinnamon-lover’s dream come true! Take some cinnamon roll filling, swirl it into some Snickerdoodle dough, dunk it in more cinnamon-sugar, then die and go to heaven. This Cinnamon Cookie recipe is easy and so delicious! Originally published September 25, 2021. </p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;