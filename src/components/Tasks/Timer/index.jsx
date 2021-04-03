import './index.scss';

function Timer() {
  return (
    <div className="Timer">
      <button>Start</button>
      <button>Stop and Reset</button>

      <div className="seconds">0</div>
    </div>
  );
}

export default Timer;
