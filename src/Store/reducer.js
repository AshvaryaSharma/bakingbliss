import {toast} from "react-toastify";
export const initialState = {
  basket: (JSON.parse(localStorage.getItem("__bakingBliss")) === null)? []: JSON.parse(localStorage.getItem("__bakingBliss")).basket,
  user: ((JSON.parse(localStorage.getItem("__bakingBliss")) === null) || (JSON.parse(localStorage.getItem("__bakingBliss")).user === null))? []: JSON.parse(localStorage.getItem("__bakingBliss")).user
};

//Selector

// export const getBasketTotal = (basket) => {
//     basket?.reduce((amount, item) => item.price + amount, 0);
// }

const reducer = (state, action) => {
    const baking = initialState;
    console.log("Dipatch: ", action);
    switch(action.type) {
        case "ADD_TO_BASKET":
           const index = state.basket.findIndex(
                (basketItem) => basketItem.id=== action.item.id
            );
            let newBasket = [...state.basket];

            if(index >=0) {
                newBasket.splice(index, 1);
                
                    newBasket = [...newBasket, action.item];
                    toast.success(
                      "We updated your " + action.item.name + " in basket"
                    );
                
                
                
            } else {
                newBasket = [...newBasket,action.item]
                toast.success(action.item.name + " has been added to your baking basket")
            }

            baking.basket = newBasket
            
            localStorage.setItem("__bakingBliss",JSON.stringify(baking))
            return {
                ...state,
                basket: newBasket
            }
        case "REMOVE_FROM_BASKET": 
            const index1 = state.basket.findIndex(
                (basketItem) => basketItem.id=== action.id
            );
            const newBasket1 = [...state.basket];

            if(index1 >=0) {
                newBasket1.splice(index1, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id} as its not in basket)`
                )
            }
            toast.info("Your basket is updated")
            baking.basket = newBasket1
            
            localStorage.setItem("__bakingBliss",JSON.stringify(baking))
            return {
                ...state,
                basket: newBasket1
            }
        case "SET_USER":
            baking.user = action.user;
            localStorage.setItem("__bakingBliss",JSON.stringify(baking))
            return {
                ...state,
                user:action.user
            }

            case "SIGN_OUT":
                localStorage.setItem("__bakingBliss", JSON.stringify({...state, user: null}))
                return {
                    ...state, user: null
                }

        case "EMPTY_BASKET":
            baking.basket = []
            localStorage.setItem("__bakingBliss",JSON.stringify(baking))
            return {
                ...state,
                basket:[],
            }
        default:
            return state;

    }    
}

export default reducer;