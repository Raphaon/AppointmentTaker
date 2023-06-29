import { Component, OnInit } from '@angular/core';
import { IhealthCareStructure } from '../Models/HealthCareStructure';
import { CompagnyService } from '../myServices/Compagny.services';

@Component({
  selector: 'app-health-structure',
  templateUrl: './health-structure.component.html',
  styleUrls: ['./health-structure.component.css']
})
export class HealthStructureComponent  implements OnInit{

 
  private _filterHealthStructure :string  = "filter"; 

  healthStructures :IhealthCareStructure [] = [];
  

  public filteredStructures : IhealthCareStructure[] = [] ;


  constructor(private compagnyStructureService : CompagnyService){

  }

  public get filterHealthStructure () : string {
    return this._filterHealthStructure;
  }


  public set filterHealthStructure(newFilterValue: string){
    this._filterHealthStructure = newFilterValue;
    this.filteredStructures = this.filterHealthStructure ? this.filterHealthStructures(this.filterHealthStructure) : this.healthStructures
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.filterHealthStructure = "";
    this.healthStructures = this.compagnyStructureService.getCompagny();
    this.filteredStructures = this.healthStructures;
    
  }


  private filterHealthStructures(criterial:string ) : IhealthCareStructure[]{
      criterial = criterial.toLocaleLowerCase();
      const  res = this.healthStructures.filter(
        (healthStructure: IhealthCareStructure ) => healthStructure.name.toLocaleLowerCase().indexOf(criterial) != -1
      );

      return res;
  }



  
}
