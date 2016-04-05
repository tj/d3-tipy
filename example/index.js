
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import BarChart from 'd3-bar'
import Tip from '../index'
import d3 from 'd3'

const gen = n => {
  const data = []

  for (var i = 0; i < n; i++) {
    data.push({
      time: new Date(Date.now() - (i * 3600000)),
      value: Math.max(250, Math.random() * 3000 | 0)
    })
  }

  return data
}

class App extends Component {
  componentDidMount() {
    const tip = new Tip({
      format: d => d3.format(',')(d.value)
    })

    this.a = new BarChart({
      target: this.refs.a,
      mouseover: tip.show,
      mouseout: tip.hide
    })

    this.a.render(gen(24))
  }

  componentDidUpdate() {
    this.changeData()
  }

  changeData = _ => {
    const n = Math.max(15, Math.random() * 30 | 0)
    this.a.update(gen(n))
  }

  render() {
    return <div>
      <div id="actions">
        <button onClick={this.changeData}>Animate</button>
      </div>

      <section>
        <h3>Defaults</h3>
        <p>Tip default settings.</p>
        <svg ref="a" className="chart"></svg>
      </section>
    </div>
  }
}

ReactDOM.render(<App />, document.querySelector('#app'))
