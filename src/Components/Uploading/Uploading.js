import React, { useState } from 'react';
import ImageUploading from 'react-images-uploading';
import img1 from '../Images/download.png'
const Upload = ({ setOpen, images1, setImages1 }) => {
  const [images, setImages] = React.useState([]);
  const [value, setValue] = useState('')
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          // isDragging,
          // dragProps,
        }) => (

          <div className="upload__image-wrapper">
            {images.length === 0 ? (<div
              //  style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
            // {...dragProps}
            >
              <img src={img1} style={{ width: '300px', height: '300px' }} />
              &nbsp;
            </div>
            ) :
              imageList.map((image, index) => (
                <div key={index} className="image-item">
                  <img src={image['data_url']} alt="" width="300px" height='300px' />
                </div>
              ))
            }
            <input type='text' value={value} onChange={(e) => {
              setValue(e.target.value)
            }} />
            <button onClick={() => {
              {
                if (value.trim()) {
                  setImages1([...images1, { ...images, value }])
                  setOpen(false)
                }
              }
            }}>Add</button>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
export default Upload