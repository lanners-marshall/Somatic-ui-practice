import React from 'react';
//import axios from 'axios';
import { Button, Container, Divider, Grid, Segment } from 'semantic-ui-react'

class SomanticPractice extends React.Component {
	constructor(props){
		super(props);
		this.state = {};
	}

	componentDidMount(){}

	testBtn = (e) => {
		console.log(e.target)
	}

	render() {
		return (
			<Container>
				<p>hello world</p>
				<Button onClick={this.testBtn} > Button Here</Button>
				<Segment>
					<Grid columns={2} relaxed='very' stackable>
						<Grid.Column>
							<p>
				        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
				        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
				        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
				        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
				        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
				        pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
				        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
				        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
				        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
				        augue. Curabitur ullamcorper ultricies nisi.
				      </p>
			      </Grid.Column>
			      <Grid.Column>
				      <p>
				        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
				        Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
				        ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
				        consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
				        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu
				        pede link mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
				        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend
				        ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
				        nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
				        augue. Curabitur ullamcorper ultricies nisi.
				      </p>
				    </Grid.Column>
				  </Grid>
		    </Segment>
		    <ul>
					<i class="angle double down icon"></i>
					<i class="angle double left icon"></i>
					<i class="angle double right icon"></i>
					<i class="angle double up icon"></i>
					<i class="angle down icon"></i>
					<i class="angle left icon"></i>
					<i class="angle right icon"></i>
					<i class="angle up icon"></i>
					<i class="arrow alternate circle down icon"></i>
					<i class="arrow alternate circle down outline icon"></i>
					<i class="arrow alternate circle left icon"></i>
					<i class="arrow alternate circle left outline icon"></i>
					<i class="arrow alternate circle right icon"></i>
					<i class="arrow alternate circle right outline icon"></i>
					<i class="arrow alternate circle up icon"></i>
					<i class="arrow alternate circle up outline icon"></i>
					<i class="arrow circle down icon"></i>
					<i class="arrow circle left icon"></i>
					<i class="arrow circle right icon"></i>
					<i class="arrow circle up icon"></i>
					<i class="arrow down icon"></i>
					<i class="arrow left icon"></i>
					<i class="arrow right icon"></i>
					<i class="arrow up icon"></i>
					<i class="arrows alternate icon"></i>
					<i class="arrows alternate horizontal icon"></i>
					<i class="arrows alternate vertical icon"></i>
					<i class="caret down icon"></i>
					<i class="caret left icon"></i>
					<i class="caret right icon"></i>
					<i class="caret square down icon"></i>
					<i class="caret square down outline icon"></i>
					<i class="caret square left icon"></i>
					<i class="caret square left outline icon"></i>
					<i class="caret square right icon"></i>
					<i class="caret square right outline icon"></i>
					<i class="caret square up icon"></i>
					<i class="caret square up outline icon"></i>
					<i class="caret up icon"></i>
					<i class="cart arrow down icon"></i>
					<i class="chart line icon"></i>
					<i class="chevron circle down icon"></i>
					<i class="chevron circle left icon"></i>
					<i class="chevron circle right icon"></i>
					<i class="chevron circle up icon"></i>
					<i class="chevron down icon"></i>
					<i class="chevron left icon"></i>
					<i class="chevron right icon"></i>
					<i class="chevron up icon"></i>
					<i class="cloud download icon"></i>
					<i class="cloud upload icon"></i>
					<i class="download icon"></i>
					<i class="exchange alternate icon"></i>
					<i class="expand arrows alternate icon"></i>
					<i class="external alternate icon"></i>
					<i class="external square alternate icon"></i>
					<i class="hand point down icon"></i>
					<i class="hand point down outline icon"></i>
					<i class="hand point left icon"></i>
					<i class="hand point left outline icon"></i>
					<i class="hand point right icon"></i>
					<i class="hand point right outline icon"></i>
					<i class="hand point up icon"></i>
					<i class="hand point up outline icon"></i>
					<i class="hand pointer icon"></i>
					<i class="hand pointer outline icon"></i>
					<i class="history icon"></i>
					<i class="level down alternate icon"></i>
					<i class="level up alternate icon"></i>
					<i class="location arrow icon"></i>
					<i class="long arrow alternate down icon"></i>
					<i class="long arrow alternate left icon"></i>
					<i class="long arrow alternate right icon"></i>
					<i class="long arrow alternate up icon"></i>
					<i class="mouse pointer icon"></i>
					<i class="play icon"></i>
					<i class="random icon"></i>
					<i class="recycle icon"></i>
					<i class="redo icon"></i>
					<i class="redo alternate icon"></i>
					<i class="reply icon"></i>
					<i class="reply all icon"></i>
					<i class="retweet icon"></i>
					<i class="share icon"></i>
					<i class="share square icon"></i>
					<i class="share square outline icon"></i>
					<i class="sign in alternate icon"></i>
					<i class="sign out alternate icon"></i>
					<i class="sort icon"></i>
					<i class="sort alphabet down icon"></i>
					<i class="sort alphabet up icon"></i>
					<i class="sort amount down icon"></i>
					<i class="sort amount up icon"></i>
					<i class="sort down icon"></i>
					<i class="sort numeric down icon"></i>
					<i class="sort numeric up icon"></i>
					<i class="sort up icon"></i>
					<i class="sync icon"></i>
					<i class="sync alternate icon"></i>
					<i class="text height icon"></i>
					<i class="text width icon"></i>
					<i class="undo icon"></i>
					<i class="undo alternate icon"></i>
					<i class="upload icon"></i>
		    </ul>
				<div class="ui ordered steps">
				  <div class="completed step">
				    <div class="content">
				      <div class="title">Shipping</div>
				      <div class="description">Choose your shipping options</div>
				    </div>
				  </div>
				  <div class="completed step">
				    <div class="content">
				      <div class="title">Billing</div>
				      <div class="description">Enter billing information</div>
				    </div>
				  </div>
				  <div class="active step">
				    <div class="content">
				      <div class="title">Confirm Order</div>
				      <div class="description">Verify order details</div>
				    </div>
				  </div>
				</div>
				<form class="ui form">
				  <div class="field">
				    <label>First Name</label>
				    <input type="text" name="first-name" placeholder="First Name"/>
				  </div>
				  <div class="field">
				    <label>Last Name</label>
				    <input type="text" name="last-name" placeholder="Last Name"/>
				  </div>
				  <div class="field">
				    <div class="ui checkbox">
				      <input type="checkbox" tabindex="0" class="hidden"/>
				      <label>I agree to the Terms and Conditions</label>
				    </div>
				  </div>
				  <button class="ui button" type="submit">Submit</button>
				</form>
				<div class="ui small image">
				  <img src="/images/wireframe/image.png"/>
				</div>
				<img class="hidden ui image" src="/images/wireframe/image.png"/>
				<div class="ui relaxed divided list">
				  <div class="item">
				    <i class="large github middle aligned icon"></i>
				    <div class="content">
				      <a class="header">Semantic-Org/Semantic-UI</a>
				      <div class="description">Updated 10 mins ago</div>
				    </div>
				  </div>
				  <div class="item">
				    <i class="large github middle aligned icon"></i>
				    <div class="content">
				      <a class="header">Semantic-Org/Semantic-UI-Docs</a>
				      <div class="description">Updated 22 mins ago</div>
				    </div>
				  </div>
				  <div class="item">
				    <i class="large github middle aligned icon"></i>
				    <div class="content">
				      <a class="header">Semantic-Org/Semantic-UI-Meteor</a>
				      <div class="description">Updated 34 mins ago</div>
				    </div>
				  </div>
				</div>
				<div class="ui icon message">
				  <i class="notched circle loading icon"></i>
				  <div class="content">
				    <div class="header">
				      Just one second
				    </div>
				    <p>We're fetching that content for you.</p>
				  </div>
				</div>
			</Container>
		)
	}
}

export default SomanticPractice;
