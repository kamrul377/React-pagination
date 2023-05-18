import React, { Component } from 'react'

export default class Pagination extends Component {
    
    state={ 
        isEditable: false
    }

  render() {
    return (
      <div className='flex my-5 align-middle'>
        


        <button className='bg-indigo-950 text-white p-4'>prev</button>
        <button className='bg-pink-950 text-white p-4'>next</button>

      </div>
    )
  }
}
