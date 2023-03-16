import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class CharacterCounter extends Component {
  state = {
    inputsList: [],
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderListItems = () => {
    const {inputsList} = this.state
    return inputsList.length === 0 ? (
      <div className="no-inputs-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
          alt="no user inputs"
          className="no-inputs-img"
        />
      </div>
    ) : (
      <ul className="inputs-container-ul">
        {inputsList.map(each => (
          <li key={each.id}>
            <p className="input-item">
              {each.searchInput}:{' '}
              <span className="span">{each.searchInput.length}</span>
            </p>
          </li>
        ))}
      </ul>
    )
  }

  onClickAddButton = event => {
    event.preventDefault()
    const {searchInput} = this.state
    const newInput = {
      id: uuidv4(),
      searchInput,
    }
    this.setState(prevState => ({
      inputsList: [...prevState.inputsList, newInput],
      searchInput: '',
    }))
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="main-container">
        <div className="card-container">
          <div className="result-card">
            <div className="heading-card">
              <h1 className="count-description">
                Count the characters like a Boss...
              </h1>
            </div>
            {this.renderListItems()}
          </div>
          <div className="input-card">
            <h1 className="input-heading">Character Counter</h1>
            <form className="input-container" onSubmit={this.onClickAddButton}>
              <input
                type="text"
                className="input"
                placeholder="Enter the Characters here"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
export default CharacterCounter
