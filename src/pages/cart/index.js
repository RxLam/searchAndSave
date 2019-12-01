import React from 'react';
import styles from './index.module.css';
import btnRemove from './btnRemove.png';

class Cart extends React.Component{

    render(){
	
        if(this.props.data === undefined) return false
        let data = this.props.data               
        let productsRows = data.map((product, i) => {
            return (
               <div key={product.inn} className={styles.data}>
                    <h3>{product.name.short_with_opf}</h3>
                    
                    <p><string className={styles.string}>Юридический адрес </string>{product.address.value}</p>
                    <p><string className={styles.string}>Генеральный директор </string>{product.management.name}</p>
                    <p><string className={styles.string}>ИНН </string>{product.inn}</p>
                    <p><string className={styles.string}>КПП </string>{product.kpp}</p>
                    <p><string className={styles.string}>ОГРН </string>{product.ogrn}</p>

                    <img className={styles.btnRemove} src={btnRemove} onClick={() =>{this.props.remove(i)}}/>           
                </div>
            );
        })
        return (
            <div>{productsRows}</div>       
        )
    }
}

export default Cart;





        
			




                      