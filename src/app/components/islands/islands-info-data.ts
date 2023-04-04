import { islandinfo } from "./islands-info";
import { islandsWeather } from "./"

export const Islandsinfo: islandinfo[]=[
    {name:"St-Miguel", attractionSites:['Ponta Delgada', 'Furnas', 'Moms House']},
    {name:"Pico", attractionSites:['Ponta do Pico', 'Gruta das Torres', 'Whale Museum']},
    {name:"Terceira", attractionSites:['Algar do Carvao', 'Terceira Garden', 'Grandmas House']},
    {name:"Corvo", attractionSites:['The Crater', 'Moinhos Do Corvo', 'Dads House']},
]


export const IslandsWeather: islandsWeather[]=[
    {name:"St-Miguel", springN:23, springM:43, summerN:22, summerM:43, winterN:12, winterM:25, autumnN:22, autumnM:36, visitFrom:"October", visitTo:"April"},
    {name:"Pico", springN:23, springM:30, summerN:28, summerM:33, winterN:12, winterM:25, autumnN:22, autumnM:36, visitFrom:"September", visitTo:"May"},
    {name:"Terceira", springN:23, springM:40, summerN:28, summerM:33, winterN:12, winterM:25, autumnN:22, autumnM:36, visitFrom:"August", visitTo:"March"},
    {name:"Corvo", springN:23, springM:40, summerN:28, summerM:23, winterN:12, winterM:25, autumnN:22, autumnM:32, visitFrom:"January", visitTo:"December"}
]