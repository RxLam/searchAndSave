import React from 'react';
import { Button } from 'react-bootstrap';

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
                <Button variant="danger" onClick={() => {this.toggleBtn(); this.props.saveFunction(data)}}>
                    Сохранить
                </Button> :
                <Button variant="light" disabled={true}>
                    Сохраненно
                </Button>                            
        return (
            <div>
            <div>
                <hr/>
                <h3>{value}</h3>
                <p><strong>Юридический адрес </strong>{data.address.value}</p>
                <p><strong>Генеральный директор </strong>{data.management.name}</p>
                <p><strong>ИНН </strong>{data.inn}</p>
                <p><strong>КПП </strong>{data.kpp}</p> 
                <p><strong>ОГРН </strong>{data.ogrn}</p>                                                         
            </div>
            <div>{btn}</div>
            </div>
        )
    }
}

export default Result;

