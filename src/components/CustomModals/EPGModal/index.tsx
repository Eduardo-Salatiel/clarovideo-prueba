import EPG from '../../EPG'
import EpgProgramDetail from '../../EpgProgramDetail';
import './style.scss';

const EPGModal = () => {
    return (
        <div className="epg-modal" >
            <EpgProgramDetail />
            <EPG />
        </div>
    )
}

export default EPGModal
