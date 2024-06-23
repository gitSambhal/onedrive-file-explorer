import { useEffect, useState } from 'react';
import { onedriveService } from '../services/onedrive.service.ts';
import { useLocation } from 'react-router-dom';
import { Folder, File } from './index.js';

export const HomePage = () => {
  const location = useLocation();
  // const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  console.log({ location });
  useEffect(() => {
    // onedriveService.getUserDetails().then(({ data }) => {
    // console.log(data);
    // setName(data.displayName);
    // });
  }, []);
  useEffect(() => {
    const folderId = location.pathname.split('folder/')[1];
    console.log({ folderId });

    if (folderId) {
      // folder path
      onedriveService.getItemChildren(folderId).then(({ data }) => {
        const children = data.children || data.value;
        setItems(children);
      });
    } else {
      // root path
      onedriveService.getRootWithThumbnails().then(({ data }) => {
        const children = data.children || data.value;
        setItems(children);
      });
    }
  }, [location.pathname]);

  return (
    <>
      <ul>
        {items.map((item: any) => {
          if (item.folder) {
            // render folder
            return <Folder key={item.id} item={item} />;
          }
          if (item.file) {
            // render file
            return <File key={item.id} item={item} />;
          }
        })}
      </ul>
    </>
  );
};
