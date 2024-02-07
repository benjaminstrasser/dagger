<script lang="ts">
	let username = '';
	let password = '';
	let confirmPassword = '';

	function handleSubmit() {
		// Handle form submission here
		console.log('Username:', username);
		console.log('Password:', password);
		console.log('Confirm Password:', confirmPassword);
	}
</script>

<h1>Register</h1>
<form on:submit={handleSubmit}>
	<label>
		Username:
		<input type="text" bind:value={username} />
	</label>

	<label>
		Password:
		<input type="password" bind:value={password} />
	</label>

	<label>
		Confirm Password:
		<input type="password" bind:value={confirmPassword} />
	</label>

	<button type="submit">Register</button>
</form>
