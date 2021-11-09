
class Launcher {
    constructor(bodyA,pointB){

       var options={
           bodyA : bodyA,
           pointB : pointB,
           length:15, 
           stiffness:0.5 
           }
          this.bodyA=bodyA
           this.pointB= pointB
         this.sling= Constraint.create(options)
         World.add(world, this.sling);
   
    
       }
       fly(){

        this.sling.bodyA
       }
    }




