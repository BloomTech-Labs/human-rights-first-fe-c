import React from 'react';

const ConsentForm = () => {
  return (
    <div>
      <h2>Graphic Content Warning</h2>
      <p>
        The content found on this web application including but not limited to:
        text, images, and or video, may be considered disturbing to some
        viewers. Please consider this information and decide whether to proceed
        to the website or you may be redirected.
      </p>
      <a href="">
        <button>Continue to Human Rights Considered</button>
      </a>
      <a href="https://www.google.com/">
        <button>Please redirect me from this page</button>
      </a>
    </div>
  );

  // import { Modal, Button } from 'antd';

  // class App extends React.Component {
  //   state = {
  //     ModalText: 'Content of the modal',
  //     visible: false,
  //     confirmLoading: false,
  //   };

  //   showModal = () => {
  //     this.setState({
  //       visible: true,
  //     });
  //   };

  //   handleOk = () => {
  //     this.setState({
  //       ModalText: 'The modal will be closed after two seconds',
  //       confirmLoading: true,
  //     });
  //     setTimeout(() => {
  //       this.setState({
  //         visible: false,
  //         confirmLoading: false,
  //       });
  //     }, 2000);
  //   };

  //   handleCancel = () => {
  //     console.log('Clicked cancel button');
  //     this.setState({
  //       visible: false,
  //     });
  //   };

  //   render() {
  //     const { visible, confirmLoading, ModalText } = this.state;
  //     return (
  //       <>
  //         <Button type="primary" onClick={this.showModal}>
  //           Open Modal with async logic
  //         </Button>
  //         <Modal
  //           title="Title"
  //           visible={visible}
  //           onOk={this.handleOk}
  //           confirmLoading={confirmLoading}
  //           onCancel={this.handleCancel}
  //         >
  //           <p>{ModalText}</p>
  //         </Modal>
  //       </>
  //     );
  //   }
  // }

  // ReactDOM.render(<App />, mountNode);
};

export default ConsentForm;
