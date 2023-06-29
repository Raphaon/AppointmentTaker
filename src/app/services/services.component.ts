import { Component } from '@angular/core';
import { IService } from '../Models/Service';
import { CompagnyDepartment } from '../myServices/Department.services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {

  private _filterService:string = "mot";


  public get filterService() :string {
    return this._filterService;
  }



all_services: IService[] = [];

public filteredServices:IService[] = [];


ngOnInit(): void {
  this._filterService = "";
  this.all_services = this.department.getCompagnyDepartment();
  this.filteredServices = this.all_services;
}


private  filterServices(criterial: string): IService[]{
  criterial = criterial.toLocaleLowerCase();

  const res = this.all_services.filter(
    (service: IService) => service.Name.toLocaleLowerCase().indexOf(criterial) != -1
                        || service.Description.toLocaleLowerCase().indexOf(criterial) != -1
   );
   return res;
}



public set filterService(filterEL:string){
  this._filterService = filterEL;
  this.filteredServices = this.filterService ? this.filterServices(this.filterService): this.all_services ;
}




constructor(private department: CompagnyDepartment){

}


}
