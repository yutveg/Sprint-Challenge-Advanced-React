import React from 'react'
import axios from 'axios'

class PlayerList extends React.Component {
    state = {
        players: [],
    }

    //Data is fetched once component is initially mounted
    //component is then rendered with data
    componentDidMount() {
        axios
            .get('http://localhost:5000/api/players')
            .then(res => {
                console.log(res.data)
                this.setState({ players: res.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div data-testid="playerlist" className="playerlist">
                {this.state.players.map(item => (
                    <div key={item.id} className="player-card">
                        <h1>Name: {item.name}</h1>
                        <h2>Country: {item.country}</h2>
                    </div>
                ))}
            </div>
        )
    }
}

export default PlayerList
