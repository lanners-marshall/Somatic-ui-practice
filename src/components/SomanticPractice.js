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
			</Container>
		)
	}
}

export default SomanticPractice;
