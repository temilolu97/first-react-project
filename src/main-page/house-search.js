import React, { Component } from 'react';
class HouseSearch extends Component {
    state = {  }

    onSearchChange = (a) => {
        const country = a.target.value
        this.props.filteredHouses(country)
    }
    render() { 
        const search = this.state.search
        const countries = this.props.countries || []
        return ( 
            <div className="form-group row mt-3">
                <div className="offset-md-2 col-md-4">
                    Search for your dream house by country
                </div>
                <div className="col-md-4">
                    <select className="form-control" value={search} onchange={this.onSearchChange}>
                        {countries.map(c =><option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
            </div>
        );
    }
}
 
export default HouseSearch;