var Counter = React.createClass({
  getDefaultProps: function() {
    console.log('getDefaultProps: przekazanie domyślnych wartości props\'ów');
  },
  
  getInitialState: function() {
    console.log('getInitialState: inicjalizacja stanu komponentu');
      return {
          counter: 0
      };
  },
  
  componentWillMount: function() {
    console.log('componentWillMount: sprawdzenie wartości stanu i props\'ów');
  },
  
  render: function() {
    console.log('render: pokazanie komponentu');
    return React.createElement('div', {className: 'counter'},
    React.createElement('span', {}, 'Licznik: ' + this.state.counter),
    React.createElement('button', {
      onClick: this.increment,
      className: 'btn'
      }, '++'),
    React.createElement('button', {
      onClick: this.decrement,
      className: 'btn'
      }, '--') 
    );
  },

  componentDidMount: function() {
    console.log('componentDidMount: pobranie danych z serwra');
  },

  componentWillReceiveProps: function() {
    console.log('componentWillReceiveProps: przekazanie nowych wartości props\'ów i aktualizacja stanu komponentu');
  },

  shouldComponentUpdate: function() {
    console.log('shouldComponentUpdate: sprawdzenie potrzeby aktualizacji widoku komponentu. Zwraca true lub false');
    return true;
  },

  componentWillUpdate: function() {
    console.log('componentWillUpdate: przygotowanie do nadchodzącej zmiany');
  },

  componentDidUpdate: function() {
    console.log('componentDidUpdate: manipulacje DOM');
  },

  componentWillUnmount: function() {
    console.log('componentWillUnmount: usuwanie komponentu, odpinanie zdażeń');
  },

  increment: function() {
    this.setState({
      counter: this.state.counter + 1
    });
  },

  decrement: function() {
    this.setState({
      counter: this.state.counter - 1
    });
  }
});

var element = React.createElement('div', {className: 'box'}, 
React.createElement(Counter),
React.createElement(Counter),
React.createElement(Counter)
);
ReactDOM.render(element, document.getElementById('app'));