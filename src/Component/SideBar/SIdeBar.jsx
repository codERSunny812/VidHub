import React from 'react'
import './_SIdeBar.scss'
import {
  MdHome ,
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdLibraryBooks,
  MdHistory,
  MdSentimentDissatisfied
} from 'react-icons/md'

const SIdeBar = () => {
  return (
    <div className='border border-warning sidebar'>

     <li>
      <MdHome size={100}/>
      <span>home</span>
     </li>

     <li>
      <MdSubscriptions size={100}/>
      <span>Subscription</span>
     </li>

     <li>
      <MdThumbUp size={100}/>
      <span>liked videos</span>
     </li>

     <li>
      <MdHistory size={100}/>
      <span>history</span>
     </li>

     <li>
      <MdLibraryBooks size={100}/>
      <span>library</span>
     </li>

     <li>
      <MdSentimentDissatisfied size={100}/>
      <span>disliked videos</span>
     </li>
     
     <hr />
     <li>
      <MdExitToApp size={100}/>
      <span>logout</span>
     </li>
     <hr />
     
    </div>
  )
}

export default SIdeBar