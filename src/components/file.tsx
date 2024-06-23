import { useNavigate } from 'react-router-dom';

export const File = ({ item }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate('/file/' + item.id, {
      state: { item },
    });
  };

  return (
    <div className="item file" key={item.key} onClick={onClick}>
      <div className="nameplate">{item.name}</div>

      <div className="img-container">
        <img className="" src={item.thumbnails?.[0]?.['large']?.url} />
      </div>
    </div>
  );
};
