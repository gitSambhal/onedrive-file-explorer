import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { onedriveService } from '../services/onedrive.service.ts';
import { toDate } from '../helpers/index.js';

export const SingleFile = ({}) => {
  const [permissions, setPermissions] = useState([]);
  const [intervalId, setIntervalId] = useState(0);
  const location = useLocation();
  console.log({ location });
  const { item } = location.state;

  useEffect(() => {
    const id = setInterval(() => {
      onedriveService.getItemPermissions(item.id).then(({ data }) => {
        console.log(data);
        setPermissions(data.value);
      });
    }, 5000);
    setIntervalId(id);

    // clear interval on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <p>{item.name}</p>
      <div>
        <div className="img-container">
          {item.thumbnails?.map((img) => (
            <img className="" src={img['large']?.url} />
          ))}
        </div>
      </div>
      <div>
        <a href={item['@microsoft.graph.downloadUrl']} target="_blank">
          Download File
        </a>
        <a href={item.webUrl} target="_blank">
          Open File
        </a>
      </div>
      <div>
        <div>
          Created by: <strong>{item.createdBy.user?.displayName}</strong> at{' '}
          {toDate(item.createdDateTime)}
        </div>
        <div>
          Last modified by:{' '}
          <strong>{item.lastModifiedBy.user?.displayName}</strong> at{' '}
          {toDate(item.lastModifiedDateTime)}
        </div>
      </div>
      <div>
        {!!permissions.length && <div>Shared with</div>}

        {permissions.map((v: any) => {
          return (
            <li key={v.id}>
              {v.grantedTo?.user?.displayName} {v.grantedTo?.user?.email}
            </li>
          );
        })}
      </div>
    </div>
  );
};
