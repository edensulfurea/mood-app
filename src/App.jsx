import { useState } from 'react';
import happyBg from './assets/photo/happy.jpg';
import angryBg from './assets/photo/angry.jpg';
import sadBg from './assets/photo/sad.jpg';
import excitedBg from './assets/photo/excited.jpg';
import depressedBg from './assets/photo/depressed.jpg';

function App() {
  const [mood , setMood]= useState(""); 
  const [text, setText] = useState(""); 
  const moods= {
    happy: happyBg,
    sad: sadBg,
    angry: angryBg,
    excited: excitedBg,
    depressed: depressedBg
  };
 
  return (
    
      <div
      style= {{
        height: "100vh",
        backgroundImage: mood? `url(${moods[mood]})`: 'none',
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <h1>Choose your Mood...</h1>
        <h2>How are you feeling today? {mood}</h2>
        <button onClick={()=> setMood("happy" )}>Happy</button>
          <button onClick={()=> setMood("sad")}>Sad</button>
          <button onClick={()=> setMood("angry")}>Angry</button>
            <button onClick={()=> setMood("excited")}>Excited</button>
              <button onClick={()=> setMood("depressed")}>Depressed</button>
              
                    <div style={{ marginTop: "20px" }}>
        <textarea
          placeholder="What happened today?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          cols={40}
        />
      

      <p> {text}</p>

    
      </div>
      </div>
    );
};

export default App
