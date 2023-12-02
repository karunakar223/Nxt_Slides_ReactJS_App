import React from 'react'

const MyContext = React.createContext({
  initialList: [],
  activeIndex: 0,
  changeActiveTab: () => {},
  addNewItem: () => {},
  changeHeading: () => {},
  ChangeDescription: () => {},
})

export default MyContext
