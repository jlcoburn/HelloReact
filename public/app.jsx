var GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Bleh</h1>
        <p>paragraph</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: (e) => {
    e.preventDefault();
    var name = this.refs.name.value;
    console.log(name);
    if (name.length > 0) {
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },

  render: () => {
    return(
      <form>
        <input type="text" ref="name"/>
        <button>Submit</button>
      </form>
    );
  }
});

var Greeter = React.createClass({
  
  getDefaultProps: function() {
    return {
      name: 'React',
      message: 'Default message'
    };
  },

  getInitialState: function () {
    return {
      name: this.props.name
    };
  },
  
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },

  render: function() {
    var name = this.state.name;
    var message =this.props.message;
    return(
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>

        <GreeterMessage/>

        <GreeterForm onNewName={this.handleNewName}/>

      </div>
    );
  }
});

var firstName = 'Jason';

ReactDOM.render(
 <Greeter name={firstName} message='This is from a prop'/>,
 document.getElementById('app')
);
