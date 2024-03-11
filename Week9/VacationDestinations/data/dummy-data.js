import Country from "../models/countries";
import Destination from "../models/destinations";

export const COUNTRY = [
    new Country("s1", "Italy", "#4caf50" ),
    new Country("s2", "United Kingdom", "#f44336"),
    new Country("s3", "Thailand", "#673ab7"),
    new Country("s4", "France", "#2196f3"),
    new Country("s5", "Mexico", "#ff9800"),
    new Country("s6", "Germany", "#ffeb3b"),
    new Country("s7", "Turkey", "#8BC34A"),
    new Country("s8", "Spain", "#03a9fa"),
    new Country("s9", "Greece", "#ff5722"),
    new Country("s10", "Japan", "#9c27b0"),
]

export const DESTINATION = [
    new Destination(
        "d1",
        "s1",
        "Rome",
        2500,
        "753 BC",
        4.7,
        "https://tourismmedia.italia.it/is/image/mitur/20220127150143-colosseo-roma-lazio-shutterstock-756032350-1?wid=1600&hei=900&fit=constrain,1&fmt=webp"
    ),
    new Destination(
        "d2",
        "s1",
        "Venice",
        2800,
        "421 AD",
        4.6,
        "https://cdn.britannica.com/62/153462-050-3D4F41AF/Grand-Canal-Venice.jpg"
    ),
    new Destination(
        "d3",
        "s2",
        "London",
        3000,
        "47 AD",
        4.8,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg"
    ),
    new Destination(
        "d4",
        "s2",
        "Edinburgh",
        2500,
        "~700 AD",
        4.7,
        "https://a.cdn-hotels.com/gdcs/production73/d1723/35b8f7e3-14c4-4d53-ae2f-5f7f6adb6aac.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    ),
    new Destination(
        "d5",
        "s3",
        "Bangkok",
        2000,
        "1782 AD",
        4.5,
        "https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
    ),
    new Destination(
        "d6",
        "s3",
        "Phuket",
        1800,
        "1980 AD",
        4.6,
        "https://media.cnn.com/api/v1/images/stellar/prod/151011123229-insiderguide-phuket-main.jpg?q=w_1600,h_900,x_0,y_0,c_fill"
    ),
    new Destination(
        "d7",
        "s4",
        "Paris",
        3500,
        "350 BC",
        4.8,
        "https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/large_jpg/eiffel-tower-in-paris-151-medium.jpg?1564742900"
    ),
    new Destination(
        "d8",
        "s4",
        "Nice",
        2700,
        "350 BC",
        4.7,
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Nizza-C%C3%B4te_d%27Azur.jpg/800px-Nizza-C%C3%B4te_d%27Azur.jpg"
    ),
    new Destination(
        "d9",
        "s5",
        "Cancun",
        2500,
        "1970 AD",
        4.5,
        "https://cdn.vallarta-adventures.com/sites/default/files/2019-01/cancun-about-weather%20%281%29.jpg"
    ),
    new Destination(
        "d10",
        "s5",
        "Mexico City",
        2000,
        "1325 AD",
        4.7,
        "https://i.natgeofe.com/n/73d9e4e3-4884-4e93-ac41-6be6a90079f5/mexico-city-travel%20(1).jpg?w=2880&h=1920"
    ),
    new Destination(
        "d11",
        "s6",
        "Berlin",
        2500,
        "1325 AD",
        4.7,
       "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg/1200px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29.jpg"
    ),
    new Destination(
        "d12",
        "s6",
        "Munich",
        2000,
        "1325 AD",
        4.7,
        "https://cdn.britannica.com/06/152206-050-72BD5CAC/twin-towers-Church-of-Our-Lady-Munich.jpg"
    ),
    new Destination(
        "d13",
        "s7",
        "Istanbul",
        2000,
        "660 BC",
        4.8,
        "https://a.cdn-hotels.com/gdcs/production6/d781/3bae040b-2afb-4b11-9542-859eeb8ebaf1.jpg"
    ),
    new Destination(
        "d14",
        "s7",
        "Cappadocia",
        2200,
        "1900 AD",
        4.7,
       "https://assets3.thrillist.com/v1/image/3109501/1200x600/scale;;webp=auto;jpeg_quality=85.jpg" 
    ),
    new Destination(
        "d15",
        "s8",
        "Barcelona",
        2500,
        "15 BC",
        4.7,
        "https://static.independent.co.uk/2023/03/10/14/iStock-1320014700.jpg"
    ),
    new Destination(
        "d16",
        "s8",
        "Madrid",
        2600,
        "900 AD",
        4.6,
        "https://media-cdn.tripadvisor.com/media/photo-s/28/6a/f5/4c/caption.jpg"
    ),
    new Destination(
        "d17",
        "s9",
        "Athens",
        2000,
        "3000 BC",
        4.7,
        "https://cdn.britannica.com/66/102266-050-FBDEFCA1/acropolis-city-state-Greece-Athens.jpg"
    ),
    new Destination(
        "d18",
        "s9",
        "Santorini",
        2000,
        "1325 BC",
        4.7,
        "https://i.natgeofe.com/n/73d9e4e3-4884-4e93-ac41-6be6a90079f5/mexico-city-travel%20(1).jpg?w=2880&h=1920"
    ),
    new Destination(
        "d19",
        "s10",
        "Tokyo",
        2500,
        "1603 AD",
        4.7,
        "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg"
    ),
    new Destination(
        "d20",
        "s10",
        "Kyoto",
        2400,
        "794 AD",
        4.8,
        "https://a.cdn-hotels.com/gdcs/production169/d1465/0153cc66-648b-4d82-b944-a3b5eaec1b94.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    ),
    
]