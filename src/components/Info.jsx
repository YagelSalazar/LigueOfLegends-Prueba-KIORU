import React from 'react';

const Info = (props) => {

  const { champion } = props.location.state;
  console.log(champion)
  return (
    <div className="container">
      <h1>{champion.name}</h1>
      <img src={champion.image.full} alt=""></img>
      <p>key: {champion.key}</p>
      <p>title: {champion.title}</p>
      <p>Desc: {champion.blurb}</p>
    </div>
  );
}
export default Info;