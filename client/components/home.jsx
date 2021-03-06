import React from "react";

export const imageUrls = [
  'http://daynin.github.io/clojurescript-presentation/img/react-logo.png',
  'https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png',
  'http://freevector.co/wp-content/uploads/2014/04/webpack.png',
  'http://hapijs.com/public/img/logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Emoji_u26a1.svg/2000px-Emoji_u26a1.svg.png'
];

export var i=0;

export class Home extends React.Component {
  renderImage(imageUrl, i) {
    return (
        <img key={i} src={imageUrl} width="10%" height="10%"/>
    );
  }
  render() {
    return (
      <div>
        <h1>Hello <a href="https://github.com/electrode-io">Electrode</a></h1>
        <div> <p>Our beloved friends</p></div>
        <div className="images">
          {imageUrls.map(imageUrl => this.renderImage(imageUrl, ++i))}
        </div>
      </div>
    );
  }
}
