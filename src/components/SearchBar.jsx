import React, { Component } from 'react'

export class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      keyword: ''
    }

    this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this)
  }

  onKeywordChangeHandler(event) {
    const keyword = event.target.value
    this.setState({ keyword })
    this.props.searchHandler(keyword)
  }

  render() {
    const { keyword } = this.state

    return <input type='search' placeholder='Cari catatan berdasarkan judul...' value={keyword} onChange={this.onKeywordChangeHandler} />
  }
}

export default SearchBar
