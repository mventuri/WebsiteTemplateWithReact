import React, {Component} from 'react';
    class ContactsView extends Component {
        render(){
            return (
                <div>
                    <h1>Contact us</h1>
					<form>
                    
                    <input type="text" name="firstname" placeholder="Name"/>
                    <br/>
                    <br/>
                    <input type="text" name="lastname" placeholder="Last Name"/>
                    <br/>
                    <br/>
                    <textarea placeholder="Your message goes here"/>
                    <br/><br/>
                    <input type="submit" value="Submit"/>
                    </form> 
                </div>
            );
        }
    }
    export default ContactsView;