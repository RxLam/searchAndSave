import React from 'react';
import styles from './index.module.css';
import {Button} from 'react-bootstrap';

class Cart extends React.Component{
    render(){
        if(this.props.data === undefined) return false
        let data = this.props.data               
        let productsRows = data.map((product, i) => {
            return (
                <div key={product.inn} className="container">
                    <hr/>
                    <h3>{product.name.short_with_opf}</h3>
                    <p><strong>Юридический адрес </strong>{product.address.value}</p>
                    <p><strong>Генеральный директор </strong>{product.management.name}</p>
                    <p><strong>ИНН </strong>{product.inn}</p>
                    <p><strong>КПП </strong>{product.kpp}</p>
                    <p><strong>ОГРН </strong>{product.ogrn}</p>
                        <Button variant="dark" onClick={() =>{this.props.remove(i)}}>
                            X
                        </Button>                   
                </div>
            );
        })
        return (
            <div>{productsRows}</div>       
        )
    }
}

export default Cart;



                      
