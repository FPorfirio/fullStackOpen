module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
		"extends": [
			"eslint:recommended",
			'plugin:react/recommended'
		],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
						"tab",
						{ "SwitchCase": 1 }
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
				],
				'no-unused-vars': 0,
				'react/prop-types': 0
    }
};