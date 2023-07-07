export default function BookList() {
   let pageTitle = "New Releases to Read";
   let book1 = "https://images.booksense.com/images/536/693/9781683693536.jpg";
   let book2 = "https://images.booksense.com/images/675/899/9781250899675.jpg";
   let book3 = "https://images.booksense.com/images/074/079/9780744079074.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Goblin Mode: How to get cozy, embrace imperfection, and thrive in the muck by McKayla Coyle" />
         <img src={book2} alt="The Frugal Wizard's Handbook for Surviving Medieval England by Brandon Sanderson" />
         <img src={book3} alt="Safe and Sound: A renter-friendly guide to home repair by Mercury Stardust" />
      </div>      
   );
}