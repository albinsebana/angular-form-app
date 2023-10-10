import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formApp';
  displayName='';
  displayName1='';
  countV=0
  getValue(val: string){
    this.displayName=val
  }
  getValue1(val1: string){
    this.displayName1=val1  
  }


  counter(type:string){
    type=='plus' ? this.countV++ : this.countV--
  }

  isDisabled1=false
  isDisabled2=false


  nameofuser='albin'
  nameofuser2='sebana'


  show ='yes'

  changeShow(){
    this.show=this.show=='yes' ? 'no' : 'yes'
  }

  color ='green'

  switchColor = 'blue'

  users =['Albin','Alen','joshit','Sebana','akash']
  userDetails =[
    { name:'Albin',email : 'Albin@gmail.com'},
    {name : 'sebana' , email : 'sebana@gmail.com'},
    {name : 'kurian',email:'kurian@gmail.com'},
    {name: 'Albinseb',email:'Albinseb@gmail.com'}

    

  ]
  userDetails1 =[
    { name:'Albin',email : 'Albin@gmail.com',social:['fb','insta','snapchat','linkedIn','whatsapp']},
    {name : 'sebana' , email : 'sebana@gmail.com', social:['fb','insta','snapchat']},
    {name : 'kurian',email:'kurian@gmail.com',social:['fb','insta','whatsapp']},
    {name: 'Albinseb',email:'Albinseb@gmail.com',social:['linkedIn','whatsapp']}

    

  ]
}
