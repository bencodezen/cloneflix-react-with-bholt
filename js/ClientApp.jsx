const React = require('react')
const ReactDOM = require('react-dom')
const MyTitle = require('./MyTitle')

const MyFirstComponent = () => (
  <div>
    <MyTitle title="Trying out JSX!" color="rebeccapurple" />
    <MyTitle title="It's not that awkward!" color="mediumaquamarine" />
    <MyTitle title="Starting to grow on me." color="papayawhip" />
  </div>
)

ReactDOM.render(<MyFirstComponent />, document.getElementById('app'))
