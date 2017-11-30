import {observable} from 'mobx'
import uuid from 'node-uuid'
import axios from 'axios'

export class listStore{
  // @observable list = [];
  // @observable isLoading = false;

  constructor(endpoint){
    this.endpoint = endpoint;
    this.transportLayer = axios.fetch(this.endpoint);
    console.log(transportLayer);
  }
  fetchRSS(){
    this.isLoading = true;
  }
}
