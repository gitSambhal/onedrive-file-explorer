import { useNavigate } from 'react-router-dom';

export const Folder = ({ item }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/folder/' + item.id, {
      state: { item },
    });
  };
  return (
    <div className="item folder" key={item.id} onClick={onClick}>
      <div className="nameplate">{item.name}</div>
    </div>
  );
};
