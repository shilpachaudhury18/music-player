import React, { Component } from 'react';

class Search extends Component {


    constructor(props){
        super(props);
        this.state={
            title:''
        };
        this.onChangeTitle=this.onChangeTitle.bind(this);
        this.submitHandler=this.submitHandler.bind(this);
    }

    onChangeTitle(e){
        this.setState({
            title: e.target.value
        });
    }
    submitHandler(e){
        e.preventDefault(); /* avoid pare reload*/
        console.log('title', this.state.title);
        this.props.search(this.state.title);

    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-3 well well-lg">
                    <div classNmae="from-group">
                        <label htmlFor="artist">Search</label>
                        <div className="input-group">
                            <input type="text" className="from-control" value={this.state.title} onChange={this.onChangeTitle}/>
                            <div className="input-group-btn">
                                <button className="btn btn-info" onClick={this.submitHandler}>
                                    <span className="glyphicon glyphicon-search"></span>
                                </button>
                            </div>


                        </div>

                    </div>
                </div>
                
            </div>
        );
    }
}
export default Search;
