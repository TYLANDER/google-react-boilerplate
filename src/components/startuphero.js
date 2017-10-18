import React from 'react'
import Background from '../images/portal_raster.jpg'


const divStyle = {
  backgroundImage: `url(${Background})`,
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};


export default () => (
<header className='sans-serif'>
  <div className='cover bg-left bg-center-l' style={divStyle}>
    <div className='pb5 pb6-m pb7-l pt2 ph2' >
      <div className="tl-l mt0-ns mt0-m mt0 mr1 ph4 ph5-m ph6-l">
        <h1 className="f2 f1-l fw2 black-90 mb0 lh-title">This is your super impressive headline</h1>
        <h2 className="fw1 f3 black-80 mt3 mb4">Now a subheadline where explain your wonderful new startup even more</h2>
        <a className="f6 no-underline grow dib v-mid bg-blue white ba b--blue ph3 pv2 mb3" href="/">Call to Action</a>
        <span className="dib v-mid ph3 white-70 mb3">or</span>
        <a className="f6 no-underline grow dib v-mid white ba b--white ph3 pv2 mb3" href="">Secondary call to action</a>
      </div>
    </div>
      <div className='pb5 pb6-m pb7-l pt5 ph4 ph5-m ph6-l'>
      </div>
  </div>
</header>
)
