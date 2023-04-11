import React, {useEffect} from 'react'
import Contact from "../Dashboard/Contacts/Contact"

const DashboardContact = ({Display}) => {
  useEffect(() => {
    /* eslint-disable-next-line no-unused-expressions */
    return Display
/* eslint-disable-next-line  react-hooks/exhaustive-deps */
  }, [])
  return (
    <div>
      <Contact/>
    </div>
  )
}

export default DashboardContact
