


//export default PeopleClassComponent;
//Function component must ask for props parameter
//
function People(props) {
    const {people} = props;

    return (
        <ul>
            {people.map(person => (
                <li key={person.id} > {person.name}</li>
            ))}
        </ul>
    )
}