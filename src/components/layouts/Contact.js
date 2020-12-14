import React, { Component } from 'react'

export class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row formForm1">
                    <form className="col s12">
                        <div className="row">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="first_name" type="text" className="validate" />
                                <label for="first_name">First Name</label>
                            </div>
                            <div className="input-field col s6">
                                <input id="last_name" type="text" className="validate" />
                                <label for="last_name">Last Name</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="email" type="email" className="validate" />
                                <label for="email">Email</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input id="theme" type="text" className="validate" />
                                <label for="theme">Email theme</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
                                <label for="textarea2">Textarea</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field">
                                <button className="btn dokiColor right">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default Contact
