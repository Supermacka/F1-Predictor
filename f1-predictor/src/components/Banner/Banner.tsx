import React from 'react'
import InputDriver from 'components/Input/InputDriver'
import "components/Banner/banner.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="overlay">
          <img src="https://cdn-wp.thesportsrush.com/2020/08/Belgian-Gp-2020-Live-stream.jpg" alt="Belgian Grand Prix" />
        </div>

        <div className="banner__container">
          <div className="banner__title">
            <h1>Belgian Grand Prix</h1>
            <span className="banner__subtitle">
              <FontAwesomeIcon className="icon--large" icon={solid('bell')} />
              <h2 className="uppercase">Qualifying</h2>
            </span>
          </div>
          <InputDriver />
        </div>
      </div>
    </div>
  )
}

export default Banner