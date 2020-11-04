import React from 'react'
import ImgsViewer from 'react-images-viewer'

export default class Demo extends React.Component {
  render() {
    return (
      <ImgsViewer
        imgs={[{ src: 'http://example.com/img1.jpg' }, { src: 'http://example.com/img2.png' }]}
        currImg={this.state.currImg}
        isOpen={this.state.viewerIsOpen}
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeViewer}
      />
    )
  }
}