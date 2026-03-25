import { useState, useEffect } from 'react';
import happyBg from './assets/photo/happy.jpg';
import angryBg from './assets/photo/angry.jpg';
import sadBg from './assets/photo/sad.jpg';
import excitedBg from './assets/photo/excited.jpg';
import depressedBg from './assets/photo/depressed.jpg';

function App() {
  const [mood , setMood]= useState(""); 
  const [text, setText] = useState(""); 
  const [date, setDate] = useState(""); 
  const [entries, setEntries] = useState([]);
  const saveEntry = () => {
  const newEntry = {
    mood,
    text,
    date
  };

  const updated = [...entries, newEntry];

  setEntries(updated);

  localStorage.setItem("moodEntries", JSON.stringify(updated));
};
  const today = new Date().toLocaleDateString();
  const moods= {
    happy: happyBg,
    sad: sadBg,
    angry: angryBg,
    excited: excitedBg,
    depressed: depressedBg
  };
  useEffect(() => {
  const saved = localStorage.getItem("moodEntries");

  if (saved) {
    setEntries(JSON.parse(saved));
  }
}, []);
 
  return (
    
      <div
      style={{
  height: "100vh",
  background: mood
    ? `url(${moods[mood]}) center/cover no-repeat`
    : "linear-gradient(to right, #667eea, #764ba2)"
}}>
        <h1>Choose your Mood...</h1>
        <h2>How are you feeling today? {mood}</h2>
        <h3>{today}</h3>
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
      <input
  type="date"
  value={date}
  onChange={(e) => setDate(e.target.value)}
/>
<button onClick={saveEntry}>
  Save mood
</button>
<h3>Diary</h3>

{entries.map((e, i) => (
  <div key={i}>
    <p>{e.date}</p>
    <p>{e.mood}</p>
    <p>{e.text}</p>
  </div>
))}
    
      </div>
      </div>
    );
};

export default App
