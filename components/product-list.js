/**
 * Created by hasee on 2016/12/30.
 */


import React,{Component} from "react"

/*写组件的时候，尽量 把组件名写完整，描述清晰*/
class  ProductList extends Component {
     constructor(props){
         super(props)
     }
     render(){
         return (
             <ul className="product-list">
                 {
                     this.props.productData.map((ele,i)=><li key={i}>
                         <a href={"#/detail/"+ele.goodsID}><img src={ele.goodsListImg}/></a>
                         <p>{ele.goodsName}</p>
                     </li>)
                 }
             </ul>
         )
     }

}
ProductList.defaultProps={
    productData:[]
};


export default ProductList