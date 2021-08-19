import './style.scss';

interface Props {
    handlePrevClick: () => void,
    handleNextClick: () => void
}

export const EpgControls = ({ handleNextClick, handlePrevClick }:Props) => {
    return (
        <div className="epg-controls" >
            <button onClick={handlePrevClick} >{`<`}</button>
            <button onClick={handleNextClick} >{`>`}</button>
        </div>
    )
}

