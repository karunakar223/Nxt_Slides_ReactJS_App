import {Component} from 'react'
import SlideItem from '../SlideItem'
import MyContext from '../../MyContext'
import './index.css'
import SlideData from '../SlideData'

class Slides extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="slides-container">
              <ol className="slides-list">
                {initialList.map((eachSlide, index) => (
                  <SlideItem
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <SlideData />
            </div>
          )
        }}
      </MyContext.Consumer>
    )
  }
}

export default Slides
