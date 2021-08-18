import "./style.scss";

interface Props {
  textContent: string;
  onClick: () => void;
}

const PrimaryButton = ({ textContent, onClick }: Props) => {
  return (
    <button className="primary-button" onClick={() => onClick()}>
      {textContent}
    </button>
  );
};

export default PrimaryButton;
