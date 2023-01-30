import React, {useState} from 'react';
import {Row, Col, Space, Popover, Button, List, Avatar} from 'antd'
import './App.css';
import ZoomLogo from './images/Zoom.svg'
import {SettingOutlined} from '@ant-design/icons';
import ExamsForZoomVideo from './media/ExamsForZoom.mp4';
import ExamsForZoomLogo from './images/ExamsForZoom.jpg';
import Thetalake from './media/Thetalake.mp4'
import ZoomWebSDK from './media/Zoom_MeetingSDK.mp4'
import ReactPlayer from 'react-player'
import TribeLogo from './images/Tribe.jpg';
import TeslaLogo from './images/Tesla.png';
import ServiceNowVideo from './media/ServiceNow.mov';
import ServiceNowLogo from './images/ServiceNow.png';
import ZoomIntegrations from './media/ZoomInterop.mp4'
import ZoomDigitalSignage from './media/ZoomDigitalSignage.mp4'
import ZoomVirtualAgent from './media/VirtualAgent.mp4'

const videoData = [
    {id: 0, Title: 'Zoom Integrations', customerName: 'Zoom - Integrations', Logo: ZoomLogo, VideoType: 'File', Video: ZoomIntegrations },
    // {id: 1, Title: 'Exams For Zoom - Video SDK', customerName: 'Exams For Zoom ', Logo: ExamsForZoomLogo, VideoType: 'File', Video: ExamsForZoomVideo },
    {id: 1, Title: 'Exams For Zoom - Video SDK', customerName: 'Exams For Zoom ', Logo: ExamsForZoomLogo, VideoType: 'Web', Video: "https://www.youtube.com/watch?v=XD2wbCjR7Xk" },
    {id: 2, Title: 'Thetalake - API / Webhooks',  customerName: 'Thetalake', Logo: ZoomLogo, VideoType: 'File', Video: Thetalake },
    {id: 3, Title: 'Zoom - Web Meeting SDK',  customerName: 'Zoom - Web Meeting SDK', VideoType: 'File',  Logo: ZoomLogo, Video: ZoomWebSDK },
    {id: 4, Title: 'Tribe - Video SDK',  customerName: 'Tribe', Logo: TribeLogo, VideoType: 'Web', Video: "https://www.youtube.com/watch?v=3DkWZYk5dsw" },
    {id: 5, Title: 'Tesla Zoom Integration',  customerName: 'Tesla', Logo: TeslaLogo, VideoType: 'Web', Video: "https://www.youtube.com/watch?v=lB7e_ZMVsNg" },
    {id: 6, Title: 'Jira Zoom Integration',  customerName: 'Jira', Logo: ZoomLogo, VideoType: 'Web', Video: "https://www.youtube.com/watch?v=JjvqlFrcrU0" },
    {id: 7, Title: 'Service Now Integration',  customerName: 'Service Now', Logo: ServiceNowLogo, VideoType: 'File', Video: ServiceNowVideo },
    {id: 8, Title: 'Zoom Digital Signage',  customerName: 'Zoom - Digital Signage', Logo: ZoomLogo, VideoType: 'File', Video: ZoomDigitalSignage },
    {id: 9, Title: 'Zoom Virtual Agent',  customerName: 'Zoom Virtual Agent', Logo: ZoomLogo, VideoType: 'File', Video: ZoomVirtualAgent },
]


const VideoPlayer = (props) => {
    const [playingVideo, setPlayingVideo] = useState(videoData[0]);
    const [videoIndex, setVideoIndex] = useState(0);


    const settingsContent = (
        <div>
            <List>
            {videoData.map((video) => 
            <List.Item>
               <Button type="link" onClick={() => onSetVideo(video.id)}>{video.customerName}</Button>
            </List.Item>
            )}
            </List>
        </div>
      );

      const onSetVideo = (index) => {
        console.log('Setting Video', index)
        setVideoIndex(index);
        setPlayingVideo(videoData[index]);
    }

    const onVideoCompeleted = () => {
        let nextIndex = videoData.length - 1 === videoIndex ? 0 : videoIndex +1;
        console.log('Next Index is', nextIndex, videoData.length)
        setVideoIndex(nextIndex);
        setPlayingVideo(videoData[nextIndex]);
    }

        return (
    <div class="container">
        <Row>
        <Col span={4}>
        <img src={playingVideo.Logo} alt="Logo" style={{marginTop: '10px', marginLeft: '10px', width:'200px'}} />
        </Col>
        <Col style={{textAlign:'center'}} span={19}>
         <Space>
      
        <h1 style={{marginTop: '10px', color: '#08c', padding: '10px', textAlign:'center'}}>{playingVideo.Title}</h1>
        </Space>
        </Col>
        <Col  span={1}>
        <Popover placement="topLeft" title={'Available Demos'} content={settingsContent}>
        <Button ghost icon={<SettingOutlined style={{ fontSize: '35px', color: '#08c', marginTop: '10px'}}/>}/>
      </Popover>
  
        </Col>
        </Row>
        <Row>
     <div class="centered-element">
        {playingVideo.VideoType  === 'File' ? 
            <video
                    controls
                    width="1280px"
                    height ="720px"
                     src={playingVideo.Video}
                    autoPlay
                    onEnded={onVideoCompeleted}
                    type="video/mp4"
                    />
                          
                :
                <ReactPlayer
                controls
                  width="1280px"
                 height ="720px"
                 playing={true}
                 onEnded={onVideoCompeleted}
                 url={playingVideo.Video} />
            }
            </div>
        </Row>
        </div>
 
        )
}


export default VideoPlayer