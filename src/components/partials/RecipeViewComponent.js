import React from 'react';
import { isEmpty } from 'lodash';
import { ChevronsRight, CloudOff } from 'react-feather';
export default class RecipeViewComponent extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    let title = this.props.currentRecipe.title;
    let description = this.props.currentRecipe.description;
    let url = this.props.currentRecipe.url;
    let imgSrc = this.props.currentRecipe.imgSrc;
    let fullImgSrc = ((imgSrc, url)=>{
        // if image url is absolute 
        if(!/^https?:\/\//i.test(imgSrc)){
          console.log('this should fail: ',imgSrc);
          return 'not '+imgSrc;
        }
        else{
          console.log('success: ',imgSrc);
          return imgSrc;
        }
      })(imgSrc, url)

    let renderCurrentRecipe =()=>
      <div className="current-recipe-component">
        {
          // if image source is not absolute
          !/^https?:\/\//i.test(imgSrc)
            ? <CloudOff />
            : <img src={imgSrc} />
        }
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={url}>Go <ChevronsRight/></a>
      </div>

    let noCurrentRecipe = ()=>
      <div className="no-current-recipe-component">
        <h2>Welcome To KitchenHub</h2>
        <p>Choose a recipe you wish to view</p>
      </div>

      return(
      <section className="recipe-view-component">
        <h2></h2>
        { !isEmpty(this.props.currentRecipe)
            ? renderCurrentRecipe()
            : noCurrentRecipe() }
      </section>
    )
  }
}