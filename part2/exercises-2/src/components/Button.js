import './styles.css';

function Button() {
   const onLearnMore = () => {
      alert('Did you know that all dolphins are whales, but not all whales are dolphins?')
   };
   return ( 
         <button onClick={onLearnMore}>
            Learn More
         </button>
   );
}

export default Button;