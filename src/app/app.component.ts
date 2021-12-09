import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';
  public num1!:number;
  public num2!:number;
  public num3!:number;
  public num4!:number;
  public num5!:any;
  public k!:number;
  public u!:number;
  public fact = 1;
  add(){
    this.num3=this.num1+this.num2
  }
  substract(){
    this.num3=this.num1-this.num2
  }
  multiply(){
    this.num3=this.num1*this.num2
  }
  divide(){
    this.num3=this.num1/this.num2
  }
  factorial(){
    if(this.num4 ==0 || this.num4==1)
    {
      this.fact = 1;
    }
    else{
      for ( let u = 1; u <= this.num4; u++  ){
        this.fact = this.fact*u;
     
      }
    }
    
    this.num5=this.fact;
  }
  prime(){
    if(this.num4 < 2) 
    return this.num5="1 is not a prime";
    for (let k = 2; k < this.num4; k++){
      if( this.num4 % k == 0){
        return this.num5="It is not a prime";
      }
    }
    return this.num5="It is a prime";
  }
}
