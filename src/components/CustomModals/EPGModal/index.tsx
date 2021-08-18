import EPG from '../../EPG'
import './style.scss';

const EPGModal = () => {
    return (
        <div className="epg-modal" >
            <div className="epg-program-detail">
                <h1>INFO PROGRAMA</h1>
            </div>
            <EPG />
        </div>
    )
}

export default EPGModal
