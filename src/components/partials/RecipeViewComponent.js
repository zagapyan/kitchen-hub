import React from 'react';
import { isEmpty } from 'lodash';
import { ChevronsRight, CloudOff } from 'react-feather';
export default class RecipeViewComponent extends React.Component{
  render(){
    return(
      <div className="">
        {this.props.imgSrc ? <img src={this.props.imgSrc} /> : ''}
        <h1>{this.props.title ? this.props.title : ''}</h1>
        <p>{this.props.description ? this.props.description : ''}</p>
        <a href="#" className="button" target="_blank">Go</a>
      </div>
    )
  }
}