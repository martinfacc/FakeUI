import faker from 'faker'

export const setGeneratorLocale = (locale) => {
	// faker.locale = locale
	faker.setLocale(locale);
}

export const apis = {
	address: {
		// buildingNumber: faker.address.buildingNumber,
		cardinalDirection: faker.address.cardinalDirection,
		city: faker.address.city,
		cityName: faker.address.cityName,
		cityPrefix: faker.address.cityPrefix,
		citySuffix: faker.address.citySuffix,
		country: faker.address.country,
		countryCode: faker.address.countryCode,
		county: faker.address.county,
		direction: faker.address.direction,
		latitude: faker.address.latitude,
		longitude: faker.address.longitude,
		nearbyGPSCoordinate: faker.address.nearbyGPSCoordinate,
		ordinalDirection: faker.address.ordinalDirection,
		secondaryAddress: faker.address.secondaryAddress,
		state: faker.address.state,
		stateAbbr: faker.address.stateAbbr,
		streetAddress: faker.address.streetAddress,
		streetName: faker.address.streetName,
		streetPrefix: faker.address.streetPrefix,
		streetSuffix: faker.address.streetSuffix,
		timeZone: faker.address.timeZone,
		zipCode: faker.address.zipCode,
		zipCodeByState: faker.address.zipCodeByState,
	},
	animal: {
		bear: faker.animal.bear,
		bird: faker.animal.bird,
		cat: faker.animal.cat,
		cetacean: faker.animal.cetacean,
		cow: faker.animal.cow,
		crocodilia: faker.animal.crocodilia,
		dog: faker.animal.dog,
		fish: faker.animal.fish,
		horse: faker.animal.horse,
		insect: faker.animal.insect,
		lion: faker.animal.lion,
		rabbit: faker.animal.rabbit,
		// rodent: faker.animal.rodent,
		snake: faker.animal.snake,
		type: faker.animal.type,
	},
	// color: {
	// cmyk: faker.color.cmyk,
	// colorByCSSColorSpace: faker.color.colorByCSSColorSpace,
	// cssSuportedFunction: faker.color.cssSuportedFunction,
	// hls: faker.color.hls,
	// human: faker.color.human,
	// hwb: faker.color.hwb,
	// lab: faker.color.lab,
	// lch: faker.color.lch,
	// rgb: faker.color.rgb,
	// space: faker.color.space,
	// },
	commerce: {
		color: faker.commerce.color,
		department: faker.commerce.department,
		price: faker.commerce.price,
		product: faker.commerce.product,
		productAdjective: faker.commerce.productAdjective,
		productDescription: faker.commerce.productDescription,
		productMaterial: faker.commerce.productMaterial,
		productName: faker.commerce.productName,
	},
	company: {
		bs: faker.company.bs,
		bsAdjective: faker.company.bsAdjective,
		bsBuzz: faker.company.bsBuzz,
		bsNoun: faker.company.bsNoun,
		catchPhrase: faker.company.catchPhrase,
		catchPhraseAdjective: faker.company.catchPhraseAdjective,
		catchPhraseDescriptor: faker.company.catchPhraseDescriptor,
		catchPhraseNoun: faker.company.catchPhraseNoun,
		companyName: faker.company.companyName,
		companySuffix: faker.company.companySuffix,
		companyName: faker.company.companyName,
		companySuffix: faker.company.companySuffix,
		// name: faker.company.name,
		suffixes: faker.company.suffixes,
	},
	database: {
		collation: faker.database.collation,
		column: faker.database.column,
		engine: faker.database.engine,
		// mongodbObjectId: faker.database.mongodbObjectId,
		type: faker.database.type,
	},
	datatype: {
		array: faker.datatype.array,
		// bigint: faker.datatype.bigint,
		boolean: faker.datatype.boolean,
		datetime: faker.datatype.datetime,
		float: faker.datatype.float,
		// hexadecimal: faker.datatype.hexadecimal,
		json: faker.datatype.json,
		number: faker.datatype.number,
		string: faker.datatype.string,
		uuid: faker.datatype.uuid,
	},
	date: {
		between: faker.date.between,
		betweens: faker.date.betweens,
		// birthday: faker.date.birthday,
		future: faker.date.future,
		month: faker.date.month,
		past: faker.date.past,
		recent: faker.date.recent,
		soon: faker.date.soon,
		weekday: faker.date.weekday,
	},
	finance: {
		account: faker.finance.account,
		accountName: faker.finance.accountName,
		amount: faker.finance.amount,
		bic: faker.finance.bic,
		bitcoinAddress: faker.finance.bitcoinAddress,
		creditCardCVV: faker.finance.creditCardCVV,
		// creditCardIssuer: faker.finance.creditCardIssuer,
		creditCardNumber: faker.finance.creditCardNumber,
		currencyCode: faker.finance.currencyCode,
		currencyName: faker.finance.currencyName,
		currencySymbol: faker.finance.currencySymbol,
		ethereumAddress: faker.finance.ethereumAddress,
		iban: faker.finance.iban,
		litecoinAddress: faker.finance.litecoinAddress,
		mask: faker.finance.mask,
		// pin: faker.finance.pin,
		routingNumber: faker.finance.routingNumber,
		transactionDescription: faker.finance.transactionDescription,
		transactionType: faker.finance.transactionType,
	},
	git: {
		branch: faker.git.branch,
		commitEntry: faker.git.commitEntry,
		commitMessage: faker.git.commitMessage,
		commitSha: faker.git.commitSha,
		shortSha: faker.git.shortSha,
	},
	hacker: {
		abbreviation: faker.hacker.abbreviation,
		adjective: faker.hacker.adjective,
		ingverb: faker.hacker.ingverb,
		noun: faker.hacker.noun,
		phrase: faker.hacker.phrase,
		verb: faker.hacker.verb,
	},
	helpers: {
		// arrayElement: faker.helpers.arrayElement,
		// arrayElements: faker.helpers.arrayElements,
		// fake: faker.helpers.fake,
		// maybe: faker.helpers.maybe,
		mustache: faker.helpers.mustache,
		// objectKey: faker.helpers.objectKey,
		// objectValue: faker.helpers.objectValue,
		regexpStyleStringParse: faker.helpers.regexpStyleStringParse,
		repeatString: faker.helpers.repeatString,
		replaceCreditCardSymbols: faker.helpers.replaceCreditCardSymbols,
		// replaceSymbolWithNumber: faker.helpers.replaceSymbolWithNumber,
		replaceSymbols: faker.helpers.replaceSymbols,
		shuffle: faker.helpers.shuffle,
		slugify: faker.helpers.slugify,
		// unique: faker.helpers.unique,
		// uniqueArray: faker.helpers.uniqueArray,
	},
	image: {
		abstract: faker.image.abstract,
		animals: faker.image.animals,
		avatar: faker.image.avatar,
		business: faker.image.business,
		cats: faker.image.cats,
		city: faker.image.city,
		dataUri: faker.image.dataUri,
		fashion: faker.image.fashion,
		food: faker.image.food,
		image: faker.image.image,
		imageUrl: faker.image.imageUrl,
		nature: faker.image.nature,
		nightlife: faker.image.nightlife,
		people: faker.image.people,
		sports: faker.image.sports,
		technics: faker.image.technics,
		transport: faker.image.transport,
	},
	internet: {
		avatar: faker.internet.avatar,
		color: faker.internet.color,
		domainName: faker.internet.domainName,
		domainSuffix: faker.internet.domainSuffix,
		domainWord: faker.internet.domainWord,
		email: faker.internet.email,
		// emoji: faker.internet.emoji,
		exampleEmail: faker.internet.exampleEmail,
		httpMethod: faker.internet.httpMethod,
		// httpStatusCode: faker.internet.httpStatusCode,
		ip: faker.internet.ip,
		// ipv4: faker.internet.ipv4,
		ipv6: faker.internet.ipv6,
		mac: faker.internet.mac,
		password: faker.internet.password,
		port: faker.internet.port,
		protocol: faker.internet.protocol,
		url: faker.internet.url,
		userAgent: faker.internet.userAgent,
		userName: faker.internet.userName,
	},
	lorem: {
		lines: faker.lorem.lines,
		paragraph: faker.lorem.paragraph,
		paragraphs: faker.lorem.paragraphs,
		sentence: faker.lorem.sentence,
		sentences: faker.lorem.sentences,
		slug: faker.lorem.slug,
		text: faker.lorem.text,
		word: faker.lorem.word,
		words: faker.lorem.words,
	},
	mersenne: {
		rand: faker.mersenne.rand,
		// seed: faker.mersenne.seed,
		// seed_array: faker.mersenne.seed_array,
	},
	music: {
		genre: faker.music.genre,
		// songName: faker.music.songName,
	},
	name: {
		findName: faker.name.findName,
		firstName: faker.name.firstName,
		// fullName: faker.name.fullName,
		gender: faker.name.gender,
		jobArea: faker.name.jobArea,
		jobDescriptor: faker.name.jobDescriptor,
		jobTitle: faker.name.jobTitle,
		jobType: faker.name.jobType,
		lastName: faker.name.lastName,
		middleName: faker.name.middleName,
		prefix: faker.name.prefix,
		// sex: faker.name.sex,
		// sexType: faker.name.sexType,
		suffix: faker.name.suffix,
	},
	phone: {
		// imei: faker.phone.imei,
		// number: faker.phone.number,
		phoneFormats: faker.phone.phoneFormats,
		phoneNumber: faker.phone.phoneNumber,
		phoneNumberFormat: faker.phone.phoneNumberFormat,
	},
	random: {
		alpha: faker.random.alpha,
		alphaNumeric: faker.random.alphaNumeric,
		locale: faker.random.locale,
		// numeric: faker.random.numeric,
		word: faker.random.word,
		words: faker.random.words,
	},
	// science: {
	// chemicalElement: faker.science.chemicalElement,
	// unit: faker.science.unit,
	// },
	system: {
		commonFileExt: faker.system.commonFileExt,
		commonFileName: faker.system.commonFileName,
		commonFileType: faker.system.commonFileType,
		// cron: faker.system.cron,
		directoryPath: faker.system.directoryPath,
		fileExt: faker.system.fileExt,
		fileName: faker.system.fileName,
		filePath: faker.system.filePath,
		fileType: faker.system.fileType,
		mimeType: faker.system.mimeType,
		// networkInterface: faker.system.networkInterface,
		semver: faker.system.semver,
	},
	vehicle: {
		bicycle: faker.vehicle.bicycle,
		color: faker.vehicle.color,
		fuel: faker.vehicle.fuel,
		manufacturer: faker.vehicle.manufacturer,
		model: faker.vehicle.model,
		type: faker.vehicle.type,
		vehicle: faker.vehicle.vehicle,
		vin: faker.vehicle.vin,
		vrm: faker.vehicle.vrm,
	},
	// word: {
	// adjective: faker.word.adjective,
	// adverb: faker.word.adverb,
	// conjunction: faker.word.conjunction,
	// interjection: faker.word.interjection,
	// noun: faker.word.noun,
	// preposition: faker.word.preposition,
	// verb: faker.word.verb,
	// },
}

const testApi = () => {
	const apiResult = {}
	const apiError = {}
	Object.keys(apis).forEach((key) => {
		apiResult[key] = {}
		apiError[key] = {}
		Object.keys(apis[key]).forEach((subKey) => {
			try {
				apiResult[key][subKey] = apis[key][subKey]()
			} catch (e) {
				apiError[key][subKey] = e
			}
		})
	})
	return { apiResult, apiError }
}
