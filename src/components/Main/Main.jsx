import React from 'react'
import s from './Main.module.css'

const Main = () => {
   return <nav className={s.main}>
      <div className={s.main}>
         <a>Profile</a>
      </div>
      <div className={`${s.item} ${s.active}`}>
         <a>Messages</a>
      </div>
      <div className={s.item}>
         <a>News</a>
      </div>
      <div className={s.item}>
         <a>Music</a>
      </div>
      <div className={s.item}>
         <a>settings</a>
      </div>

   </nav>
}
export default Main
