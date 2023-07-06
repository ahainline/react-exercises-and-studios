import classes from './ChoresList.module.css';

export default function ChoresList () {
   return <div>
      <h3 className={classes.choresHeading}>Chores To Do</h3>
      <ul className={classes.choresText}>
         <li>Laundry</li>
         <li>Dishes</li>
      </ul>
   </div>;
}