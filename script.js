var request = require('request');

run()

async function run() {

	// Pass in the Signed Message and FID
	const fid = 18949;
	const signedMessage = '0a49080d1085940118f6a6a32e20018201390a1a86db69b3ffdf6ab8acb6872b69ccbe7eb6a67af7ab71e95aa69f10021a1908ef011214237025b322fd03a9ddc7ec6c078fb9c56d1a72111214e3d88aeb2d0af356024e0c693f31c11b42c76b721801224043cb2f3fcbfb5dafce110e934b9369267cf3d1aef06f51ce653dc01700fc7b778522eb7873fd60dda4611376200076caf26d40a736d3919ce14e78a684e4d30b280132203a66717c82d728beb3511b05975c6603275c7f6a0600370bf637b9ecd2bd231e';

	const getBearerToken = async() => {
	    const params = new URLSearchParams()
	    params.append('client_id', process.env.CLIENT_ID)
	    params.append('client_secret', process.env.CLIENT_SECRET)

	    const response = await fetch('https://paymagicapi.com/v1/auth', {
	        method: 'POST',
	        body: params
	    })
	    const data = await response.json()
	    return data.access_token
	}
	const access_token = await getBearerToken();

	const options = {
	  'method': 'POST',
	  'url': 'https://paymagicapi.com/v1/kernel/tx',
	  'headers': {
	    'Content-Type': 'application/json',
	    'Authorization': 'Bearer {{access_token}}'
	  },
	  body: JSON.stringify({
	    "userId": `farcaster:${fid}`,
	    "chain": "base",
	    "to": [
	      "0x74427681c620DE258Aa53a382d6a4C865738A06C"
	    ],
	    "value": [
	      "10000000000000"
	    ],
	    "data": [
	      "0x"
	    ],
	    "delegatecall": 0,
	    "auth": signedMessage
	  })

	};
	request(options, function (error, response) {
	  	if (error) throw new Error(error);
		console.log(response.body);
	});

}
