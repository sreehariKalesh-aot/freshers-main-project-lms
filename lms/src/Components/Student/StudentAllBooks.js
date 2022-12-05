import React from 'react'
import AllBooks from '../Admin/Pges/AllBooks'

function StudentAllBooks({studentLoginId}) {
  return (
    <AllBooks studentBoolean={"student"} studentLoginId={studentLoginId}/>
  )
}

export default StudentAllBooks