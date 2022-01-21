export interface WeatherData{
    "list": [ {       
        weather: [
          {
            main: string;
            description: string;
            icon: string;
          }
        ],
        main: {
          temp: number;
          pressure: number;
          humidity: number;
          temp_min: number;
          temp_max: number;
        },
  
        sys: {
          country: string;
        },

        name: string
        }
    ]
}