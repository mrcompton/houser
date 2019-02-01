import React, {Component} from 'react'
import {Link,Route,Switch} from 'react-router-dom'
import WizardOne from '../WizardOne/WizardOne'
import WizardTwo from '../WizardTwo/WizardTwo'
import WizardThree from '../WizardThree/WizardThree'

class Wizard extends Component{

    render(){
        return(
            <div>
                <Link to='/'><button >Cancel</button></Link>
                <Switch>
                    <Route path='/wizard/step1' component={ WizardOne }/>
                    <Route path='/wizard/step2' component={ WizardTwo }/>
                    <Route path='/wizard/step3' component={ WizardThree }/>
                </Switch>
            </div>
        )
    }
}

export default Wizard