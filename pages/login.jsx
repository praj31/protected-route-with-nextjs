import { Navbar } from "../components/Navbar"

export default function Login() {
	const handleSubmit = (e) => {
		e.preventDefault()
        const username = e.currentTarget.elements.username.value
	}

	return (
		<div className='wrapper'>
            <Navbar />
			<div className='container'>
                <form onSubmit={handleSubmit}>
					<label htmlFor='username'>Username</label>
					<input type='text' name='username' pattern="[a-z]*" minLength={4}  />
                    <input type="submit" value="Login" />
				</form>
			</div>
		</div>
	)
}
