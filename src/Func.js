import React from 'react'

export default function Func() {
  const data=100;
  let date=new Date();
  let ownData="I am Func own data";
  return (
    <div>
      <h1>{data}</h1>
      <h2>Current {date.getDate()}:{date.getMonth()+1}:{date.getFullYear()}</h2>
      <h3>{ownData}</h3>
    </div>
  )
}
