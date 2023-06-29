
import { IhealthCareStructure } from "../Models/HealthCareStructure";
import {Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class CompagnyService
{
    public getCompagny(): IhealthCareStructure[]
    {
        return  [
            {
            HealthCareStructureID: 1,
            name:'Hopital Bethesda', 
            location:'Yaoundé'  
            },
        
            {
            HealthCareStructureID: 2,
            name:'CSJSG YOKADOUMA ', 
            location:'EST'  
            },
            {
            HealthCareStructureID: 3,
            name:'CSJG Garoua ', 
            location:'Garoua'  
            },
            {
            HealthCareStructureID: 4,
            name:'CJSG GONG ', 
            location:'Sud Ouest ' 
            }
        
        ];
    }

}