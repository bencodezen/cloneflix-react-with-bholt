const React = require('react')
const { Link } = require('react-router')
const { func, bool, string } = React.PropTypes
const { connector } = require('./Store')
const Header = React.createClass({
  propTypes: {
    setSearchTerm: func,
    showSearch: bool,
    searchTerm: string
  },
  handleSearchTermEvent (e) {
    this.props.setSearchTerm(e.target.value)
  },
  render () {
    let utilSpace
    if (this.props.showSearch) {
      utilSpace = <input value={this.props.searchTerm} className='search-input' type='text' placeholder='Search' onChange={this.handleSearchTermEvent} />
    } else {
      utilSpace = (
        <p className='header-back'>
          <Link to='/search'>
            Back
          </Link>
        </p>
      )
    }
    return (
      <header className='header'>
        <h1 className='brand'>
          <Link to='/' className='brand-link'>
            svideo
          </Link>
        </h1>
        {utilSpace}
      </header>
    )
  }
})

module.exports = connector(Header)
