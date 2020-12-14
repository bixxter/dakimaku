import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProject } from '../../store/actions/projectActions'
import { Redirect } from 'react-router-dom'

class ProjectCreate extends Component {
    state = {
        title: '',
        price: '',
        size: '',
        source: '',
        source_url: '',
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: ''
    }
    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state)
        const { title, price, size, source, source_url, img1, img2, img3, img4, img5 } = this.state;
        const imag = [img1, img2, img3, img4, img5]
        const images = imag.filter(image => image.length > 4)
        const send = { title, price, images, size, source, source_url }
        this.props.createProject(send)
        this.props.history.push('/')
    }
    render() {
        const { profile } = this.props;
        if (profile.role === 'moderator' || profile.role === 'God') {
            return (
                <div className="container">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">Create a new prohect</h5>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="price">Price</label>
                            <input type="text" id="price" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="source">Source</label>
                            <input type="text" id="source" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="source_url">Source Url</label>
                            <input type="text" id="source_url" onChange={this.handleChange} />
                        </div>
                        <div className="input-field">
                            <label htmlFor="size">Size</label>
                            <input type="text" id="size" onChange={this.handleChange} placeholder="smx" />
                        </div>
                        <div className="input-field">
                            <label htmlFor="images">Images</label>
                            <input type="text" id="img1" onChange={this.handleChange} placeholder="url img1" />
                            <input type="text" id="img2" onChange={this.handleChange} placeholder="url img2" />
                            <input type="text" id="img3" onChange={this.handleChange} placeholder="url img3" />
                            <input type="text" id="img4" onChange={this.handleChange} placeholder="url img4" />
                            <input type="text" id="img5" onChange={this.handleChange} placeholder="url img5" />
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Create</button>
                        </div>
                    </form>
                </div>
            )
        } else { return <Redirect to='/' /> }

    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.firebase.profile,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectCreate)