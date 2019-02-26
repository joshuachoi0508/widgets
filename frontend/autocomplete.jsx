import React from 'react';

class AutoComplete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: "",
            results: []
        };

        this.update = this.update.bind(this);
    }

    componentDidMount(){
        let results = this.props.directories.map(directory => {
            return (
                <li>
                    <a href={directory[1]} className="links">{directory[0]}</a>
                </li>
            )
        })

        this.setState({ results: results })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.userInput.length > 0 && prevState.userInput != this.state.userInput) {
            let results = this.props.directories.map(directory => {
                if (directory[0].toLocaleLowerCase().includes(this.state.userInput.toLocaleLowerCase())) {
                    return (
                        <li>
                            <a href={directory[1]} className="links">{directory[0]}</a>
                        </li>
                    )
                }
            })

            this.setState({ results: results })
        }

        if (this.state.userInput.length === 0 && prevState.userInput.length > 0) {
            let results = this.props.directories.map(directory => {
                return (
                    <li>
                        <a href={directory[1]} className="links">{directory[0]}</a>
                    </li>
                )
            })

            this.setState({ results: results })
        }
    }

    update() {
        return e => this.setState({ userInput: e.currentTarget.value })
    };

    render() {
        return (
            <div>
                <div className="autocomplete">
                    <div className="autocomplete-components">
                        <div className="input-field">
                            <input 
                            className="input-box"
                            type="text"
                            onChange={this.update()}
                            value={this.state.userInput}
                            placeholder="search"
                            ></input>
                        </div>
                        <ul className="directories">
                            {this.state.results}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AutoComplete;