import ScrambleText from '../scrambletext/scrambletext';
import './counter.scss';

export default function Counter({ currentIndex }){
    const number = currentIndex + 1;

    return(
        <div className='counter'>
            <ScrambleText
                text={`#${number.toString().padStart(2, "0")}`}
                titleClass={'counter__number'}
            />
        </div>
    )
}