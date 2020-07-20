import React, { Component } from 'react'
import api from '../api'

const queryString = require('query-string');

class FindOne extends Component {

    constructor(props) {
      super(props)

      const parsed = queryString.parse(props.location.search);
      this.parsed = parsed;
      this.state = {
          zips: [],
          isLoading: false,
      }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })
        await api.findone().then(zips => {
  console.log(zips);
            this.setState({
                zips: Array(zips.data),
                isLoading: false,
            })
        })
    }

    render() {

        const { zips } = this.state

        return (
            <div>
                <p>In this page you'll see a ZIPCODE</p>
                {zips.map(zip => <div>
                  {zip._id} {zip.city}, {zip.state}; Population: {zip.pop}
                  </div>)
                }
            </div>
        )
    }
}

export default FindOne
