import { Injectable } from "@angular/core";
import { IService } from "../Models/Service";

@Injectable({
    providedIn:'root'
})


export class CompagnyDepartment{


    public getCompagnyDepartment() : IService[]
    {
        return [
            {
            ServiceID: 1,
            Name : "Ophtamologie",
            Description: "Veuillez resoudre tous vos problèmes d'yeux ! ",
            ServiceImgUrl:"./assets/images/best-service.png"
          },
          
          {
            ServiceID: 2,
            Name : "Medecine",
            Description: "Vous avez la possibilité de parler à des médécins Généraliste et leurs expliquer ce par quoi vous passez  ",
            ServiceImgUrl:"./assets/images/best-service.png"
          },
          
          {
            ServiceID: 3,
            Name : "Gynecologie",
            Description: "Veuillez resoudre tous vos problèmes d'yeux ! ",
            ServiceImgUrl:"./assets/images/best-service.png"
          },
          
          {
            ServiceID: 4,
            Name : "Pediatrie",
            Description: "Veuillez resoudre tous vos problèmes d'yeux ! ",
            ServiceImgUrl:"./assets/images/best-service.png"
          },
          
          {
            ServiceID: 5,
            Name : "Neonatalogie",
            Description: "Veuillez resoudre tous vos problèmes d'yeux ! ",
            ServiceImgUrl:"./assets/images/best-service.png"
          },
          
          ]; 
    }
}