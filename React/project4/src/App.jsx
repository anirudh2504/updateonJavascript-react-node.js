import Player from './components/Player.jsx';
import StopWatch from './components/Stopwatch.jsx';
import TimerChallenges from './components/TimerChallenges.jsx';

function App() {
  return (
    <>
      <Player />

      

      <div id="challenges">
        
        <TimerChallenges title="Easy" targetTime={1}/>
        <TimerChallenges title="Normal" targetTime={3}/>
        <TimerChallenges title="Hard" targetTime={10}/>
        <TimerChallenges title="Very Hard" targetTime={15}/>

      </div>
    
   
     
    </>
  );
}

export default App;
