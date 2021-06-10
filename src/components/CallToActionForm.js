import React, { Component } from 'react'
import "./CallToActionForm.css"

export default class CallToActionForm extends Component {
    render() {
        return (
            <div>

                <form>
                    <div className="container-outer">
                        <h2 id="signup-heading">Sign up to newsletter</h2>

                    </div>

                    <div className="container-inner">
                        <input type="text" placeholder="Email" name="email" required/>
                        <input type="text" placeholder="Password" name="password" required/>
                        <input type="submit" value="Join"/>

                        {/* Connect form to backend */}

                    </div>
                </form>

           

            </div>
        )
    }
}
