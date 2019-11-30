import React, { Component } from 'react'
import '../css/SettingWall.css'
import {Icon,Row,Col,Upload, message} from "antd";
// import 'antd'
// import 'antd/dist/antd.css';


function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  function beforeUpload(file) {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
  }

class SettingWall extends Component {
    constructor(props){
        super(props)
        this.state={
            loading:false,
        }
    }
    
    handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };

    render() {

        const uploadButton = (
            <div className="set-all">
              {/* <Icon type={this.state.loading ? 'loading' : ''} /> */}
              {/* <div className="ant-upload-text">Upload</div> */}
            </div>
          );
          const { imageUrl } = this.state;
        return (
            <div className="set-div">
                <div className="set-imgbox">
                    <div className="set-img"></div>
                    <p className="set-p1">45万精美背景素材持续更新</p>
                    <div className="set-unload">
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={this.handleChange}
                        >
                            <Icon type="camera" />
                            <div className="set-p2">
                                <p>以图找图</p>
                                <p>上传图片 搜索相似的背景墙图片</p>
                            </div>
                            <Icon type="right" />
                            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                        </Upload>
                    </div>
                </div>
                <div className="set-clear"></div>
                <div className="set-main-one">
                    <div className="set-main-top-text">
                        <span>电视照片墙</span><span>查看更多></span>
                    </div>
                    <div className="set-main-top-img">
                        <div className="set-main-top-img-one">
                            <img src="https://bpic.wotucdn.com/16/45/51/16455137-2535580d7227bb0c94f54ede5c76c789.jpg!/fw/325/quality/90/unsharp/true/compress/true/canvas/325x480a0a0/format/webp" />
                            <p>简约爵士白大理石艺术...</p>
                        </div>
                        <div className="set-main-top-img-two">
                            <img src="https://bpic.wotucdn.com/16/45/51/16455137-2535580d7227bb0c94f54ede5c76c789.jpg!/fw/325/quality/90/unsharp/true/compress/true/canvas/325x480a0a0/format/webp" />
                            <p>欧式奢华大理石艺术电...</p>
                        </div>
                    </div>
                </div>


              
                
            </div>
        )
    }
}
export default SettingWall;
