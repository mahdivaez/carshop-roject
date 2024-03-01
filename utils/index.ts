"use client"
export async function fetchCars(){
    const headers  ={
         
            'X-RapidAPI-Key': '4b64949b0amsh8791c1028127aa7p1721a0jsn5b7d6dd856e5',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
          
    }

    const response = await fetch ('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla' , {
        headers:headers , 

    });

    const result = await response.json();

    return result 
}  


export const calculateCarRent = (city_mpg : number , year:number)=>{
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage
const mileageRate = (city_mpg * mileageFactor)
    // Calculate additional rate based on age
const ageRate = (new Date().getFullYear()- year) * ageFactor ; 
    // Calculate total rental rate per day

    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);



}

