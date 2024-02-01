import React from 'react'

const FaqMenu = (props) => {
  return (
    <><h4>{props.faqObj.question}</h4>
    <p>{props.faqObj.answer}</p>
    </>
  )
}

export default FaqMenu