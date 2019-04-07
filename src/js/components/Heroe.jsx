import { h, render } from 'preact';
import { css } from 'emotion';

export default (props) => {
  return (
    <div className={css`
    background: #fff;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    `}>
      <div className={css`
    overflow: hidden;
    position: relative;
    padding-bottom: 80%;
    background: gray;
    `}>
        <img className={css`
    width: 100%;
    position: absolute;
    `} src={props.thumbnail.path + '.' + props.thumbnail.extension}></img>
      </div>
      <div className={css`
    padding: 10px;
    `}>
        <h4>{props.name}</h4>
        <span>{props.description}</span>
      </div>
    </div>);
};