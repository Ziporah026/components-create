import React from 'react';
import './form.css'; // Import the CSS file

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            gender: '',
            phoneNumber: '',
            selectedOption: '',
        };
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value // Use dynamic key to update the state
        });
    }

    handleGenderChange(e) {
        this.setState({
            gender: e.target.value // Update gender state based on selected option
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(`Submitted:\nName: ${this.state.name}\nEmail: ${this.state.email}\nGender: ${this.state.gender}\nPhone Number: ${this.state.phoneNumber}\nSelected Course: ${this.state.selectedOption}`);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <h1>MY FORM</h1>
                    <label htmlFor="name-input">Name: </label>
                    <input
                        id="name-input"
                        name="name"
                        onChange={this.onChange}
                        value={this.state.name}
                    /><br /><br />

                    <label htmlFor="email-input">Email: </label>
                    <input
                        id="email-input"
                        name="email"
                        onChange={this.onChange}
                        value={this.state.email}
                    /><br /><br />

                    <label>Gender: </label>
                    <label>
                        <input
                            type="radio"
                            value="male"
                            checked={this.state.gender === 'male'}
                            onChange={this.handleGenderChange}
                        /> Male
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="female"
                            checked={this.state.gender === 'female'}
                            onChange={this.handleGenderChange}
                        /> Female
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="rather not say"
                            checked={this.state.gender === 'rather not say'}
                            onChange={this.handleGenderChange}
                        /> Rather Not Say
                    </label><br /><br />

                    <label htmlFor="phone-input">Phone Number:</label>
                    <input
                        id="phone-input"
                        type="tel"
                        name="phoneNumber"
                        onChange={this.onChange}
                        value={this.state.phoneNumber}
                        placeholder="+254xxxx-xxxxxx"
                        required
                    /><br /><br />

                    <label htmlFor="dropdown">Courses:</label>
                    <select
                        id="dropdown"
                        name="selectedOption"
                        onChange={this.onChange}
                        value={this.state.selectedOption}
                        required
                    >
                        <option value="">Select a course</option>
                        <option value="ICP">ICP</option>
                        <option value="HBDT">HDBT</option>
                        <option value="SHEP">SHEP</option>
                        <option value="PASTRY">PASTRY</option>
                        <option value="MUSIC">MUSIC</option>
                        <option value="CAFETERIA">CAFETERIA</option>
                    </select>
                    <br /><br />
                    <button type="submit">Submit</button>
                </div>
            </form>
        );
    }
}

export default Form;
