import React, { FC, useState } from 'react';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { UploadFile } from 'antd/lib/upload/interface';

const UploadImage: FC<{}> = () => {
  const [fileList, setFileList] = useState<UploadFile[]>([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
  ]);
  const onChange = ({ fileList }: { fileList: UploadFile[] }) => {
    setFileList(fileList);
  };

  const onPreview = async (file: UploadFile) => {
    // 不排除恶意bug的可能性
    let src = file.url as string;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj!);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <ImgCrop rotate>
      <Upload
        // TODO: mock地址切换
        action="https://run.mocky.io/v3/842f8049-2bc8-4358-8529-931713f7b9ed"
        accept="image/*"
        listType="picture-card"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 5 && '+ Upload'}
      </Upload>
    </ImgCrop>
  );
};

export default UploadImage;
