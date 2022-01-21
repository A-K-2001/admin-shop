import { loginFailure,loginStart,loginSuccess  ,getuserFailure,getuserStart,getuserSuccess } from "./userRedux";
import { publicRequest, userRequest } from "../requestMethods";
import { getProductFailure, getProductStart, getProductSuccess,updateProductFailure, 
    updateProductStart, 
    updateProductSuccess,
     deleteProductFailure, deleteProductStart, deleteProductSuccess , addProductFailure, 
     addProductStart, 
     addProductSuccess} from "./productRedux";


export const login = async (dispatch ,user )=>{

    dispatch (loginStart());
    try{
        const res = await publicRequest.post("/auth/login",user);
        
        dispatch(loginSuccess(res.data));

    }catch(err){
        dispatch(loginFailure());
    }
};

export const getusers = async (dispatch )=>{

    dispatch(getuserStart());
    try{
        const res = await userRequest.get("/users");
        // console.log(res.data);
        dispatch(getuserSuccess(res.data));

    }catch(err){
        dispatch(getuserFailure());
    }
};





export const getProducts = async (dispatch )=>{

    dispatch(getProductStart());
    try{
        const res = await publicRequest.get("/products");
        // console.log(res.data);
        dispatch(getProductSuccess(res.data));

    }catch(err){
        dispatch(getProductFailure());
    }
};
export const deleteProduct = async (id,dispatch )=>{

    dispatch(deleteProductStart());
    try{
        // const res = await userRequest.delete(`/products/${id}`);
        // console.log(res.data);
        dispatch(deleteProductSuccess(id));

    }catch(err){
        dispatch(deleteProductFailure());
    }
};




export const updateProduct = async (id,product,dispatch )=>{

    dispatch(updateProductStart());
    try{
        // const res = await userRequest.delete(`/products/${id}`);
        // console.log(res.data);
        dispatch(updateProductSuccess({id,product}));

    }catch(err){
        dispatch(updateProductFailure());
    }
};




export const addProduct = async (product,dispatch )=>{

    dispatch(addProductStart());
    try{
        const res = await userRequest.post(`/products`,product);
        // console.log(res.data);
        dispatch(addProductSuccess(res.data));

    }catch(err){
        dispatch(addProductFailure());
    }
};


