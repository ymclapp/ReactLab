import React from 'react';

class AboutClassComponent extends React.Component {
    render() {
        return (
            <p>
                <i> Yvette Clapp About </i> 
            </p>
        )
    }
}


function About(props) {
    console.log("About props", props);
    const { message } = props;

    return (
        <p> { message }                 
        <i> You have reached the about page for the Yvette Clapp application.  Congratulations!  If you have reached this
        point, you can now know a secret:  I'm engaged.  </i>
        </p>
    );
}


export default About;