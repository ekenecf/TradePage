import React, {useEffect} from 'react'
import Question from './Faq/Question'

const DashboardFaqs = ({Display}) => {
  useEffect(()=>{

    /* eslint-disable-next-line no-unused-expressions */
    return Display
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
  },[])
  return (
    <div>
      <Question/>
    </div>
  )
}

export default DashboardFaqs
