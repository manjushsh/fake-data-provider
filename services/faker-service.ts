import faker from 'faker';
type Locale = string;

const FAKER_SERVICE = {

    dataGenerationFunctions: {
        address: (locale: Locale) => {
            faker.locale = locale;
            return {
                streetName: faker.address.streetName(),
                streetAdress: faker.address.streetAddress(),
                secondaryAdress: faker.address.secondaryAddress(),
                city: faker.address.city(),
                cityName: faker.address.cityName(),
                zip: faker.address.zipCode(),
                zipByState: faker.address.zipCodeByState(faker.address.state()),
                state: faker.address.state(),
                stateAbr: faker.address.stateAbbr(),
                country: faker.address.country(),
                countryCode: faker.address.countryCode(),
                latitude: faker.address.latitude(),
                longitude: faker.address.longitude(),
            };
        },
        name: (locale: Locale) => {
            faker.locale = locale;
            const min = 0, max = 1;
            const gender0Or1 = Math.floor(Math.random() * (max - min + 1)) + min;
            return {
                firstName: faker.name.firstName(gender0Or1),
                lastName: faker.name.lastName(gender0Or1),
                middleName: faker.name.middleName(gender0Or1),
                jobTitle: faker.name.jobTitle(),
                gender: gender0Or1 === 0 ? "Female" : "Male",
                title: faker.name.title(),
                jobDescriptor: faker.name.jobDescriptor(),
                jobArea: faker.name.jobArea(),
                jobType: faker.name.jobType(),
            };
        },

        phone: (locale: Locale) => {
            faker.locale = locale;
            return {
                phoneNumber: faker.phone.phoneNumber(),
                phoneNumberFormat: faker.phone.phoneNumberFormat(),
                phoneFormats: faker.phone.phoneFormats(),
            };
        },

        finance: (locale: Locale) => {
            faker.locale = locale;
            return {
                account: faker.finance.account(),
                accountName: faker.finance.accountName(),
                routingNumber: faker.finance.routingNumber(),
                mask: faker.finance.mask(),
                amount: faker.finance.amount(),
                transactionType: faker.finance.transactionType(),
                currencyCode: faker.finance.currencyCode(),
                currencyName: faker.finance.currencyName(),
                currencySymbol: faker.finance.currencySymbol(),
                bitcoinAddress: faker.finance.bitcoinAddress(),
                litecoinAddress: faker.finance.litecoinAddress(),
                creditCardNumber: faker.finance.creditCardNumber(),
                creditCardCVV: faker.finance.creditCardCVV(),
                ethereumAddress: faker.finance.ethereumAddress(),
                iban: faker.finance.iban(true),
                bic: faker.finance.bic(),
                transactionDescription: faker.finance.transactionDescription(),
            };
        },

        image: (locale: Locale) => {
            faker.locale = locale;
            return {
                image: faker.image.image(),
                avatar: faker.image.avatar(),
                imageUrl: faker.image.imageUrl(),
                abstract: faker.image.abstract(),
                animals: faker.image.animals(),
                business: faker.image.business(),
                cats: faker.image.cats(),
                city: faker.image.city(),
                food: faker.image.food(),
                nightlife: faker.image.nightlife(),
                fashion: faker.image.fashion(),
                people: faker.image.people(),
                nature: faker.image.nature(),
                sports: faker.image.sports(),
                technics: faker.image.technics(),
                transport: faker.image.transport(),
                dataUri: faker.image.dataUri(),
            };
        },
        internet: (locale: Locale) => {
            faker.locale = locale;
            const min = 0, max = 1;
            const gender0Or1 = Math.floor(Math.random() * (max - min + 1)) + min;
            const passwordLength = Math.floor(Math.random() * (18 - 9 + 1)) + 9;
            const name = {
                firstName: faker.name.firstName(gender0Or1),
                lastName: faker.name.lastName(gender0Or1),
            };
            return {
                avatar: faker.internet.avatar(),
                email: faker.internet.email(name.firstName, name.lastName),
                password: faker.internet.password(passwordLength),
                exampleEmail: faker.internet.exampleEmail(name.firstName, name.lastName),
                userName: faker.internet.userName(name.firstName, name.lastName),
                protocol: faker.internet.protocol(),
                url: faker.internet.url(),
                domainName: faker.internet.domainName(),
                domainSuffix: faker.internet.domainSuffix(),
                domainWord: faker.internet.domainWord(),
                ip: faker.internet.ip(),
                ipv6: faker.internet.ipv6(),
                port: faker.internet.port(),
                userAgent: faker.internet.userAgent(),
                color: faker.internet.color(),
                mac: faker.internet.mac(),
            };
        },
    },

    fakerKeyToTextMapper: (key) => {
        const maps = {
            streetName: "Street Name",
            streetAdress: "Street Address",
            secondaryAdress: "Secondary Address",
            city: "City",
            cityName: "City Name",
            zip: "Zip Code",
            zipByState: "Zip code for state",
            state: "State",
            stateAbr: "State Abrevation",
            country: "Country",
            countryCode: "Country Code",
            latitude: "Lattitude",
            longitude: "Longitude",
            firstName: "First Name",
            lastName: "Last Name",
            middleName: "Middle Name",
            jobTitle: "Job Title",
            gender: "Job Title",
            title: "Title",
            jobDescriptor: "Job Descriptor",
            jobArea: "Job Area",
            jobType: "Job Type",
            phoneNumber: "Phone Number",
            phoneNumberFormat: "Phone number format",
            phoneFormats: "Phone Format",
            account: "Account",
            accountName: "Account Name",
            routingNumber: "Routing Number",
            mask: "Mask",
            amount: "Amount",
            transactionType: "Transaction Type",
            currencyCode: "Currency Code",
            currencyName: "Currency Name",
            currencySymbol: "Currency Symbol",
            bitcoinAddress: "Bitcoin Address",
            litecoinAddress: "Litecoin Address",
            creditCardNumber: "Credit Card Number",
            creditCardCVV: "Credit Card CVV",
            ethereumAddress: "Etherium Address",
            iban: "Iban",
            bic: "Bic",
            transactionDescription: "Transaction Description",
            image: "Image",
            imageUrl: "Image URL",
            abstract: "Abstracts",
            animals: "Animals",
            business: "Buissness",
            cats: "Cats",
            food: "Food",
            nightlife: "Night Life",
            fashion: "Fashion",
            people: "People",
            nature: "Nature",
            sports: "Sports",
            technics: "Technics",
            transport: "Transport",
            dataUri: "Data URI",
            avatar: "Avtar",
            email: "Email",
            exampleEmail: "Example Email",
            userName: "User Name",
            protocol: "Protocol",
            url: "Url",
            domainName: "Domain Name",
            domainSuffix: "Domain Suffix",
            domainWord: "Dommain Word",
            ip: "IPv4",
            ipv6: "IPv6",
            port: "Port",
            userAgent: "User Agent",
            color: "Color",
            mac: "Mac Address",
            password: "Password",
        };
        // return maps[key];
    },
};

export default FAKER_SERVICE;