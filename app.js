const accounts = [
	'123abc_',
	'_abc123',
	'______',
	'123456',
	'abcdefg',
	'.@',
	'12345',
	'1234_',
	'abcde',
];


function validateAccount(account) {
	const regex = /^[_a-z0-9]{6,}$/;
	const result = regex.test(account);
	if (result) {
		console.log(`${account} is valid`);
	} else {
		console.log(`${account} is invalid`);
	}
	return regex.test(account);
}

for (account of accounts) {
	validateAccount(account);
}
