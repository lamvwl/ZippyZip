import React, { Component } from 'react'
import api from '../api'

const queryString = require('query-string');

class FindCity extends Component {

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
        await api.findcity(this.parsed.query, this.parsed.limit).then(zips => {
            this.setState({
                zips: zips.data,
                isLoading: false,
            })
        })
    }

    render() {

        const { zips } = this.state

        return (
            <div>
                <p>In this page you'll see the list of ZIP CODES BY CITY</p>
                {zips.map(zip => <div>
                  {zip._id} {zip.city}, {zip.state}; Population: {zip.pop}
                  </div>)
                }
            </div>
        )
    }
}

export default FindCity
