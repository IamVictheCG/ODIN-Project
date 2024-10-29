import './styles/style.scss'
import coffee1 from './assets/coffee1.jpeg'
import coffee2 from './assets/coffee2.jpeg'
import special from './assets/special2.png'
import coffee3 from './assets/coffee3.jpeg'
import coffeeBean from './assets/coffee-beans_9954764.png'
import desserts from './assets/cupcake_4420609.png'
import buffaloPizza from './assets/buffaloPizza.jpg'
import jalapenoBurger from './assets/jalapenoburger.jpeg'
import foodDelivery from './assets/delivery.png'
import espresso from './assets/coffee-cup-concept-illustration_114360-9897-removebg-preview.png'

const image1 = document.querySelector('img')
const coffeeBeans_dom = document.querySelector('#image1')
const desserts_dom = document.querySelector('#image2')
const foodDelivery_dom = document.querySelector('.foodDelivery')
const jalapenoBurger_dom = document.querySelector('#jalapenoBurgerIMG')
const buffaloPizza_dom = document.querySelector('#buffaloPizzaIMG')
const special_dom = document.querySelector('#image3')
const espresso_dom = document.querySelector('#espresso')


image1.src = coffee3
coffeeBeans_dom.src = coffeeBean
desserts_dom.src = desserts
special_dom.src = special
jalapenoBurger_dom.src = jalapenoBurger
buffaloPizza_dom.src = buffaloPizza
foodDelivery_dom.src = foodDelivery
espresso_dom.src = espresso


console.log(coffee1);