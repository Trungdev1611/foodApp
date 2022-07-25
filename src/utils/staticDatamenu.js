import burger from './../assets/image/burger.svg'
import bread from './../assets/image/bread.svg'
import sandwich from './../assets/image/sandwich.svg'
import drinks from './../assets/image/drinks.svg'
import pizza from './../assets/image/pizza.svg'

export const menuListdata = [
    {
        id: 1,
        linkto: '/listfood/bbqs?_limit=16',
        src: burger,
        name: 'Burgers'

    },
    {
        id: 2,
        linkto: '/listfood/breads?_limit=16',
        src: bread,
        name: 'Bread'
    },
    {
        id: 3,
        linkto: '/listfood/sandwiches?_limit=16',
        src: sandwich,
        name: 'Sandwichs'
    },
    {
        id: 4,
        linkto: '/listfood/drinks?_limit=16',
        src: drinks,
        name: 'Drinks'
    },
    {
        id: 5,
        linkto: '/listfood/pizzas?_limit=16',
        src: pizza,
        name: 'Pizza'
    }
]