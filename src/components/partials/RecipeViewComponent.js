import React from 'react';
import { isEmpty } from 'lodash';
import { ChevronsRight, CloudOff } from 'react-feather';
export default class RecipeViewComponent extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let id = this.props.currentRecipe.id;
    let title = this.props.currentRecipe.title;
    let description = this.props.currentRecipe.description;
    let url = this.props.currentRecipe.url;
    let imgSrc = this.props.currentRecipe.imgSrc;
    
    let renderBanner = ((imgSrc, url)=>{
        if(!/^https?:\/\//i.test(imgSrc)){
          return <div className="no-image-banner">
            <CloudOff width="36" height="36"/></div>;
        }
        else{
          return <div className="banner" style={{
            backgroundImage: `url(${imgSrc})`}}></div>;
        }
      })(imgSrc, url)

    let renderCurrentRecipe =()=>
      <div className="current-recipe-component">
        {renderBanner}
        <div className="text-container">
          <h2>{title}</h2>
          {description ? <p>{description}</p> : ''}
          <a href={url} className="drive-button">Go</a>
        </div>
      </div>

    let noCurrentRecipe = ()=>
      <div className="no-current-recipe-component">
        <h2>Welcome To KitchenHub</h2>
        <p>Choose a recipe you wish to view</p>
      </div>

      return(
      <section className="recipe-view-component">
        { !isEmpty(this.props.currentRecipe)
            ? renderCurrentRecipe()
            : noCurrentRecipe() }
      </section>
    )
  }
}