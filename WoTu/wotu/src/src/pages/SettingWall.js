import React, { Component } from 'react'
import '../css/SettingWall.css'
import {Icon,Row,Col,Upload, message} from "antd";
import axios from 'axios';


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
            list3:[]
        }
    }
    async componentDidMount(){
      let {data:{data}} = await axios.get("http://localhost:8011/goods/find1");
      this.setState({
          list3:data
      })
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
                {
                  this.state.list3.map(item=>{
                    return <div className="set-main-one" key={item.text}>
                    <div className="set-main-top-text">
                  <span>{item.text}</span><span>查看更多></span>
                    </div>
                    <div className="set-main-top-img">
                       <div className="set-main-top-img-one">
                          <img src={require('../img'+item.img)} />
                  <p>{item.title}</p>
                      </div>
                      <div className="set-main-top-img-one1">
                      <img src={require('../img'+item.img1)} />
                  <p>{item.title1}</p>
                      </div>
                    </div>
                </div>
                  })
                }


              
                
            </div>
        )
    }
}
export default SettingWall;
