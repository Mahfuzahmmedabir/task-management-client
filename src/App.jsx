
import './App.css';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function App() {

  const handellogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        alert('hi');
        console.log(result.user);
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        alert(errorMessage);
      });

  };

  return (
    <div>
      <form onSubmit={handellogin}>
        <input name="email" type="email" placeholder="name" />
        <input name="password" type="password" placeholder="password" />
        <input type="submit" placeholder="submit" />
      </form>
    </div>
  );
}

export default App;
