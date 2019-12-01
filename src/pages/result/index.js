import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './index.module.css';

class Result extends React.Component{
  constructor(props) {
     super(props);

        this.state = {
          btnToggle: true        
        };
    }

    toggleBtn = () => {
        this.setState({btnToggle: false});
    }

    render(){
        if(this.props.data === null) return false
    	const {value, data} = this.props.data     
        let btn = this.state.btnToggle ?
                <Button className="btn btn-danger btn-lg" onClick={() => {this.toggleBtn(); this.props.saveFunction(data)}}>
                    Сохранить
                </Button> :
                <Button className="btn btn-light btn-lg" disabled={true}>
                    Сохранено
                </Button>                            
        return (          
            <div>
                <div>
                    <h3 className={styles.title}>{value}</h3>
                    <hr/>
                    <div className={styles.address}>
                        <p><strong>Юридический адрес</strong></p>
                        <p>{data.address.value}</p>
                    </div>
                    <div className={styles.management}>
                        <p><strong>Генеральный директор</strong></p>
                        <p>{data.management.name}</p>
                    </div>
                    <div className={styles.block}>
                        <div className={styles.numbers}>
                            <p><strong>ИНН</strong> {data.inn}</p>
                            <p><strong>КПП</strong> {data.kpp}</p> 
                            <p><strong>ОГРН</strong> {data.ogrn}</p> 
                        </div>
                    </div>                                                        
                </div>
                <div className={styles.btn}>{btn}</div>
            </div>
        )
    }
}

export default Result;

