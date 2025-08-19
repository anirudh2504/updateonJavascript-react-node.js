export default function ResultModel({result,targetTime})
{
    return(
      <dialog className="result-modal" open>
        <h2>you {result}</h2>
        <p>The Target time was <strong>{targetTime} seconds</strong></p>
       
        <form method="dialog">
            <button>Close</button>
        </form>
      </dialog>
    );
}