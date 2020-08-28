import React from "react";

class Customer extends React.Component {
    render() {
        return (
            <div>
                <CustomerProfile id={this.props.id} name={this.props.name} img={this.props.img} />
                <CustomerInfo birth={this.props.birth} gender={this.props.gender} job={this.props.job} />
            </div>
        );

    }
}

export default Customer

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birth}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>
        );
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img} alt="profile/"></img>
                <h2>{this.props.name}({this.props.id})</h2>
            </div>
        )
    }
}