import React, { PureComponent, Fragment } from 'react'
import { debounce } from 'debounce'

import c from './HomePage.scss'

import homeImgXl from 'static/images/home/home-xl.jpg'
import homeImgLg from 'static/images/home/home-lg.jpg'
import homeImgXs from 'static/images/home/home-xs.jpg'

interface IState {
  imgSrc: string
}

export class HomePageBase extends PureComponent<{}, IState> {
  public state = {
    imgSrc: homeImgXl
  }

  updateDimensions = () => {
    const windowWidth = window.innerWidth

    const isXS = windowWidth < 500
    const isLG = windowWidth < 992 && windowWidth > 500

    switch (true) {
      case isXS:
        this.setState({
          imgSrc: homeImgXs
        })

        break
      case isLG:
        this.setState({
          imgSrc: homeImgLg
        })

        break
      default:
        this.setState({
          imgSrc: homeImgXl
        })
    }
  }

  componentDidMount() {
    this.updateDimensions()

    window.onresize = debounce(this.updateDimensions, 500)
  }

  componentWillUnmount() {
    window.onresize.clear()
  }

  public render() {
    const { imgSrc } = this.state

    return (
      <Fragment>
        <img
          className={c.bg}
          src={imgSrc}
        />
        <section>
          <div className={c.firstRow}>
            <div className={c.firstColumn}>
              Культові
            </div>

            <div className={c.secondColumn}>
              Сумки
            </div>
          </div>

          <div className={c.secondRow}>
            <div className={c.firstColumn}>
              {/* Від */}
            </div>

            <div className={c.secondColumn}>
              Олесі
            </div>
          </div>

          <div className={c.thirdRow}>
            <div className={c.firstColumn} />

            <div className={c.secondColumn}>
              Сахро
            </div>
          </div>
        </section>
      </Fragment>
    )
  }
}
