export default function Login() {
    function handleLoginSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const { username, password } = form.elements;

        const loginData = {
            username:  username.value,
            password:  password.value,
        };
        console.log(loginData);
    }
    
    return (
        <form onSubmit = {handleLoginSubmit}>
            <label>Username:  <input name="username" /></label>
            <label>Password:  <input password="password" type="password"/></label>
            <button type="submit">Sign In</button>
        </form>
    )
}