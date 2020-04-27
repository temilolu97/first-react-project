import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import FeaturedHouse from "./featured-house";
import HouseSearch from "./house-search";
import SearchResults from '../search-results/search-results'
import House from '../house/house'
class App extends Component {
  state = {};
  componentDidMount() {
    this.fetchHouses();
  }

  fetchHouses = () => {
    fetch('/houses.json')
      .then(response => response.json())
      .then(allHouses => {
        this.allHouses = allHouses;
        this.determineFeaturedHouse();
        this.determineUniqueCountries();
      });
  };

  determineFeaturedHouse = () => {
    if (this.allHouses) {
      const randomIndex = Math.floor(Math.random() * this.allHouses.length);
      const featuredHouse = this.allHouses[randomIndex];
      this.setState({ featuredHouse });
    }
  };

  determineUniqueCountries = () => {
    const countries = this.allHouses 
    ? Array.from(new Set(this.allHouses.map(h => h.country))) : []

    countries.unshift(null) // first choice should be blank
    this.setState({countries})

  }
  filteredHouses =( country ) =>{
    this.setState({setActiveHouse:null})
    const filteredHouses = this.allHouses.map(h => h.country === country)
    this.setState({ filteredHouses})
    this.setState({country})
  }
  setActiveHouse = (house) => {
    this.setState({ setActiveHouse:house })
  }
  render() {
    let activeComponent = null;
    if(this.state.country) 
      activeComponent= <SearchResults country={this.state.country} filteredHouses={this.state.filteredHouses} setActiveHouse={this.state.setActiveHouse}/>
    
    if(this.state.activeHouse)
      activeComponent =<House house={this.state.activeHouse}/>
    if(!activeComponent)
      activeComponent = <FeaturedHouse house={this.state.featuredHouse}/>
    return (
      <div className="container">
        <Header subtitle="Providing houses all over the world" />
        <HouseSearch countries={this.state.countries} filteredHouses={this.filteredHouses}/>
        {activeComponent}
      </div>
    );
  }
}

export default App;
