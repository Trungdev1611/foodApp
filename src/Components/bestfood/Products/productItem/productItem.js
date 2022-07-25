import React from 'react'
import './product.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import { useSelector } from 'react-redux';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { showToast, typeWishlistSuccess } from '../../../../utils/staticData';
import { postIteminCart } from '../../../../redux/action/actioncreator';
import palceholderimg from './../../../../assets/image/placeholder.jpg'
import Cookies from 'universal-cookie'
//lazyload img
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { forcedLogin } from '../../../../redux/SliceReducer/CartUserSlice';

const ProductItem = ({ element }) => {
    const { changeView } = useSelector(state => state.foodlistReducer)
    const dispatch = useDispatch()

    async function handleUserbuyproduct(e) {
        e.stopPropagation();
        const cookies = new Cookies();
        let tokenaccess = cookies.get('accessToken')
        if (tokenaccess) {
            dispatch(postIteminCart({ postData: element, quatity: 1 }))
        }
        else {
            dispatch(forcedLogin())
        }


    }
    function Addwishlist(e) {
        e.stopPropagation()
        const cookies = new Cookies();
        let tokenaccess = cookies.get('accessToken')
        if (tokenaccess) {
            showToast(typeWishlistSuccess)
        }
        else {
            dispatch(forcedLogin())
        }


    }
    return (
        <div className='productfood-item'
            style={changeView ? { display: 'flex' } : null}
        >

            <div className="product-item__img"
                style={changeView ? { width: '220px', marginRight: "2rem" } : null}>
                <LazyLoadImage
                    alt={'loi anh'}
                    height={'160px'}
                    src={element.img} // use normal <img> attributes as props
                    width={'100%'}
                    effect="blur"
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null; // prevents looping
                        currentTarget.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB6CAMAAACyeTxmAAABJlBMVEX////pQjU0qFNChfT6uwWAqvk5gfQzf/Tm7v690Pv6tgD6uQAwp1DpQDPpPC7/vADoOCklpEnn8+r63Nv98fD1sKz7wADoNjff8OPy+fT86ejrUkfoLBnoMSD4+v8QoT/sYlnudGzxj4nrST3nHQD4zszoJhD3phX/+vD7viX/9OD+8NL81IX95rj93Zb+35/94qpglvbd5/1DrV7R6NbC4cn3v7vynZjsWlD0pqHue3Txh4DtZmX1jwD80HHrVTDubSvyiCPweif1lh37xUjsTQn7xTrQ3vz8zFwhd/RJozXQtiaExZOauvmmsjh5rUWaz6beuB9Uqk3BtTCPsD+txvpmvYax2rpjuXMml5A1o3BAiec/kM4/mrA3n4kxpWI7k7yEsOVV1wY9AAAFRElEQVRoge2YaXvaRhDHhSyDDZLQIkwNSBaHIT5ip7E4fLTunYRGaUlaY9I2Pb7/l+iKW2J2pV1J+Hla/i/8xqCf5j8zO7MIwlZbbbXVZlSs6FNVipsi6r1+vVZtKupEqep1/e5AryQL1W/qVcPQVFVZkaqZbaXW6CUVud64NkxVSUHCcEO5TQBdvKkeazBzyTbMhh4rtXJnmHToDK0d11pxUgNCXZFqXMdDLjY0LSx0SjbrMbjda4Zy2CNNvYlIrdyyU7EUsxapo1sKm8VLqWaPH9s/5gl2FrLR4MXWDG6qK7PGdYxUqrwez6VVOepab6oRsdjqA2ZsKxUda7JjdeVJsJXo0aY4TBZiwLY5sLWolZxKHXNgG2bAQ90p324bhvvHhEYVTyULPfpxoWjt6m2/hze6It7uWgeNmmn4thAubKVJORwVzaz1dd85VOnV1dXxwVPJglCnJFdTb+GhXukvxyUftkdOLnWg4/Vg1gQ8JgvFFNFlrUlfYPTa5JV5GkgQ7kguK+27wC/32wpXA+E8kVwON8dbKl+0wheEg0pthhtpOh/2/EsCtprsBei+9Oyrz6Bok8WeZaVS7us1sKIlfN27zEmSVPrGD27Hd/WAJblcqfTMCzb7CWMvstJEJWk1yep1wljhPifNVPp2AVa0eK+W6zo5XXCl0ncbc1k4z0pLzRtKaSb+w8nznLQKnjaUGfVmF6zvPdxpQympxMM9k/zCDaUFD6Go8qR37vUPSRezILzIrXEl6RXtG6932fQafMobgJt7TuPuD9IsyuyCT/GXlavsBZWb2WHSS+ghJ68g7kmc3J0j4CHr5YxtPqVh2bl7wEPOofS+iZWbvgrLpZYVOxcq6Iv19pWyl7FyM/thuS82wIXK+fP/MPepfH6iutpAH4XnxntugFzwnJRi5YLnxgbmAnhOCiA31jkIc8G5fx8nF5yD4J6TO6UZvT/IEAVhwbkP7XV56ccOhXu0RxZkM8xdL+j8Wxk5FC7tlQbr3Mw7+LO+BSuX/0kURbnAxYVSD7av4L+n5KWfMVZEQy7ubhrgguXsS3D+/QcXK8o2T8BHYFmB5ey9h+Z/EWfiyvADYHMaXp+FlXt3Lv+ruBA6ZMYevQTCzTyQPj4fhXnpwxKLnWbm7gPVTEwv1tTo/HvRI2anwewS04t1mZ23j0dWl437Djqt0oTudXWSnbePL2KmFO8DPUS1GVfWvH28YmqmK9BlwuE809lbgMoGPtqBwyVW80QjmQCWaQNiRXswdidDripXhxbMFWX0GAZ7RcDSqmoiBxHAojUKxj5AjetqQA9XEMo2wWlc1WJAPx2OP6YJ4RLPyIW6xICx12NKlgsOktFvv4ObRjooXKwRGeySu2XwWx1HRBNP/oAmb1B2J+9NdtolW7bT8aHLneEYofn/PwHgEOFip0k1PY/ZEkfDx27BVaf76IxlC628qvWnv6Yz8A9XaxrSwRM2smZCyG8P+subZMLvVoDGlBSHkGz9vdpPlEHkFzXFIWR9zCy8hm8JsChdHE7LhhoQtkhYh5HBs4Ya0OdB/GAZfcKHV/iaig3sNhQ71j0/olW121D/sGOxRoF9HBAw5+UKHyARvJYR4zq4og6/18hm3/eXKjtrx2C4YC0Hnluh1eUJGdn8Hi9CHsqMZISGEYOdkR2LgYwsJ0pmPSoMUbjSxsPZ4fuFgKTu2AoqMQy143HYo4K7zZDYMoaOhyGXe3b0o2Mjd8WQ5QVPdpcPNB4NY8sqqHKhg1cq254iRdsej5zHTiF+e2F6uXDoqrAp4FZbbfW/179wN6bIyeplrwAAAABJRU5ErkJggg==";
                    }}
                    placeholderSrc={palceholderimg}
                />


            </div>
            <div className="product-item__bottom"
                style={changeView ? { marginTop: "10px" } : null}
            >
                <h4 className="item-heading">{element.name}</h4>
                <p className='product-item__desc'>{element.dsc}</p>
                <div className='product-item-info'
                    style={changeView ? { flexDirection: 'column', alignItems: "flex-start" } : null}
                >
                    <p className='info-city'>
                        <span><LocationOnIcon className='icon-location' /></span>
                        {element.country}</p>
                    <p className="info-price"
                        style={changeView ? { paddingLeft: '3px', marginTop: '5px' } : null}
                    >${element.price}</p>
                </div>

                <span className='icon-position favorite'>Favourite</span>
                <span className='icon-position heart'
                    onClick={(e) => { Addwishlist(e) }}
                ><FavoriteBorderIcon /></span>
                <span className='icon-position cart'
                    onClick={(e) => { handleUserbuyproduct(e) }}
                ><LocalGroceryStoreOutlinedIcon /></span>
                <span className='icon-position star_rate'>{element.rate} <StarRateIcon className='star-icon' /></span>


            </div>


        </div>
    )
}

export default ProductItem